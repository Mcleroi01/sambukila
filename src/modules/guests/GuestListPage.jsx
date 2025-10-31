import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { firestoreService } from "../../services/firestore";
import MainLayout from "../../layouts/MainLayout";
import GuestForm from "../../components/GuestForm";
import QRCodeCard from "../../components/QRCodeCard";
import InviteShareButton from "../../components/InviteShareButton";
import { Users, Plus, ArrowLeft } from "lucide-react";
import { helpers } from "../../utils/helpers";

const GuestListPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showQRCode, setShowQRCode] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch event details
      const eventResult = await firestoreService.getEvent(eventId);
      if (eventResult.success) {
        setEvent(eventResult.event);
      }

      // Fetch guests
      const guestsResult = await firestoreService.getEventGuests(eventId);
      console.log("Fetched guests:", guestsResult);

      if (guestsResult.success) {
        setGuests(guestsResult.guests);
      }

      setLoading(false);
    };

    fetchData();
  }, [eventId]);

  const handleAddGuest = async (guestData) => {
    const result = await firestoreService.createGuest({
      ...guestData,
      eventId,
    });

    if (result.success) {
      const inviteUrl = `${window.location.origin}/invite/${result.id}`;
      const newGuest = {
        id: result.id,
        ...guestData,
        eventId,
        inviteUrl,
      };
      setGuests((prev) => [newGuest, ...prev]);
      setShowAddForm(false);
    } else {
      alert("Error adding guest: " + result.error);
    }
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      </MainLayout>
    );
  }

  if (!event) {
    return (
      <MainLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900">Event not found</h2>
          <Link
            to="/dashboard"
            className="text-purple-600 hover:text-purple-700 mt-4 inline-block"
          >
            Return to Dashboard
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-6 px-2 sm:px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Guest Management
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                {event.eventTitle} - {event.coupleName}
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors w-full md:w-auto justify-center"
          >
            <Plus className="h-5 w-5" />
            <span>Add Guest</span>
          </button>
        </div>

        {/* Event Summary */}
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {guests.length}
              </div>
              <div className="text-sm text-gray-600">Total Guests</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">
                {helpers.formatDate(event.date)}
              </div>
              <div className="text-sm text-gray-600">Event Date</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {helpers.formatTime(event.time)}
              </div>
              <div className="text-sm text-gray-600">Event Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {event.location}
              </div>
              <div className="text-sm text-gray-600">Location</div>
            </div>
          </div>
        </div>

        {/* Add Guest Modal */}
        {showAddForm && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowAddForm(false)} // Close modal on background click
          >
            <div
              className="bg-white rounded-xl shadow-xl max-w-md w-full"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Add New Guest
                </h2>
                <GuestForm
                  onSubmit={handleAddGuest}
                  onCancel={() => setShowAddForm(false)}
                />
              </div>
            </div>
          </div>
        )}

        {/* QR Code Modal */}
        {showQRCode && (
          <QRCodeCard guest={showQRCode} onClose={() => setShowQRCode(null)} />
        )}

        {/* Guests List */}
        <div className="bg-white rounded-xl shadow-md overflow-x-auto">
          <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              Guest List
            </h2>
          </div>
          {guests.length === 0 ? (
            <div className="text-center py-12 px-2">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                No guests added yet
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Start building your guest list
              </p>
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto"
              >
                Add First Guest
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {guests.map((guest) => (
                <div
                  key={guest.id}
                  className="p-4 sm:p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                        {guest.name}
                      </h3>
                      <div className="flex flex-wrap items-center space-x-4 mt-1 text-xs sm:text-sm text-gray-600">
                        {guest.email && <span>📧 {guest.email}</span>}
                        {guest.phone && <span>📱 {guest.phone}</span>}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4 w-full md:w-auto">
                      <button
                        onClick={() => setShowQRCode(guest)}
                        className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                        title="View QR Code"
                      >
                        📱
                      </button>
                      <InviteShareButton guest={guest} event={event} />
                      <a
                        href={`/guest/${guest.id}/public`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm transition-colors w-full md:w-auto text-center"
                      >
                        View
                      </a>
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

export default GuestListPage;
