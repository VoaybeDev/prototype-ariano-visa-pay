export default function StatusBar() {
  return (
    <div className="sbar">
      <span className="sbar-time">9:41</span>

      <div className="sbar-icons">
        {/* WIFI */}
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
        </svg>

        {/* BATTERIE plus réaliste et plus compacte */}
        <svg
          viewBox="0 0 26 14"
          width="18"
          height="10"
          fill="none"
          aria-hidden="true"
        >
          {/* contour batterie */}
          <rect
            x="0.75"
            y="1.25"
            width="21"
            height="11.5"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.45"
          />

          {/* niveau batterie */}
          <rect
            x="2.5"
            y="3"
            width="15"
            height="8"
            rx="2"
            fill="currentColor"
          />

          {/* petit embout à droite */}
          <rect
            x="22.5"
            y="4.25"
            width="2.5"
            height="5"
            rx="1"
            fill="currentColor"
            opacity="0.45"
          />
        </svg>
      </div>
    </div>
  );
}