*🎧 Focus With Me*

A minimal web application that helps you focus by playing your top Spotify tracks or personalized playlists. Built using the Spotify Web API and modern JavaScript.

🚀 Features
- Spotify authentication and integration
- Fetch and display user's top tracks
- Automatically create a focused playlist
- Embed and play Spotify playlists directly
- Clean and responsive user interface

🛠️ Tech Stack
- HTML, CSS, JavaScript
- Spotify Web API
- GitHub Pages (for hosting)

📦 Installation
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
