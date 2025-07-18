import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

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

function App() {
  return (
    <AuthProvider>
      <Router>
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
                <EventListPage />
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

          <Route path="/landing" element={<LandingPage />} />

          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/landing" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
