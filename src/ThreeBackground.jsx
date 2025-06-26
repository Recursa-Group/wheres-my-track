import React from "react";

const ModernThreeBackground = () => {
  const radarColor = "#c084fc"; // Bright Purple for radar and scanners
  const gridColor = "rgba(192, 132, 252, 0.2)"; // Very faint purple for grid

  // Function to generate random pings
  const renderPings = (count) => {
    let pings = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 3 + 2;
      const style = {
        position: "absolute",
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: radarColor,
        borderRadius: "50%",
        boxShadow: `0 0 6px ${radarColor}`,
        animation: `ping 3s ease-out infinite`,
        animationDelay: `${Math.random() * 3}s`,
      };
      pings.push(<div key={`ping-${i}`} style={style} />);
    }
    return pings;
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        pointerEvents: "none",
        overflow: "hidden",
        backgroundColor: "#020617",
        // Grid background with faint color
        backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(to right, ${gridColor} 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Reduced number of moving lines */}
      <div
        className="scanner-line-h"
        style={{ animationDuration: "10s", animationDelay: "1s" }}
      />
      <div
        className="scanner-line-v"
        style={{ animationDuration: "12s", animationDelay: "4s" }}
      />

      <div className="radar-overlay">
        <div className="radar-container">
          {/* Radar concentric circles */}
          <div className="radar-circle" />
          <div className="radar-circle" />
          <div className="radar-circle" />
          <div className="radar-circle" />

          {/* Radar radial lines */}
          <div className="radar-line" style={{ transform: "rotate(0deg)" }} />
          <div className="radar-line" style={{ transform: "rotate(45deg)" }} />
          <div className="radar-line" style={{ transform: "rotate(90deg)" }} />
          <div className="radar-line" style={{ transform: "rotate(135deg)" }} />

          {/* Radar sweep animation */}
          <div className="radar-sweep" />

          {/* Radar pings */}
          {renderPings(10)}
        </div>
      </div>

      <style>{`
        .radar-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle, transparent 0%, #020617 65%); // Darken edges more to focus on radar
        }
        .radar-container {
          position: relative;
          width: 80vmin;
          height: 80vmin;
          border-radius: 50%;
        }

        .radar-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px solid rgba(192, 132, 252, 0.15);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        .radar-circle:nth-of-type(1) { width: 25%; height: 25%; }
        .radar-circle:nth-of-type(2) { width: 50%; height: 50%; }
        .radar-circle:nth-of-type(3) { width: 75%; height: 75%; }
        .radar-circle:nth-of-type(4) { width: 100%; height: 100%; }

        .radar-line {
          position: absolute;
          top: 0;
          left: 50%;
          width: 1px;
          height: 100%;
          background-color: rgba(192, 132, 252, 0.15);
          transform-origin: bottom center;
        }

        .radar-sweep {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: conic-gradient(from 0deg, transparent 0%, transparent 70%, ${radarColor} 100%);
          border-radius: 50%;
          animation: sweep 4s linear infinite;
          mask-image: radial-gradient(circle at center, black 0%, transparent 70%);
        }
        
        /* Grid and moving lines styles */
        .scanner-line-h, .scanner-line-v {
          position: absolute;
          background: linear-gradient(to right, transparent, ${radarColor}, transparent);
          box-shadow: 0 0 8px ${radarColor}; /* Reduced shadow */
          opacity: 0;
        }
        .scanner-line-h {
          width: 100%;
          height: 1px;
          left: 0;
          animation-name: scan-v;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .scanner-line-v {
          height: 100%;
          width: 1px;
          top: 0;
          animation-name: scan-h;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes ping {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        @keyframes scan-h {
          0% { left: -10%; opacity: 0; }
          10%, 90% { opacity: 0.4; } /* Reduced opacity */
          100% { left: 110%; opacity: 0; }
        }
        @keyframes scan-v {
          0% { top: -10%; opacity: 0; }
          10%, 90% { opacity: 0.4; } /* Reduced opacity */
          100% { top: 110%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ModernThreeBackground;
