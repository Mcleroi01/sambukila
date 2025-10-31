import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import CreateEvent from './components/CreateEvent';
import GuestManagement from './components/GuestManagement';
import InvitationPage from './components/InvitationPage';

function App() {
return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="Loading...">
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
      </Suspense>
    </I18nextProvider>
  );
}

export default App;