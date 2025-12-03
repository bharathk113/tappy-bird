# Tappy Bird 🐦

A modern, web-based clone of the classic Flappy Bird game, featuring global leaderboards, daily high scores, and Progressive Web App (PWA) capabilities. Built with vanilla JavaScript, HTML5 Canvas, and Firebase.

## 📚 Table of Contents
- [🎮 Features](#-features)
- [🛠️ Technologies Used](#-technologies-used)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Configure Firebase](#2-configure-firebase)
  - [3. Update the Code](#3-update-the-code)
  - [4. Local Testing](#4-local-testing)
- [🌍 Deployment (GitHub Pages)](#-deployment-github-pages)
- [📱 How to Install (PWA)](#-how-to-install-pwa)
- [📄 License](#-license)

## 🎮 Features

- **Global Leaderboards**: Compete with players worldwide using Firebase Firestore.
- **Google Authentication**: Secure sign-in to save and track your high scores.
- **Daily Best**: Tracks your best score for the current day locally.
- **PWA Support**: Installable on mobile and desktop devices as a native-like app.
- **Responsive Design**: Optimized for both desktop (keyboard/mouse) and mobile (touch) play.
- **Browser Agnostic Speed**: Game loop uses delta-time to ensure consistent game speed across 60Hz and 120Hz+ displays.
- **No Backend Server**: Serverless architecture using Firebase.

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3 (Tailwind CSS via CDN), JavaScript (ES6+).
- **Game Engine**: Custom HTML5 Canvas engine.
- **Backend/Database**: Google Firebase (Authentication & Firestore).
- **Hosting**: GitHub Pages (Recommended).

## 🚀 Getting Started

### Prerequisites

To get started, you will need:

- A Google Account (for Firebase).
- A GitHub Account (for hosting).
- A code editor (VS Code recommended).

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/tappy-bird.git
cd tappy-bird
```

### 2. Configure Firebase

This game relies on Firebase for the leaderboard and authentication. You need to create your own free project.

1. Go to the **Firebase Console**.
2. Create a new project named **Tappy Bird**.

#### Authentication:

1. Go to **Build > Authentication**.
2. Click **Get Started**.
3. Enable Google as a Sign-in method.

#### Firestore Database:

1. Go to **Build > Firestore Database**.
2. Click **Create Database**.
3. Start in Test Mode (or Production mode, but you will need to set rules).

#### Set Security Rules:

Go to the "Rules" tab and paste this to allow logged-in users to play:

```plaintext
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

#### Get Configuration:

1. Go to **Project Settings (Gear icon) > General**.
2. Scroll to "Your apps" > Click the Web icon (`</>`).
3. Register app (e.g., "Tappy Bird Web").
4. Copy the `firebaseConfig` object.

### 3. Update the Code

Open `index.html` and find the `firebaseConfig` section (around line 180). Replace the placeholder values with your actual keys from Step 2.

```javascript
// --- 1. CONFIGURATION & SETUP ---
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "OPTIONAL"
};
```

### 4. Local Testing

Since this is a simple HTML file, you can use an extension like **Live Server** in VS Code to run it locally.

> **Note:** Google Sign-In might not work on `127.0.0.1` or `localhost` unless you add localhost to your Firebase "Authorized Domains" list (Authentication > Settings > Authorized Domains).

## 🌍 Deployment (GitHub Pages)

1. Push your changes to your GitHub repository.
2. Go to your repository **Settings**.
3. Navigate to **Pages** (on the left sidebar).
4. Under Build and deployment, select **Source** as Deploy from a branch.
5. Select `main` (or `master`) branch and `/` (root) folder, then click **Save**.
6. Wait a moment for the URL to generate (e.g., `https://yourusername.github.io/tappy-bird/`).

### CRITICAL STEP:

For Google Login to work, you MUST add your new GitHub Pages domain to Firebase:

1. Go to **Firebase Console > Authentication > Settings > Authorized Domains**.
2. Add your domain (e.g., `yourusername.github.io`).

## 📱 How to Install (PWA)

1. Open the website on your mobile device (Chrome on Android or Safari on iOS).
2. Play one game until you hit Game Over.
3. Click the "📲 INSTALL APP" button if it appears, or use the browser menu ("Add to Home Screen").

## 📄 License

This project is open source and available under the MIT License.

Created with AI assistance.