import React, { useState } from 'react';
import { authService } from '../../services/auth';
import { firestoreService } from '../../services/firestore';

const UserManagementPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const { success, user, error: authError } = await authService.createUser(email, password);

    if (success) {
      const { success: firestoreSuccess, error: firestoreError } = await firestoreService.createUser(user.uid, {
        email,
        role,
        createdAt: new Date(),
      });

      if (firestoreSuccess) {
        setSuccess('User created successfully!');
        setEmail('');
        setPassword('');
        setRole('user');
      } else {
        setError(firestoreError);
      }
    } else {
      setError(authError);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleCreateUser} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-bold mb-4">Create User</h2>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
          {success && <p className="text-green-500 text-xs italic">{success}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
              Role
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="superadmin">Super Admin</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserManagementPage;
