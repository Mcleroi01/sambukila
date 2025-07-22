import React from "react";

const ModernInvite = ({ event, guest, helpers }) => {
  if (!event || !guest) return null;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md font-serif text-gray-800"></div>
  );
};

export default ModernInvite;
