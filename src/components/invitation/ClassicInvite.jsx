import React from "react";
import { QrCode, Calendar, Clock, MapPin, Heart } from "lucide-react";

const ClassicInvite = ({ event, guest, helpers }) => {
  if (!event || !guest) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Section 1: Hero with Couple Photo */}
      <section className="min-h-screen flex flex-col">
        {/* Image en haut avec effet noir & blanc */}
        <div
          className="h-[50vh] relative bg-cover bg-center grayscale rounded-b-[7rem] overflow-hidden"
          style={{
            backgroundImage: event?.backgroundImageUrl
              ? `url(${event.backgroundImageUrl})`
              : "url('https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Texte en bas */}
        <div className="flex-1 flex items-center justify-center z-10 relative bg-white px-6 py-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm font-light tracking-[0.3em] uppercase mb-6">
              Together with their families
            </p>

            {/* Nom 1 */}
            <h2
              className="text-6xl text-gray-800 mb-2"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontWeight: 500,
              }}
            >
              {event?.coupleName?.split(" & ")[0] || "Alice"}
            </h2>

            <div
              className="text-3xl text-gray-600"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontWeight: 500,
              }}
            >
              &
            </div>

            {/* Nom 2 */}
            <h2
              className="text-6xl text-gray-800 mt-2"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontWeight: 500,
              }}
            >
              {event?.coupleName?.split(" & ")[1] || "Antonio"}
            </h2>
          </div>
        </div>
      </section>

      {/* Section 2: Event Details */}
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-8 py-8 rounded-t-3xl md:rounded-t-[150px] overflow-hidden">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-12">
            <p className="text-gray-600 text-sm font-light tracking-wide ">
              Invite you to share in the
            </p>
            <p className="text-gray-600 text-sm font-light tracking-wide mb-12">
              celebration of their marriage
            </p>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <p className="text-gray-800 text-xl font-light tracking-wide mb-4">
                {event?.date
                  ? helpers.formatDate(event.date)
                  : "Saturday 17 October 2026"}
              </p>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <p className="text-gray-800 text-lg font-light mb-1">
                  {event?.ceremonyLocation || "St Stephen's Chapel"}
                </p>
                <p className="text-gray-600 text-sm">
                  {event?.ceremonyAddress || "Brisbane City"}
                </p>
                <p className="text-gray-500 text-xs italic mt-1">
                  {event?.ceremonyTime
                    ? `Commencing at ${helpers.formatTime(event.ceremonyTime)}`
                    : "Commencing at 3:00pm"}
                </p>
              </div>

              <div className="text-center">
                <p className="text-gray-800 text-lg font-light mb-1">
                  {event?.receptionLocation || "Sofitel Hotel"}
                </p>
                <p className="text-gray-600 text-sm">
                  {event?.receptionAddress || "249 Turbot Street"}
                </p>
                <p className="text-gray-500 text-xs italic mt-1">
                  {event?.receptionTime
                    ? `Commencing at ${helpers.formatTime(event.receptionTime)}`
                    : "Commencing at 5:00pm"}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm font-light">
              Dear {guest?.name || "Guest"},
            </p>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed">
              We are honored to have you celebrate this special day with us
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: RSVP and Program */}
      <section className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 flex flex-col justify-between px-8 py-16">
        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto text-center">
          {/* RSVP Section */}
          <div className="mb-12">
            <p className="text-gray-500 text-sm font-light tracking-[0.2em] uppercase mb-4">
              Please let us know
            </p>

            <h2 className="text-6xl font-serif font-light text-gray-800 mb-8 tracking-wider">
              RSVP
            </h2>

            <p className="text-gray-600 text-sm font-light tracking-wide mb-2">
              {event?.rsvpDeadline
                ? `By ${helpers.formatDate(event.rsvpDeadline)}`
                : "By June 10th to"}
            </p>
            <p className="text-gray-600 text-sm font-light mb-8">
              {event?.rsvpContact || "Julia at +1 234 567 890"}
            </p>

            <p className="text-gray-500 text-xs font-light leading-relaxed mb-12 italic">
              Kindly let us know if you can
              <br />
              attend our celebration of love
            </p>
          </div>

          {/* Program Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-light text-gray-800 mb-8 tracking-wider">
              PROGRAM
            </h3>

            <div className="space-y-6 text-left max-w-xs mx-auto">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-2xl font-light text-gray-800">13:00</p>
                  <div className="text-xs text-gray-600 leading-relaxed mt-1">
                    <p className="font-medium">THE PROFESSIONAL</p>
                    <p>BRIDE'S ENTRANCE</p>
                    <p>WORDS OF WELCOME</p>
                    <p>CEREMONY</p>
                    <p>THE RECESSIONAL</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <p className="text-2xl font-light text-gray-800">15:00</p>
                  <div className="text-xs text-gray-600 leading-relaxed mt-1">
                    <p className="font-medium">COCKTAIL HOUR</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <p className="text-2xl font-light text-gray-800">16:00</p>
                  <div className="text-xs text-gray-600 leading-relaxed mt-1">
                    <p className="font-medium">RECEPTION</p>
                    <p>DINNER SERVICE</p>
                    <p>FIRST DANCE</p>
                    <p>PARENT DANCES</p>
                    <p>PARTY TIME</p>
                    <p>DANCING & GAMES</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="text-center">
            <p className="text-gray-500 text-xs font-light leading-relaxed mb-6">
              Please scan the QR code below to RSVP
              <br />
              and provide your details.
            </p>

            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-200">
                <div className="w-32 h-32 bg-gray-100 flex items-center justify-center rounded">
                  <QrCode className="w-24 h-24 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl font-serif font-light text-gray-700 italic">
            {event?.coupleName || "Alice & Antonio"}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ClassicInvite;
