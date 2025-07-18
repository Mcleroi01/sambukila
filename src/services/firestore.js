import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  orderBy,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { v4 as uuidv4 } from "uuid";
export const firestoreService = {
  // Events
  createEvent: async (eventData) => {
    try {
      const customId = uuidv4(); // Generate a unique ID
      await setDoc(doc(db, "events", customId), {
        ...eventData,
        id: customId, // optionnel, si tu veux inclure l'id dans les données
        createdAt: new Date(),
      });
      return { success: true, id: customId };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  createUser: async (userId, userData) => {
    try {
      await setDoc(doc(db, "users", userId), userData);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  getUserEvents: async (userId) => {
    try {
      const q = query(
        collection(db, "events"),
        where("userId", "==", userId),
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(q);
      const events = [];
      querySnapshot.forEach((doc) => {
        events.push({ id: doc.id, ...doc.data() });
      });
      return { success: true, events };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  getAllEvents: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "events"));
      const events = [];
      querySnapshot.forEach((doc) => {
        events.push({ id: doc.id, ...doc.data() });
      });
      return { success: true, events };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  getEvent: async (eventId) => {
    try {
      const docRef = doc(db, "events", eventId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { success: true, event: { id: docSnap.id, ...docSnap.data() } };
      } else {
        return { success: false, error: "Event not found" };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Users
  getUser: async (userId) => {
    try {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { success: true, user: { id: docSnap.id, ...docSnap.data() } };
      } else {
        return { success: false, error: "User not found" };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Guests
  createGuest: async (guestData) => {
    try {
      const customId = uuidv4();
      const docRef = await addDoc(collection(db, "guests"), {
        ...guestData,
        createdAt: new Date(),
        scanned: false,
        id: customId,
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  getEventGuests: async (eventId) => {
    try {
     const q = query(
       collection(db, "guests"),
       where("eventId", "==", eventId)
       // Retire orderBy temporairement si pas d'index
     );

      const querySnapshot = await getDocs(q);
      const guests = [];
      querySnapshot.forEach((doc) => {
        guests.push({ id: doc.id, ...doc.data() });
      });
      return { success: true, guests };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  getGuest: async (guestId) => {
    try {
      const docRef = doc(db, "guests", guestId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { success: true, guest: { id: docSnap.id, ...docSnap.data() } };
      } else {
        return { success: false, error: "Guest not found" };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  updateGuestScanStatus: async (guestId, status) => {
    try {
      const guestRef = doc(db, "guests", guestId);
      await updateDoc(guestRef, { scanned: status });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  deleteGuest: async (guestId) => {
    try {
      await deleteDoc(doc(db, "guests", guestId));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

 guestPublicView: async (guestId) => {
  try {
    console.log("🔎 Searching guest with ID (via query):", guestId);
    
    const q = query(
      collection(db, "guests"),
      where("id", "==", guestId)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.warn("🚫 Guest not found via query");
      return { success: false, error: "Guest not found" };
    }

    // Si on trouve un résultat, on retourne le premier
    const docSnap = querySnapshot.docs[0];
    return { success: true, guest: { id: docSnap.id, ...docSnap.data() } };

  } catch (error) {
    console.error("🔥 Error fetching guest via query:", error);
    return { success: false, error: error.message };
  }
},



  importGuestsPdf: async (eventId, guestsData) => {
    try {
      const batch = db.batch();
      guestsData.forEach((guest) => {
        const customId = uuidv4();
        const guestRef = doc(collection(db, "guests"));
        batch.set(guestRef, {
          ...guest,
          eventId,
          id: customId,
          createdAt: new Date(),
          scanned: false,
        });
      });
      await batch.commit();
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
};
