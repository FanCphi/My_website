export default function OwlMotif() {
  return (
    <div
      className="fixed bottom-8 right-8 pointer-events-none select-none"
      style={{ opacity: 0.025 }}
      aria-hidden="true"
    >
      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Owl in flight silhouette */}
        <path
          d="M90 30 C70 30, 20 55, 10 85 C5 100, 15 110, 30 105
             C40 102, 50 90, 60 80 C65 75, 75 70, 85 68
             L90 67 L95 68 C105 70, 115 75, 120 80
             C130 90, 140 102, 150 105 C165 110, 175 100, 170 85
             C160 55, 110 30, 90 30Z"
          stroke="#65889E"
          strokeWidth="1.2"
          fill="#65889E"
          fillOpacity="0.3"
        />
        {/* Left wing detail */}
        <path
          d="M50 75 C35 60, 20 65, 15 80"
          stroke="#65889E"
          strokeWidth="0.8"
          fill="none"
          opacity="0.6"
        />
        {/* Right wing detail */}
        <path
          d="M130 75 C145 60, 160 65, 165 80"
          stroke="#65889E"
          strokeWidth="0.8"
          fill="none"
          opacity="0.6"
        />
        {/* Eye circles */}
        <circle cx="78" cy="62" r="6" stroke="#65889E" strokeWidth="0.8" fill="none" opacity="0.5" />
        <circle cx="102" cy="62" r="6" stroke="#65889E" strokeWidth="0.8" fill="none" opacity="0.5" />
        {/* Ear tufts */}
        <path d="M75 38 L68 22 L80 35" stroke="#65889E" strokeWidth="0.8" fill="none" opacity="0.4" />
        <path d="M105 38 L112 22 L100 35" stroke="#65889E" strokeWidth="0.8" fill="none" opacity="0.4" />
        {/* Tail feathers */}
        <path
          d="M82 105 L75 135 M90 108 L90 140 M98 105 L105 135"
          stroke="#65889E"
          strokeWidth="0.6"
          fill="none"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
