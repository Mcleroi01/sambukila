import React from "react";
import { QrCode } from "lucide-react";

const ElegantInvite = ({ event, guest, helpers }) => {
  if (!event || !guest) return null;

  return (
    <div className="min-h-screen bg-black">
      {/* Section 1: Hero with Couple Names and Background Image */}
      <section className="min-h-screen relative flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: event?.backgroundImageUrl
              ? `url(${event.backgroundImageUrl})`
              : "url('https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-md mx-auto">
          <p className="text-white/80 text-sm font-light tracking-[0.3em] uppercase mb-8">
            Together with their families
          </p>

          <h1
            className="text-9xl font-serif font-light text-white  leading-tight"
            style={{ fontFamily: "'Great Vibes', cursive", fontWeight: 400 }}
          >
            {event?.coupleName?.split(" & ")[0] || "Kane"}
          </h1>
          <div className="text-5xl font-serif font-light text-white ">&</div>
          <h1
            className="text-9xl font-serif font-light text-white  leading-tight"
            style={{ fontFamily: "'Great Vibes', cursive", fontWeight: 400 }}
          >
            {event?.coupleName?.split(" & ")[1] || "Kane"}
          </h1>
        </div>
      </section>

      {/* Section 2: Event Details */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-8 py-16">
        <div className="text-center max-w-md mx-auto">
          <p className="text-white/60 text-sm font-light tracking-[0.3em] uppercase mb-8">
            Together with their families
          </p>

          <h1
            className="text-5xl font-serif font-light text-white  leading-tight"
            style={{ fontFamily: "'Great Vibes', cursive", fontWeight: 400 }}
          >
            {event?.coupleName?.split(" & ")[0] || "Molly"}
          </h1>
          <div
            className="text-3xl font-serif font-light text-white "
            style={{ fontFamily: "'Great Vibes', cursive", fontWeight: 400 }}
          >
            &
          </div>
          <h1
            className="text-6xl text-white  leading-tight"
            style={{ fontFamily: "'Great Vibes', cursive", fontWeight: 400 }}
          >
            {event?.coupleName?.split(" & ")[1] || "Kane"}
          </h1>

          <p className="text-white/70 text-lg font-light tracking-wide mb-2">
            <span className="text-white capitalize">
              {guest?.gender === "madame"
                ? "Madame"
                : guest?.gender === "monsieur"
                ? "Monsieur"
                : ""}{" "}
            </span>
            {guest?.name && (
              <span className="font-semibold text-white capitalize">
                {guest.name}
              </span>
            )}
            <span className="text-white/70 font-light">
              {" "}
              cordially invites you to share in this special celebration.
            </span>
          </p>

          <p className="text-white/70 text-sm font-light tracking-wide mb-12">
            {event?.customMessage || "celebration of their marriage"}
          </p>

          <div className="space-y-8">
            <div className="text-center">
              <p className="text-white text-xl font-light tracking-wide mb-4">
                {event?.date
                  ? helpers.formatDate(event.date)
                  : "Saturday 17 October 2026"}
              </p>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <p className="text-white text-lg font-light mb-1">
                  {event?.location || "Sofitel Hotel"}
                </p>
                <p className="text-white/70 text-sm">
                  {event?.receptionAddress || "249 Turbot Street"}
                </p>
                <p className="text-white/60 text-xs italic mt-1">
                  {event?.receptionTime
                    ? `Commencing at ${helpers.formatTime(event.time)}`
                    : "Commencing at 5:00pm"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: RSVP and QR Code */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col justify-between px-8 py-16">
        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto text-center">
          <h1 className="text-4xl font-serif font-light text-white mb-8 italic">
            Kindly
          </h1>
          <h2 className="text-3xl font-serif font-normal text-white mb-12 tracking-[0.2em]">
            RSVP
          </h2>

          <p className="text-white/80 text-sm font-light tracking-wide mb-8">
            {event?.rsvpDeadline
              ? `By ${helpers.formatDate(event.rsvpDeadline)}`
              : ""}
          </p>

          <p className="text-white/70 text-sm font-light leading-relaxed mb-8">
            We are excited to celebrate with you!
          </p>

          <p className="text-white/60 text-xs font-light leading-relaxed mb-12">
            Please scan the QR code below to RSVP
            <br />
            and provide your details.
          </p>

          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-4">
              <div className="w-32 h-32 bg-black flex items-center justify-center">
                <QrCode className="w-24 h-24 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p
            className="text-2xl font-serif font-light text-white italic"
            style={{ fontFamily: "'Great Vibes', cursive", fontWeight: 400 }}
          >
            {event?.coupleName || "Molly & Kane"}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ElegantInvite;

