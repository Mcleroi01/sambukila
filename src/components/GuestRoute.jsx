import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function GuestRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Chargement...</div>;

  return user ? <Navigate to="/dashboard" replace /> : children;
}
