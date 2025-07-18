import React, { useState } from 'react';
import { Calendar, Clock, MapPin, MessageSquare, Image, Save } from 'lucide-react';
import { validators } from '../utils/validators';

const EventForm = ({ onSubmit, loading = false, initialData = {} }) => {
  const [formData, setFormData] = useState({
    coupleName: initialData.coupleName || '',
    eventTitle: initialData.eventTitle || '',
    date: initialData.date || '',
    time: initialData.time || '',
    location: initialData.location || '',
    customMessage: initialData.customMessage || '',
    backgroundImageUrl: initialData.backgroundImageUrl || ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validators.required(formData.coupleName)) {
      newErrors.coupleName = 'Couple name is required';
    }

    if (!validators.required(formData.eventTitle)) {
      newErrors.eventTitle = 'Event title is required';
    }

    if (!validators.required(formData.date)) {
      newErrors.date = 'Date is required';
    }

    if (!validators.required(formData.time)) {
      newErrors.time = 'Time is required';
    }

    if (!validators.required(formData.location)) {
      newErrors.location = 'Location is required';
    }

    if (!validators.required(formData.customMessage)) {
      newErrors.customMessage = 'Custom message is required';
    }

    if (formData.backgroundImageUrl && !validators.url(formData.backgroundImageUrl)) {
      newErrors.backgroundImageUrl = 'Please enter a valid URL';
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Couple's Name
          </label>
          <input
            type="text"
            name="coupleName"
            value={formData.coupleName}
            onChange={handleChange}
            placeholder="e.g., John & Jane"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
              errors.coupleName ? 'border-red-300' : 'border-gray-300'
            }`}
          />
          {errors.coupleName && (
            <p className="text-red-500 text-sm mt-1">{errors.coupleName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Event Title
          </label>
          <input
            type="text"
            name="eventTitle"
            value={formData.eventTitle}
            onChange={handleChange}
            placeholder="e.g., Wedding Reception"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
              errors.eventTitle ? 'border-red-300' : 'border-gray-300'
            }`}
          />
          {errors.eventTitle && (
            <p className="text-red-500 text-sm mt-1">{errors.eventTitle}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="inline h-4 w-4 mr-1" />
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
              errors.date ? 'border-red-300' : 'border-gray-300'
            }`}
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Clock className="inline h-4 w-4 mr-1" />
            Time
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
              errors.time ? 'border-red-300' : 'border-gray-300'
            }`}
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <MapPin className="inline h-4 w-4 mr-1" />
          Location
        </label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g., Grand Ballroom, City Hotel"
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
            errors.location ? 'border-red-300' : 'border-gray-300'
          }`}
        />
        {errors.location && (
          <p className="text-red-500 text-sm mt-1">{errors.location}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <MessageSquare className="inline h-4 w-4 mr-1" />
          Custom Message
        </label>
        <textarea
          name="customMessage"
          value={formData.customMessage}
          onChange={handleChange}
          rows={4}
          placeholder="A personal message for your guests..."
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
            errors.customMessage ? 'border-red-300' : 'border-gray-300'
          }`}
        />
        {errors.customMessage && (
          <p className="text-red-500 text-sm mt-1">{errors.customMessage}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Image className="inline h-4 w-4 mr-1" />
          Background Image URL (Optional)
        </label>
        <input
          type="url"
          name="backgroundImageUrl"
          value={formData.backgroundImageUrl}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
            errors.backgroundImageUrl ? 'border-red-300' : 'border-gray-300'
          }`}
        />
        {errors.backgroundImageUrl && (
          <p className="text-red-500 text-sm mt-1">{errors.backgroundImageUrl}</p>
        )}
        <p className="text-sm text-gray-500 mt-1">
          Provide a URL to an image that will be used as the invitation background
        </p>
      </div>

      <div className="flex justify-end space-x-4 pt-6">
        <button
          type="submit"
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors"
        >
          {loading ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          ) : (
            <Save className="h-4 w-4" />
          )}
          <span>{loading ? 'Creating...' : 'Create Event'}</span>
        </button>
      </div>
    </form>
  );
};

export default EventForm;