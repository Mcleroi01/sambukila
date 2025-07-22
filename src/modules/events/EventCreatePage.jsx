import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firestoreService } from "../../services/firestore";
import MainLayout from "../../layouts/MainLayout";
import EventForm from "../../components/EventForm";

const EventCreatePage = () => {
  const [loading, setLoading] = useState(false);
 
  const navigate = useNavigate();

  const handleCreateEvent = async (eventData) => {
    setLoading(true);

    const result = await firestoreService.createEvent({
      ...eventData,
    });

    console.log(result);

    if (result.success) {
      navigate(`/events/${result.id}/guests`);
    } else {
      alert("Error creating event: " + result.error);
    }

    setLoading(false);
  };

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-purple-600 to-pink-600">
            <h1 className="text-2xl font-bold text-white">
              Create Wedding Event
            </h1>
            <p className="text-purple-100 mt-1">
              Set up your special day details
            </p>
          </div>

          <div className="p-6">
            <EventForm onSubmit={handleCreateEvent} loading={loading} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EventCreatePage;
