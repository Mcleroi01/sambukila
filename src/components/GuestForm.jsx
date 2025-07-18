import React, { useState } from "react";
import { User, Mail, Phone } from "lucide-react";
import { validators } from "../utils/validators";

const GuestForm = ({
  onSubmit,
  onCancel,
  loading = false,
  initialData = {},
}) => {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    invitationType: initialData.invitationType || "single",
    gender: initialData.gender || "",
    tableCode: initialData.tableCode || "",
    secretCode: initialData.secretCode || "",
    invitationType: initialData.invitationType || "single",
    gender: initialData.gender || "",
    tableCode: initialData.tableCode || "",
    secretCode: initialData.secretCode || "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validators.required(formData.name)) {
      newErrors.name = "Guest name is required";
    }

    if (formData.email && !validators.email(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone && !validators.phone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // At least one contact method is required
    if (!formData.email && !formData.phone) {
      newErrors.contact = "Please provide either email or phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <User className="inline h-4 w-4 mr-1" />
            Guest Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter guest name"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
              errors.name ? "border-red-300" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Mail className="inline h-4 w-4 mr-1" />
            Email (Optional)
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="guest@example.com"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
              errors.email ? "border-red-300" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          <Phone className="inline h-4 w-4 mr-1" />
          Phone (Optional)
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1234567890"
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
            errors.phone ? "border-red-300" : "border-gray-300"
          }`}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Type d'invitation */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type d'invitation
          </label>
          <select
            name="invitationType"
            value={formData.invitationType}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 border-gray-300"
          >
            <option value="single">Single</option>
            <option value="couple">Couple</option>
          </select>
        </div>

        {/* Si single, demander genre */}
        {formData.invitationType === "single" && (
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Genre
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 border-gray-300"
            >
              <option value="">-- Select --</option>
              <option value="madame">Madame</option>
              <option value="monsieur">Monsieur</option>
            </select>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Code Table */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Code Table
          </label>
          <input
            type="text"
            name="tableCode"
            value={formData.tableCode}
            onChange={handleChange}
            placeholder="Ex: T1, VIP, Famille A"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 border-gray-300"
          />
        </div>
        {/* Mot de code */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mot de code (facultatif)
          </label>
          <input
            type="text"
            name="secretCode"
            value={formData.secretCode}
            onChange={handleChange}
            placeholder="Code personnalisé"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 border-gray-300"
          />
        </div>

        {errors.contact && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-lg">
            {errors.contact}
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg transition-colors"
        >
          {loading ? "Adding..." : "Add Guest"}
        </button>
      </div>
    </form>
  );
};

export default GuestForm;
