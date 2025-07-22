import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import MainLayout from "../../layouts/MainLayout";
import { authService } from "../../services/auth";
import { firestoreService } from "../../services/firestore";

const UserManagementPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await firestoreService.getUsers(); // Crée cette fonction selon ta logique Firestore
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { success, error: authError } = await authService.createUser({
      email,
      password,
      fullName: "Nom utilisateur",
      role,
    });

    if (success) {
      setSuccess("User created successfully!");
      setEmail("");
      setPassword("");
      setRole("user");
      setIsOpen(false);
    } else {
      setError(authError);
    }
  };

  return (
    <MainLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Gestion des utilisateurs</h1>
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <PlusIcon className="w-5 h-5" />
            Nouvel utilisateur
          </button>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold mb-4">Liste des utilisateur</h2>
          {users.length === 0 ? (
            <p className="text-gray-500">Aucun utilisateur enregistré.</p>
          ) : (
            <ul className="divide-y">
              {users.map((user, index) => (
                <li key={index} className="py-2">
                  <div className="flex justify-between items-center">
                    <span>{user.fullName}</span>
                    <span className="text-sm text-gray-500">{user.role}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
              <Dialog.Title className="text-xl font-bold mb-4">
                Créer un utilisateur
              </Dialog.Title>

              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
              {success && (
                <p className="text-green-500 text-sm mb-2">{success}</p>
              )}

              <form onSubmit={handleCreateUser}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="mt-1 block w-full border rounded px-3 py-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mot de passe
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    className="mt-1 block w-full border rounded px-3 py-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Rôle
                  </label>
                  <select
                    id="role"
                    className="mt-1 block w-full border rounded px-3 py-2"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="user">Utilisateur</option>
                    <option value="super">administrateur</option>
                  </select>
                </div>

                <div className="flex justify-end gap-2 mt-6">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Créer
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </MainLayout>
  );
};

export default UserManagementPage;
