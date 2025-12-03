Tappy Bird 🐦

A modern, web-based clone of the classic Flappy Bird game, featuring global leaderboards, daily high scores, and Progressive Web App (PWA) capabilities. Built with vanilla JavaScript, HTML5 Canvas, and Firebase.

🎮 Features

Global Leaderboards: compete with players worldwide using Firebase Firestore.

Google Authentication: Secure sign-in to save and track your high scores.

Daily Best: Tracks your best score for the current day locally.

PWA Support: Installable on mobile and desktop devices as a native-like app.

Responsive Design: optimized for both desktop (keyboard/mouse) and mobile (touch) play.

Browser Agnostic Speed: Game loop uses delta-time to ensure consistent game speed across 60Hz and 120Hz+ displays.

No Backend Server: Serverless architecture using Firebase.

🛠️ Technologies Used

Frontend: HTML5, CSS3 (Tailwind CSS via CDN), JavaScript (ES6+).

Game Engine: Custom HTML5 Canvas engine.

Backend/Database: Google Firebase (Authentication & Firestore).

Hosting: GitHub Pages (Recommended).

🚀 Getting Started

Prerequisites

A Google Account (for Firebase).

A GitHub Account (for hosting).

A code editor (VS Code recommended).

1. Clone the Repository

git clone [https://github.com/yourusername/tappy-bird.git](https://github.com/yourusername/tappy-bird.git)
cd tappy-bird


2. Configure Firebase

This game relies on Firebase for the leaderboard and authentication. You need to create your own free project.

Go to the Firebase Console.

Create a new project named Tappy Bird.

Authentication:

Go to Build > Authentication.

Click Get Started.

Enable Google as a Sign-in method.

Firestore Database:

Go to Build > Firestore Database.

Click Create Database.

Start in Test Mode (or Production mode, but you will need to set rules).

Set Security Rules: Go to the "Rules" tab and paste this to allow logged-in users to play:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}


Get Configuration:

Go to Project Settings (Gear icon) > General.

Scroll to "Your apps" > Click the Web icon (</>).

Register app (e.g., "Tappy Bird Web").

Copy the firebaseConfig object.

3. Update the Code

Open index.html and find the firebaseConfig section (around line 180). Replace the placeholder values with your actual keys from Step 2.

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


4. Local Testing

Since this is a simple HTML file, you can use an extension like Live Server in VS Code to run it locally.

Note: Google Sign-In might not work on 127.0.0.1 or localhost unless you add localhost to your Firebase "Authorized Domains" list (Authentication > Settings > Authorized Domains).

🌍 Deployment (GitHub Pages)

Push your changes to your GitHub repository.

Go to your repository Settings.

Navigate to Pages (on the left sidebar).

Under Build and deployment, select Source as Deploy from a branch.

Select main (or master) branch and / (root) folder. click Save.

Wait a moment for the URL to generate (e.g., https://yourusername.github.io/tappy-bird/).

CRITICAL STEP:
For Google Login to work, you MUST add your new GitHub Pages domain to Firebase:

Go to Firebase Console > Authentication > Settings > Authorized Domains.

Add your domain (e.g., yourusername.github.io).

📱 How to Install (PWA)

Open the website on your mobile device (Chrome on Android or Safari on iOS).

Play one game until you hit Game Over.

Click the "📲 INSTALL APP" button if it appears, or use the browser menu ("Add to Home Screen").

📄 License

This project is open source and available under the MIT License.

Created with AI assistance.