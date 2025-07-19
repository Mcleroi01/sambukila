import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

import LandingPage from "./components/landingPage"; // adapte le chemin si nécessaire

// Auth Pages
import LoginPage from "./modules/auth/LoginPage";
import RegisterPage from "./modules/auth/RegisterPage";

// Event Pages
import EventListPage from "./modules/events/EventListPage";
import EventCreatePage from "./modules/events/EventCreatePage";

// Guest Pages
import GuestListPage from "./modules/guests/GuestListPage";
import InvitePublicView from "./modules/guests/InvitePublicView";
import GuestRoute from "./components/GuestRoute";

// User Management
import UserManagementPage from "./modules/users/UserManagementPage";

const AppRoutes = () => {
  const { role } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={
          <GuestRoute>
            <LoginPage />
          </GuestRoute>
        }
      />

      <Route
        path="/register"
        element={
          <GuestRoute>
            <RegisterPage />
          </GuestRoute>
        }
      />
      <Route path="/guest/:guestId/public" element={<InvitePublicView />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            {role === 'superadmin' ? <UserManagementPage /> : <EventListPage />}
          </ProtectedRoute>
        }
      />

      <Route
        path="/events/create"
        element={
          <ProtectedRoute>
            <EventCreatePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/events/"
        element={
          <ProtectedRoute>
            <EventListPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/events/:eventId/guests"
        element={
          <ProtectedRoute>
            <GuestListPage />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/users"
        element={
          <AdminRoute>
            <UserManagementPage />
          </AdminRoute>
        }
      />

      <Route path="/landing" element={<LandingPage />} />

      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/landing" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
