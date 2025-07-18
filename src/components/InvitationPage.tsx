import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { WeddingEvent, Guest } from '../types';
import { Calendar, Clock, MapPin, Heart } from 'lucide-react';

const InvitationPage: React.FC = () => {
  const { guestId } = useParams<{ guestId: string }>();
  const [guest, setGuest] = useState<Guest | null>(null);
  const [event, setEvent] = useState<WeddingEvent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvitationData = async () => {
      if (!guestId) return;

      try {
        // Find guest by ID
        const guestsSnapshot = await getDocs(
          query(collection(db, 'guests'), where('id', '==', guestId))
        );
        
        if (!guestsSnapshot.empty) {
          const guestData = guestsSnapshot.docs[0].data() as Guest;
          setGuest(guestData);

          // Fetch event details
          const eventsSnapshot = await getDocs(
            query(collection(db, 'events'), where('__name__', '==', guestData.eventId))
          );
          
          if (!eventsSnapshot.empty) {
            const eventData = eventsSnapshot.docs[0].data() as WeddingEvent;
            setEvent(eventData);
          }
        }
      } catch (error) {
        console.error('Error fetching invitation data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInvitationData();
  }, [guestId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!guest || !event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Invitation Not Found</h1>
          <p className="text-gray-600">This invitation link may be invalid or expired.</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: event.backgroundImage 
          ? `url(${event.backgroundImage})` 
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Main Invitation Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-center">
              <Heart className="h-12 w-12 text-white mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-white mb-2">{event.coupleName}</h1>
              <p className="text-purple-100">You're Invited!</p>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Dear {guest.name},
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {event.message}
                </p>
              </div>

              {/* Event Details */}
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                  {event.eventName}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 rounded-lg p-2">
                      <Calendar className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-pink-100 rounded-lg p-2">
                      <Clock className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-100 rounded-lg p-2">
                      <MapPin className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{event.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RSVP Button */}
              <div className="text-center pt-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105">
                  RSVP Now
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-white text-sm opacity-75">
              We can't wait to celebrate with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationPage;