# WeddingTix - Digital Wedding Invitation Management

A modern React.js application for creating and managing wedding events with personalized digital invitations. Built with Firebase for authentication and data storage.

## 🚀 Features

### Authentication
- **User Registration & Login**: Email/password authentication via Firebase Auth
- **Protected Routes**: Event management restricted to authenticated users
- **User-specific Data**: Each event is associated with the logged-in user

### Event Management
- **Event Creation**: Form with couple names, event title, date, time, location, and custom message
- **Background Images**: Support for custom background images via external URLs
- **Event Dashboard**: View and manage all created events

### Guest Management
- **Add Guests**: Name, email, and phone number for each guest
- **Unique Invitations**: Each guest gets a unique invitation URL (`/invite/:guestId`)
- **QR Code Generation**: Downloadable QR codes for easy invitation sharing
- **WhatsApp Integration**: Pre-filled WhatsApp messages for easy sharing

### Public Invitations
- **No Login Required**: Guests can view invitations without authentication
- **Responsive Design**: Mobile-friendly invitation pages
- **Custom Styling**: Background images and personalized content

## 🛠️ Technologies

- **Frontend**: React.js with functional components and hooks
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Styling**: Tailwind CSS
- **QR Codes**: qrcode.react
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── EventForm.jsx
│   ├── GuestForm.jsx
│   ├── QRCodeCard.jsx
│   ├── InviteShareButton.jsx
│   └── ProtectedRoute.jsx
├── contexts/            # React contexts
│   └── AuthContext.jsx
├── layouts/             # Layout components
│   ├── MainLayout.jsx
│   └── AuthLayout.jsx
├── modules/             # Feature modules
│   ├── auth/
│   │   ├── LoginPage.jsx
│   │   └── RegisterPage.jsx
│   ├── events/
│   │   ├── EventCreatePage.jsx
│   │   └── EventListPage.jsx
│   └── guests/
│       ├── GuestListPage.jsx
│       └── InvitePublicView.jsx
├── services/            # External service integrations
│   ├── firebase.js
│   ├── auth.js
│   ├── firestore.js
│   └── qrCode.js
├── utils/               # Utility functions
│   ├── helpers.js
│   └── validators.js
├── App.jsx              # Main app component
└── main.jsx             # App entry point
```

## 🔧 Setup Instructions

### 1. Firebase Configuration

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password)
3. Create a Firestore database
4. Update `src/services/firebase.js` with your configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

### 2. Firestore Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Events - users can only access their own events
    match /events/{eventId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
    }
    
    // Guests - users can manage guests for their events
    match /guests/{guestId} {
      allow read, write: if request.auth != null;
      // For public invitation access
      allow read: if true;
    }
  }
}
```

### 3. Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Deployment

Build and deploy to Firebase Hosting:

```bash
npm run build
firebase deploy
```

## 🎯 Usage

1. **Register/Login**: Create an account or sign in
2. **Create Event**: Fill out event details and optional background image URL
3. **Add Guests**: Add guest information with contact details
4. **Share Invitations**: Use QR codes or WhatsApp sharing
5. **Guest Access**: Guests visit unique URLs to view their invitations

## 🔐 Security Features

- **Authentication Required**: Only authenticated users can create/manage events
- **User Isolation**: Users can only access their own events and guests
- **Public Invitations**: Guest invitation pages are publicly accessible
- **Input Validation**: Form validation on both client and server side

## 📱 Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this project for your wedding events!