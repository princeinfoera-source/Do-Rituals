import React from "react";

const ScrollingTopMarquee = ({ pujaData }) => {
    // Duplicate data 3 times for seamless scroll
    const repeatedData = [...pujaData, ...pujaData, ...pujaData];

    return (
        <>
            <div className="relative z-20 w-full overflow-hidden bg-white/20 backdrop-blur-md border-b border-white/30 py-3 shadow-sm">
                <div className="flex animate-slide whitespace-nowrap">
                    {repeatedData.map(({ name, price, image }, idx) => (
                        <div
                            key={`${name}-${idx}`}
                            className="inline-flex cursor-pointer items-center bg-white/30 backdrop-blur-sm border border-yellow-200/40 rounded-xl px-3 py-2 mx-2 shadow hover:scale-105 transition-transform duration-300 min-w-[140px]"
                        >
                            <img
                                src={image}
                                alt={name}
                                className="w-10 h-10 rounded-md object-fit mr-2"
                            />
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold text-gray-800 truncate">
                                    {name}
                                </span>
                                <span className="text-[11px] text-yellow-700 font-bold">
                                    {price}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>
                {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-slide {
            display: flex;
            width: max-content;
            animation: slide 25s linear infinite;
          }
          .animate-slide:hover {
            animation-play-state: paused;
          }

          /* Hide scrollbar for mobile filter scroll */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
            </style>
        </>
    );
};

export default ScrollingTopMarquee;
