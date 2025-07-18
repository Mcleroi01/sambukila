import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { firestoreService } from '../../services/firestore';
import MainLayout from '../../layouts/MainLayout';
import { Calendar, Users, Plus, ExternalLink } from 'lucide-react';
import { helpers } from '../../utils/helpers';

const EventListPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchEvents = async () => {
      if (user) {
        const result = await firestoreService.getAllEvents();
        console.log("Fetched events:", result);
        if (result.success) {
          setEvents(result.events);
        }
      }
      setLoading(false);
    };

    fetchEvents();
  }, [user]);

  if (loading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Event Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your wedding events and invitations</p>
          </div>
          <Link
            to="/events/create"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors"
          >
            <Plus className="h-5 w-5" />
            <span>Create Event</span>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border border-purple-100">
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-lg p-3">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Events</p>
                <p className="text-2xl font-bold text-gray-900">{events.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border border-pink-100">
            <div className="flex items-center">
              <div className="bg-pink-100 rounded-lg p-3">
                <Users className="h-6 w-6 text-pink-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Events</p>
                <p className="text-2xl font-bold text-gray-900">
                  {events.filter(event => new Date(event.date) >= new Date()).length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-yellow-100">
            <div className="flex items-center">
              <div className="bg-yellow-100 rounded-lg p-3">
                <ExternalLink className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">
                  {events.filter(event => {
                    const eventDate = new Date(event.date);
                    const now = new Date();
                    return eventDate.getMonth() === now.getMonth() && 
                           eventDate.getFullYear() === now.getFullYear();
                  }).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Events List */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Your Events</h2>
          </div>
          {events.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No events yet</h3>
              <p className="text-gray-600 mb-6">Get started by creating your first wedding event</p>
              <Link
                to="/events/create"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Create Your First Event
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {events.map((event) => (
                <div key={event.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{event.eventTitle}</h3>
                      <p className="text-purple-600 font-medium">{event.coupleName}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <span>{helpers.formatDate(event.date)}</span>
                        <span>{helpers.formatTime(event.time)}</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Link
                        to={`/events/${event.id}/guests`}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        Manage Guests
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default EventListPage;