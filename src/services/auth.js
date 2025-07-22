import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  updatePassword,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

let currentUser = null;

onAuthStateChanged(auth, async (firebaseUser) => {
  if (firebaseUser) {
    const userRef = doc(db, "users", firebaseUser.uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const userData = userSnap.data();
      currentUser = { ...firebaseUser, role: userData.role };
    } else {
      currentUser = firebaseUser;
    }
  } else {
    currentUser = null;
  }
});

export const authService = {
  // Login user
  login: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Create admin user
  createUser: async ({ email, password, fullName, role = "admin" }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Enregistrer dans Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        fullName,
        role,
        photoURL: user.photoURL || null,
        createdAt: new Date(),
      });

      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Register user (standard user)
  register: async ({ email, password, fullName, role = "user" }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Enregistrer dans Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        fullName,
        role,
        photoURL: user.photoURL || null,
        createdAt: new Date(),
      });

      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Update user profile
  updateUserProfile: async ({ displayName, photoURL }) => {
    const user = auth.currentUser;
    if (!user) return { success: false, error: "No user logged in" };

    try {
      await updateProfile(user, { displayName, photoURL });

      // Met à jour aussi Firestore si tu utilises une collection 'users'
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { displayName, photoURL });

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Update user password
  updateUserPassword: async (newPassword) => {
    const user = auth.currentUser;
    if (!user) return { success: false, error: "No user logged in" };

    try {
      await updatePassword(user, newPassword);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Logout user
  logout: async () => {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Get current user from Firebase Auth
  getCurrentUser: () => currentUser,

  // Get current user data from Firestore
  getUserData: async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        return { success: true, data: userDoc.data() };
      } else {
        return { success: false, error: "User not found in Firestore" };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
};
