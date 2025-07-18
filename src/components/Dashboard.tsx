import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../lib/firebase";
import { WeddingEvent } from "../types";
import { Calendar, Users, Plus, ExternalLink } from "lucide-react";

const Dashboard: React.FC = () => {
  const [events, setEvents] = useState<WeddingEvent[]>([]);
  const [guestCounts, setGuestCounts] = useState<{ [eventId: string]: number }>(
    {}
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsSnapshot = await getDocs(collection(db, "events"));
        const eventsData = eventsSnapshot.docs.map((doc) => ({
          id: doc.id, // Ajoute ceci
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate() || new Date(),
        })) as WeddingEvent[];

        setEvents(eventsData);

        console.log("Events récupérés depuis Firestore:", eventsData);


        // Fetch guest counts for each event
        const counts: { [eventId: string]: number } = {};
        for (const event of eventsData) {
          const guestsSnapshot = await getDocs(
            query(collection(db, "guests"), where("eventId", "==", event.id))
          );
          counts[event.id] = guestsSnapshot.size;
          console.log(
            `Nombre d'invités pour l'événement ${event.eventName} (${event.id}): ${counts[event.id]}`
          );
        }
        setGuestCounts(counts);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Event Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Manage your wedding events and invitations
          </p>
        </div>
        <Link
          to="/create-event"
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
              <p className="text-2xl font-bold text-gray-900">
                {events.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-pink-100">
          <div className="flex items-center">
            <div className="bg-pink-100 rounded-lg p-3">
              <Users className="h-6 w-6 text-pink-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Guests</p>
              <p className="text-2xl font-bold text-gray-900">
                {Object.values(guestCounts).reduce((a, b) => a + b, 0)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gold-100">
          <div className="flex items-center">
            <div className="bg-yellow-100 rounded-lg p-3">
              <ExternalLink className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Invitations Sent
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {Object.values(guestCounts).reduce((a, b) => a + b, 0)}
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
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No events yet
            </h3>
            <p className="text-gray-600 mb-6">
              Get started by creating your first wedding event
            </p>
            <Link
              to="/create-event"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Create Your First Event
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {events.map((event) => (
              <div
                key={event.id}
                className="p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {event.eventName}
                    </h3>
                    <p className="text-purple-600 font-medium">
                      {event.coupleName}
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                      <span>{event.time}</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">
                        {guestCounts[event.id] || 0}
                      </p>
                      <p className="text-sm text-gray-600">Guests</p>
                    </div>
                    <Link
                      to={`/event/${event.id}/guests`}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      Manage
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
