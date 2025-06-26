import React from "react";

const platformLogos = {
  spotify: "/services/spotify.svg",
  itunes: "/services/itunes.png",
  appleMusic: "/services/applemusic.svg",
  youtube: "/services/youtube.svg",
  youtubeMusic: "/services/youtubemusic.svg",
  google: "/services/google.jpg",
  googleStore: "/services/googlestore.png",
  pandora: "/services/pandora.png",
  deezer: "/services/deezer.png",
  tidal: "/services/tidal.png",
  amazonStore: "/services/amazon.svg",
  amazonMusic: "/services/amazonmusic.jpg",
  soundcloud: "/services/soundcloud.svg",
  napster: "/services/napster.png",
  yandex: "/services/yandex.png",
  audius: "/services/audius.avif",
  anghami: "/services/anghami.png",
  boomplay: "/services/boomplay.png",
  audiomack: "/services/audiomack.jpg",
};

const platformDisplayNames = {
  spotify: "Spotify",
  itunes: "iTunes",
  appleMusic: "Apple Music",
  youtube: "YouTube",
  youtubeMusic: "YouTube Music",
  google: "Google",
  googleStore: "Google Store",
  pandora: "Pandora",
  deezer: "Deezer",
  tidal: "TIDAL",
  amazonStore: "Amazon",
  amazonMusic: "Amazon Music",
  soundcloud: "SoundCloud",
  napster: "Napster",
  yandex: "Yandex",
  audius: "Audius",
  anghami: "Anghami",
  boomplay: "Boomplay",
  audiomack: "AudioMack",
};

export default function ResultDisplay({ data, onReset }) {
  const entityId = data.entityUniqueId;
  const entity = data.entitiesByUniqueId[entityId];
  const links = data.linksByPlatform;
  const platformOrder = Object.keys(platformLogos);

  const availablePlatforms = Object.keys(links)
    .filter((p) => p !== "isrc" && p !== "upc")
    .sort((a, b) => {
      const indexA = platformOrder.indexOf(a);
      const indexB = platformOrder.indexOf(b);

      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB; // Both are in our defined order
      }
      if (indexA !== -1) {
        return -1; // A is in the list, B is not, so A comes first
      }
      if (indexB !== -1) {
        return 1; // B is in the list, A is not, so B comes first
      }
      return a.localeCompare(b); // Neither are in the list, sort them alphabetically
    });

  const platformsToShow = availablePlatforms.map((p) => [p, links[p]]);

  return (
    <div
      className="result-display"
      style={{
        width: "100%",
        maxWidth: 300,
        margin: "0 auto",
        fontFamily: "'Inter', 'Poppins', 'Space Grotesk', sans-serif",
        background: "rgba(13, 9, 37, 0.4)",
        backdropFilter: "blur(12px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "24px",
        padding: "1.5rem",
        boxShadow: "0 8px 32px rgba(0,0,0,0.37)",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <img
        src={entity.thumbnailUrl}
        alt={entity.title}
        style={{
          width: 150,
          height: 150,
          borderRadius: "16px",
          marginBottom: "1rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}
      />
      <h1 style={{ fontSize: "2rem", fontWeight: 700, margin: "0 0 0.5rem 0" }}>
        {entity.title}
      </h1>
      <h2
        style={{
          fontSize: "1.2rem",
          fontWeight: 500,
          color: "#d1d5db",
          margin: "0 0 1.5rem 0",
        }}
      >
        {entity.artistName}
      </h2>

      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          margin: "0 0 1rem 0",
          textAlign: "left",
          color: "#eee",
        }}
      >
        Listen on
      </h3>

      <div
        className="links"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(60px, 1fr))",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        {platformsToShow.map(([platform, linkData]) => (
          <a
            key={platform}
            href={linkData.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textDecoration: "none",
              color: "#e5e7eb",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={
                platformLogos[platform] ||
                `https://via.placeholder.com/56?text=${platform
                  .charAt(0)
                  .toUpperCase()}`
              }
              alt={platform}
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                marginBottom: "0.5rem",
                objectFit: "cover",
              }}
            />
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              {platformDisplayNames[platform] ||
                platform.charAt(0).toUpperCase() + platform.slice(1)}
            </span>
          </a>
        ))}
      </div>

      <button
        onClick={onReset}
        style={{
          width: "100%",
          background: "linear-gradient(to right, #a855f7, #f472b6)",
          color: "#fff",
          border: "none",
          borderRadius: 12,
          padding: "1rem 2.5rem",
          fontSize: "1.15rem",
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
          transition: "background 0.3s, transform 0.2s, box-shadow 0.2s",
          marginTop: 8,
        }}
      >
        Search Another Track
      </button>
    </div>
  );
}
