import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import CreateEvent from './components/CreateEvent';
import GuestManagement from './components/GuestManagement';
import InvitationPage from './components/InvitationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/invite/:guestId" element={<InvitationPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="event/:eventId/guests" element={<GuestManagement />} />
          {/* <Route path="event/:eventId" element={<LandingPage />} /> */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;