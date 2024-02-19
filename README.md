# SocialEvents

## Description

SocialEvents is a comprehensive event management application designed to enhance user engagement through real-time interaction and comprehensive event details. It streamlines the process of creating, attending, and managing events with integrated Google Maps, live chat, and social features. SocialEvents solves the problem of fragmented event planning and participation by providing a unified platform for users to connect, share, and engage with events in their community.

## Features

- **Dynamic Event Management** - Features like infinite scrolling for event browsing and Firestore queries for efficient data retrieval and updates. The app supports CRUD operations for events, with added functionalities for attending or canceling attendance, showcased through intuitive UI components.

- **Real-time Chat and Event Updates** - Utilizing Firebase Realtime Database, users can engage in live chat within events, enhancing interaction. Firestore's cloud functions ensure users receive notifications about event-related activities, keeping them informed and engaged.

- **Google Maps Integration and Autocomplete** - Event locations are enriched with Google Maps, offering visual context and convenience. The PlaceInput component, alongside Google Maps API, provides location search and autocomplete functionality, improving the event creation experience.

- **User Authentication and Profile Management** - Integrates Firebase Authentication for login, registration, and social login options, coupled with Firestore for profile management. Users can follow/unfollow others, reflecting in real-time across the app.

- **Enhanced UI/UX** - Incorporates Semantic UI for a rich interface, with custom components like EmptyState and UnauthComponent for a seamless user experience. The application employs date-fns for consistent date formatting across the platform.

#### Technology Stack

- React.js
- Semantic UI React
- Firebase (Firestore, Realtime Database, Authentication, Cloud Functions, Hosting)
- Google Maps API
- Vite
- TypeScript

## Installation

### Prerequisites

- Node.js and npm
- Firebase CLI

### Environment Setup

1. Clone the repository: `git clone https://github.com/elvan/social-events-app-react-redux-firebase.git`
2. Navigate to the project directory: `cd social-events-app-react-redux-firebase`
3. Install dependencies: `npm install`

### Firebase Setup

1. Create a Firebase project in the Firebase Console.
2. Enable Firestore, Realtime Database, Authentication, and Cloud Functions.
3. Configure Firebase in the app by creating a `.env` file in the root directory with your Firebase keys.

## Usage

After installation, start the development server:

```bash
npm run dev
```

Navigate to `http://localhost:3000` to view the app. Explore the features by creating events, engaging in live chats, and managing your profile.

For deploying to Firebase Hosting:

```bash
firebase deploy
```

This command builds the app and deploys it to Firebase Hosting, making your application accessible online.
