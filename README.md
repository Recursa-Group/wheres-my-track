# Where's My Track?

**Find your music on every streaming platform, instantly.**

Where's My Track is a modern web app that helps you discover all the digital service providers (DSPs) where a specific Spotify track is available. Enter a Spotify Track URI and get direct links to the song on platforms like Apple Music, YouTube, Tidal, Amazon, and more.

---

## Features

- 🎵 **Multi-Platform Search:** Enter a Spotify Track URI and instantly see where your track is available.
- ⚡ **Fast & Modern UI:** Built with React and Vite for a snappy, beautiful experience.
- 🟣 **DSP Coverage:** Supports Spotify, Apple Music, YouTube, Tidal, Amazon, SoundCloud, and many more.
- 🛡️ **Input Validation:** Ensures only valid Spotify Track URIs are accepted.
- ☁️ **Serverless API:** Powered by Vercel serverless functions for fast, scalable lookups.

---

## Demo

> [Live Demo](https://wheres-my-track.vercel.app/)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Recursa-Group/wheres-my-track.git
   cd wheres-my-track
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run locally:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173)

---

## Usage

1. **Find your Spotify Track URI:**  
   [How to find your Spotify URI? (Soundrop Guide)](https://support.soundrop.com/hc/en-us/articles/360043859092-How-to-Find-Your-Spotify-URI)

2. **Paste the URI in the search box.**  
   Example: `spotify:track:6iU7U8JPOP78CegxUnSEWC`

3. **Submit and view results:**  
   Instantly see links to your track on all supported platforms.

---

## Deployment

This app is ready for [Vercel](https://vercel.com/) deployment.

1. **Push your code to GitHub.**
2. **Import your repo on Vercel.**
3. **Deploy!**  
   Vercel will automatically detect the Vite + React frontend and the `/api/fetch.js` serverless function.

---

## Tech Stack

- **Frontend:** React, Vite, CSS
- **Backend:** Vercel Serverless Functions (Node.js, Axios)
- **API:** [song.link](https://song.link/) (for multi-platform music data)

---

## Contributing

Contributions are welcome!  
Feel free to open issues or submit pull requests.

---

## License

MIT

---

## Credits

Made with ❤️ by [Recursa](https://github.com/Recursa-Group/wheres-my-track)
