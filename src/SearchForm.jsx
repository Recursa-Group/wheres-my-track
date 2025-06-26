import { useState } from "react";

export default function SearchForm({ onSearch, isLoading, error }) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(url);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="search-form"
      style={{
        width: "100%",
        maxWidth: 420,
        margin: "auto auto",
        fontFamily: "'Inter','Poppins','Space Grotesk',sans-serif",
        background: "rgba(13, 9, 37, 0.4)", // Dark, semi-transparent purple
        backdropFilter: "blur(12px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "24px",
        padding: "2rem",
        boxShadow: "0 8px 32px rgba(0,0,0,0.37)",
      }}
    >
      <div
        className="logo"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.2rem",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            background: "rgba(192, 132, 252, 0.1)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 12,
            boxShadow: "0 0 10px rgba(192, 132, 252, 0.2)",
            fontSize: 28,
            color: "#c084fc",
          }}
        >
          🎵
        </div>
        <span style={{ fontSize: "1.3rem", fontWeight: 700, color: "#fff" }}>
          Where's My Track
        </span>
      </div>
      <h1
        style={{
          color: "#fff",
          marginBottom: 8,
          fontSize: "2.1rem",
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        Where's My Track
      </h1>
      <div style={{ color: "#d1d5db", fontSize: "1.08rem", marginBottom: 28 }}>
        Find your track's source on every DSP.
        <br />
        Just enter your Spotify URI or ISRC code!
      </div>
      <div
        className="form-group"
        style={{
          position: "relative",
          marginBottom: 32,
          width: "100%",
        }}
      >
        <input
          type="text"
          name="url"
          id="trackInput"
          autoComplete="off"
          required
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            setHasValue(!!e.target.value);
          }}
          onChange={(e) => {
            setHasValue(!!e.target.value);
            setUrl(e.target.value);
          }}
          placeholder={isFocused ? "spotify:track:6iU7U8JPOP78CegxUnSEWC" : ""}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "1.1rem 1rem 0.7rem 1rem",
            border: `1px solid ${
              isFocused ? "#c084fc" : "rgba(255, 255, 255, 0.15)"
            }`,
            borderRadius: 12,
            fontSize: "1.08rem",
            outline: "none",
            background: "rgba(255, 255, 255, 0.07)",
            color: "#fff",
            transition: "border 0.2s, box-shadow 0.2s",
            boxShadow: isFocused ? "0 0 12px rgba(192, 132, 252, 0.3)" : "none",
          }}
        />
        <label
          htmlFor="trackInput"
          className="floating"
          style={{
            position: "absolute",
            left: 16,
            top: isFocused || hasValue ? "-0.5rem" : "0.8rem",
            color: isFocused ? "#c084fc" : "#a0aec0",
            fontSize: isFocused || hasValue ? "0.92rem" : "1.08rem",
            pointerEvents: "none",
            transition: "all 0.2s ease-in-out",
            background:
              isFocused || hasValue ? "rgba(13, 9, 37, 0.7)" : "transparent",
            backdropFilter: isFocused || hasValue ? "blur(10px)" : "none",
            padding: "0 0.5rem",
            fontWeight: 500,
            letterSpacing: 0.2,
            zIndex: 1,
            borderRadius: "6px",
          }}
        >
          Enter a Spotify URI
        </label>
      </div>
      {error && (
        <div
          style={{
            color: "#ff6b6b",
            marginTop: "-1rem",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={isLoading}
        style={{
          width: "100%",
          background: "linear-gradient(to right, #a855f7, #f472b6)",
          color: "#fff",
          border: "none",
          borderRadius: 12,
          padding: "1rem 2.5rem",
          fontSize: "1.15rem",
          fontWeight: 700,
          cursor: isLoading ? "not-allowed" : "pointer",
          boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
          transition: "background 0.3s, transform 0.2s, box-shadow 0.2s",
          marginTop: 8,
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow =
            "0 6px 20px rgba(168, 85, 247, 0.4)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.2)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {isLoading ? "Searching..." : "Find My Track"}
      </button>
      <div
        className="footer"
        style={{
          marginTop: 32,
          color: "#6b7280",
          fontSize: "0.98rem",
          textAlign: "center",
          letterSpacing: 0.2,
        }}
      >
        © 2025 by Recursa
      </div>
    </form>
  );
}
