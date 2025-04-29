# 🎧 Focus With Me

**Focus With Me** is a minimal web application designed to help you stay focused by playing your top Spotify tracks or personalized playlists. Built using the Spotify Web API and modern JavaScript, this app integrates Spotify authentication, playlist creation, and playback.

## 🚀 Features

- **Spotify Authentication**: Sign in using your Spotify account.
- **Top Tracks**: Fetch and display your top Spotify tracks.
- **Personalized Playlist**: Automatically create a playlist based on your preferences.
- **Spotify Embed Player**: Play your Spotify playlists directly within the app.
- **Responsive UI**: Clean, user-friendly interface suitable for all devices.

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Spotify Web API**: For fetching top tracks and creating playlists
- **GitHub Pages**: For hosting the application

## 📦 Installation

To run this project locally:

1. Clone the repository:
git clone https://github.com/manasprabhu/FocusWithMe.git
   cd FocusWithMe

2. Open the index.html file directly in your browser 
   OR 
   deploy it using GitHub Pages.

🌐 Live Demo
https://manasprabhu.github.io/FocusWithMe/

🧰 How It Works
1. Authenticate using your Spotify account.
2. Fetch your top tracks using the Spotify API.
3. Automatically create a custom playlist based on your preferences.
4. Play it via the Spotify Embed Player.

🧑‍💻 Developer Setup

1. Register App with Spotify:
   - Visit: https://developer.spotify.com/dashboard
   - Create an app and note the Client ID
   - Set the Redirect URI (e.g., https://manasprabhu.github.io/FocusWithMe/)

2. Replace Authorization Token (for testing only):
   const token = 'YOUR_SPOTIFY_OAUTH_TOKEN';

   ⚠️ For production use, implement a secure OAuth 2.0 flow.

📂 File Structure
FocusWithMe/
├── index.html
├── script.js
├── style.css
└── README.txt

📄 License
MIT License

---

Made with ❤️ by Manas Prabhu (https://github.com/manasprabhu)
