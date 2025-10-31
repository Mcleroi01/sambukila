import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestoreService } from "../../services/firestore";
import { invitationTemplates } from "../../template/InvitationTemplates";
import { helpers } from "../../utils/helpers";

const InvitePublicView = () => {
  const { guestId } = useParams();
  const [loading, setLoading] = useState(true);
  const [guest, setGuest] = useState(null);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchInvitationData = async () => {
      try {
        const guestResult = await firestoreService.guestPublicView(guestId);

        if (guestResult.success) {
          setGuest(guestResult.guest);

          const eventResult = await firestoreService.getEvent(
            guestResult.guest.eventId
          );
          if (eventResult.success) {
            setEvent(eventResult.event);
          } else {
            console.error("Event fetch failed:", eventResult.error);
          }
        }
      } catch (error) {
        console.error("Error fetching invitation data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInvitationData();
  }, [guestId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4" />
          <p>Loading invitation...</p>
        </div>
      </div>
    );
  }

  if (!guest || !event) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-2">Invitation Not Found</h1>
          <p>This invitation link may be invalid or expired.</p>
        </div>
      </div>
    );
  }

  console.log(" event", event.invitationModel);

  const TemplateComponent =
    invitationTemplates[event.invitationModel || "classic"];

  console.log("Rendering template:", TemplateComponent);

  if (!TemplateComponent) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <p>No valid template found for this invitation.</p>
      </div>
    );
  }

  return <TemplateComponent event={event} guest={guest} helpers={helpers} />;
};

export default InvitePublicView;
