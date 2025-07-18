import React, { useState, useEffect } from "react";
import { Share2, Copy, MessageCircle, Check } from "lucide-react";
import { qrCodeService } from "../services/qrCode";
import { helpers } from "../utils/helpers";
import { Helmet } from "react-helmet";

const InviteShareButton = ({ guest, event }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    const success = await helpers.copyToClipboard(guest.inviteUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  const host = window.location.href;
  const textWithHost = `${host}/guests/${guest.id}/public`;

  const handleWhatsAppShare = () => {
   const inviteLink = `${window.location.origin}/guest/${guest.id}/public`;

   const shareMessage =
     `👰🤵 ${event.coupleName} \n\n` +
     `💌 ${guest.name}, vous êtes cordialement invité(e) !\n\n` +
     `📅 Date : ${event.date}\n` +
     `📍 Lieu : ${event.location}\n\n` +
     `🔗 Voir votre invitation : ${inviteLink}`;

   const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
     shareMessage
   )}`;


    window.open(whatsappUrl, "_blank");
    setShowMenu(false);
  };

  return (
    <div className="relative">
      {/* Meta tags pour le lien d'invitation */}
      <Helmet>
        <meta property="og:title" content={`${event.coupleName}`} />
        <meta
          property="og:description"
          content={`Join us to celebrate "${event.eventTitle}" at ${event.location}.`}
        />
        <meta property="og:image" content={event.backgroundImageUrl} />
        <meta property="og:url" content={textWithHost} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Bouton principal */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
        title="Share invitation"
      >
        <Share2 className="h-5 w-5" />
      </button>

      {showMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowMenu(false)}
          />

          {/* Menu contextuel */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            <div className="py-2">
              <button
                onClick={handleCopyLink}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                <span>{copied ? "Copied!" : "Copy Link"}</span>
              </button>

              {guest.phone && (
                <button
                  onClick={handleWhatsAppShare}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4 text-green-600" />
                  <span>Share on WhatsApp</span>
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InviteShareButton;
