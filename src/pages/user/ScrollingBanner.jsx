import "../style.css";

const ScrollingBanner = ({ offers = [] }) => {
  return (
    <div className="w-full bg-gradient-to-r from-orange-700 to-orange-800 text-orange-100 font-semibold py-2 overflow-hidden relative group shadow-lg flex items-center px-4 gap-6 select-none">

      {/* Gradient edge overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-orange-700 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-orange-800 to-transparent z-10 pointer-events-none"></div>

      {/* Pause on hover scrolling offers */}
      <div className="flex-1 whitespace-nowrap flex animate-scrollBanner gap-16 px-4 group-hover:pause text-sm sm:text-base">
        {offers.concat(offers).map((offer, index) => (
          <span key={index} className="cursor-pointer inline-flex items-center gap-2">
            {offer}
            <svg
              className="w-4 h-4 flex-shrink-0 text-orange-200"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </span>
        ))}
      </div>

      {/* Pause/Play button */}
      <button
        className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-1 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={(e) => {
          e.stopPropagation();
          const banner = document.querySelector(".animate-scrollBanner");
          if (banner) {
            banner.style.animationPlayState =
              banner.style.animationPlayState === "paused" ? "running" : "paused";
          }
        }}
        aria-label="Toggle banner animation"
      >
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollingBanner;
