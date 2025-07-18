import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, addDoc, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { WeddingEvent, Guest } from '../types';
import { Users, Plus, QrCode, Share2, Mail, Phone, ArrowLeft } from 'lucide-react';
import { QRCode } from 'qrcode.react';

const GuestManagement: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<WeddingEvent | null>(null);
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showQRCode, setShowQRCode] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!eventId) return;

      try {
        // Fetch event details
        const eventDoc = await getDoc(doc(db, 'events', eventId));
        if (eventDoc.exists()) {
          setEvent({ id: eventDoc.id, ...eventDoc.data() } as WeddingEvent);
        }

        // Fetch guests
        const guestsSnapshot = await getDocs(
          query(collection(db, 'guests'), where('eventId', '==', eventId))
        );
        const guestsData = guestsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Guest[];
        setGuests(guestsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [eventId]);

  const handleAddGuest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventId) return;

    try {
      const guestId = `guest_${Date.now()}`;
      const invitationUrl = `${window.location.origin}/invite/${guestId}`;
      
      const guestData: Omit<Guest, 'id'> = {
        eventId,
        ...formData,
        invitationUrl,
        createdAt: new Date()
      };

      await addDoc(collection(db, 'guests'), { ...guestData, id: guestId });
      
      setGuests(prev => [...prev, { id: guestId, ...guestData }]);
      setFormData({ name: '', email: '', phone: '' });
      setShowAddForm(false);
    } catch (error) {
      console.error('Error adding guest:', error);
      alert('Error adding guest. Please try again.');
    }
  };

  const shareOnWhatsApp = (guest: Guest) => {
    const message = `You're invited to ${event?.eventName}! View your invitation: ${guest.invitationUrl}`;
    const whatsappUrl = `https://wa.me/${guest.phone?.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Event not found</h2>
        <Link to="/" className="text-purple-600 hover:text-purple-700 mt-4 inline-block">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Guest Management</h1>
            <p className="text-gray-600">{event.eventName} - {event.coupleName}</p>
          </div>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Add Guest</span>
        </button>
      </div>

      {/* Event Summary */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{guests.length}</div>
            <div className="text-sm text-gray-600">Total Guests</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-600">{new Date(event.date).toLocaleDateString()}</div>
            <div className="text-sm text-gray-600">Event Date</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">{event.time}</div>
            <div className="text-sm text-gray-600">Event Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{guests.length}</div>
            <div className="text-sm text-gray-600">Invitations</div>
          </div>
        </div>
      </div>

      {/* Add Guest Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Guest</h2>
              <form onSubmit={handleAddGuest} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Guest Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
                  >
                    Add Guest
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* QR Code Modal */}
      {showQRCode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full">
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-gray-900 mb-4">QR Code</h2>
              <div className="bg-white p-4 rounded-lg border-2 border-gray-200 inline-block">
                <QRCode value={showQRCode} size={200} />
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Scan to view invitation
              </p>
              <button
                onClick={() => setShowQRCode(null)}
                className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Guests List */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Guest List</h2>
        </div>
        {guests.length === 0 ? (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No guests added yet</h3>
            <p className="text-gray-600 mb-6">Start building your guest list</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
            >
              Add First Guest
            </button>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {guests.map((guest) => (
              <div key={guest.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{guest.name}</h3>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                      {guest.email && (
                        <span className="flex items-center">
                          <Mail className="h-4 w-4 mr-1" />
                          {guest.email}
                        </span>
                      )}
                      {guest.phone && (
                        <span className="flex items-center">
                          <Phone className="h-4 w-4 mr-1" />
                          {guest.phone}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setShowQRCode(guest.invitationUrl)}
                      className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                      title="View QR Code"
                    >
                      <QrCode className="h-5 w-5" />
                    </button>
                    {guest.phone && (
                      <button
                        onClick={() => shareOnWhatsApp(guest)}
                        className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Share on WhatsApp"
                      >
                        <Share2 className="h-5 w-5" />
                      </button>
                    )}
                    <a
                      href={guest.invitationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm transition-colors"
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
  );
};

export default GuestManagement;