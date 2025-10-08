import { useEffect, useState } from "react";
import aartiFooterImg from "../../../assets/imgs/aartiFooter.png";
import ".././style.css";

const FONT_OPTIONS = [
  { name: "Default", value: "inherit" },
  { name: "Serif", value: "serif" },
  { name: "Sans-serif", value: "sans-serif" },
  { name: "Georgia", value: "Georgia, serif" },
  { name: "Merriweather", value: "'Merriweather', serif" },
  { name: "Lato", value: "'Lato', sans-serif" },
];

const BG_OPTIONS = [
  { name: "Classic White", value: "#fff" },
  { name: "Puja Yellow", value: "#FFF7D1" },
  { name: "Kumkum Red", value: "#F6E3DF" },
  { name: "Temple Orange", value: "#FFE8C2" },
  { name: "Lotus Pink", value: "#F9E2E6" },
  { name: "Tulsi Green", value: "#E2F9DE" },
];

export default function ArtiPopup({ arti, onClose }) {
  const [fontSize, setFontSize] = useState(18);
  const [fontFamily, setFontFamily] = useState(FONT_OPTIONS[0].value);
  const [bgColor, setBgColor] = useState(BG_OPTIONS[0].value);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const small = window.innerWidth <= 768;
      setIsSmallScreen(small);
      if (!small) setSettingsOpen(true);
      else setSettingsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") initiateClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const initiateClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    const contentArea = document.querySelector(".arti-content");
    if (contentArea) {
      const disableContextMenu = (e) => e.preventDefault();
      const disableCopy = (e) => e.preventDefault();
      const disableKeyCopy = (e) => {
        if (
          (e.ctrlKey || e.metaKey) &&
          (e.key === "c" || e.key === "x" || e.key === "s" || e.key === "u")
        ) {
          e.preventDefault();
        }
      };

      contentArea.addEventListener("contextmenu", disableContextMenu);
      contentArea.addEventListener("copy", disableCopy);
      window.addEventListener("keydown", disableKeyCopy);

      return () => {
        contentArea.removeEventListener("contextmenu", disableContextMenu);
        contentArea.removeEventListener("copy", disableCopy);
        window.removeEventListener("keydown", disableKeyCopy);
      };
    }
  }, []);

  if (!arti) return null;

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 p-4 ${isVisible ? "popup-open" : "popup-close"
        }`}
      style={{
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        className="relative flex flex-col md:flex-row shadow-xl rounded-lg overflow-hidden"
        style={{
          minHeight: "80vh",
          maxHeight: "90vh",
          width: "100%",
          maxWidth: "700px",
          background: "#fdfaf4",
        }}
      >
        <div
          className={`${isSmallScreen
            ? "w-full border-b border-gray-300"
            : "md:flex flex-col border-r border-gray-300"
            } p-5 bg-gradient-to-b from-[#fff5dc] to-[#fdf2c3] transition-all ${settingsOpen ? "max-h-[900px]" : "max-h-12 overflow-hidden"
            }`}
          style={{ minWidth: isSmallScreen ? "100%" : "165px" }}
        >
          {isSmallScreen ? (
            <div className="flex justify-between items-center mb-2">
              <button
                onClick={() => setSettingsOpen(!settingsOpen)}
                className="px-3 py-1 text-xs font-semibold text-orange-700 bg-orange-100 rounded hover:bg-orange-200"
                aria-expanded={settingsOpen}
              >
                {settingsOpen ? "Collapse Settings ▲" : "Expand Settings ▼"}
              </button>

              <button
                onClick={initiateClose}
                className="px-3 py-1 text-xs font-semibold text-orange-700 bg-red-100 rounded hover:bg-red-200"
                aria-label="Close"
              >
                ✕ Close
              </button>
            </div>
          ) : (
            <button
              className="text-lg font-semibold text-orange-700 hover:text-orange-500 mb-4 text-left cursor-pointer"
              onClick={initiateClose}
            >
              ✕ Close
            </button>
          )}

          {(settingsOpen || !isSmallScreen) && (
            <div id="settings-content" className="flex flex-col gap-4">
              <label className="text-xs text-gray-700 font-semibold">
                Font Size
              </label>
              <div className="flex gap-2 mb-3">
                <button
                  onClick={() => setFontSize((f) => Math.min(f + 2, 32))}
                  className="border border-yellow-500 bg-yellow-100 hover:bg-yellow-200 rounded px-2 py-1 text-sm font-bold cursor-pointer"
                >
                  A+
                </button>
                <button
                  onClick={() => setFontSize((f) => Math.max(f - 2, 12))}
                  className="border border-yellow-500 bg-yellow-50 hover:bg-yellow-100 rounded px-2 py-1 text-sm font-bold cursor-pointer"
                >
                  A-
                </button>
              </div>

              <label className="text-xs text-gray-700 font-semibold">
                Font
              </label>
              <select
                className="border rounded px-2 py-1 text-xs mb-3 cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
              >
                {FONT_OPTIONS.map((opt) => (
                  <option value={opt.value} key={opt.name}>
                    {opt.name}
                  </option>
                ))}
              </select>

              <label className="text-xs text-gray-700 font-semibold">
                BG Color
              </label>
              <select
                className="border rounded px-2 py-1 text-xs mb-3 cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-green-300"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
              >
                {BG_OPTIONS.map((opt) => (
                  <option value={opt.value} key={opt.name}>
                    {opt.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div
          className="flex-1 relative overflow-y-auto arti-scrollbar"
          style={{
            background: bgColor,
            fontFamily: fontFamily,
            fontSize: `${fontSize}px`,
            minHeight: "60vh",
          }}
        >
          <div
            className="sticky top-0 z-10 border-b border-gray-200 text-center"
            style={{
              background: bgColor,
              padding: "1rem",
              boxShadow: "0 2px 4px rgba(170,120,15,0.05)",
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              {arti.name}
            </h2>
            {arti.deity && (
              <p className="text-gray-700 text-md mb-1">{arti.deity}</p>
            )}
            {(arti.whyRead || arti.whyListen) && (
              <p className="text-gray-700 text-sm mb-1">
                {arti.whyRead || arti.whyListen}
              </p>
            )}
            <div className="flex justify-center gap-4 items-center text-xs text-gray-500">
              {arti.duration && <span>⏱ {arti.duration}</span>}
              {arti.source && <span>📜 {arti.source}</span>}
            </div>
          </div>

          <div
            className="whitespace-pre-wrap text-center text-gray-900 px-6 py-4 arti-content"
          >
            {arti.fullAarti}
          </div>

          <div
            className="sticky bottom-0 text-center py-4 bg-opacity-95"
            style={{ background: bgColor }}
          >
            <img
              src={aartiFooterImg}
              alt="Aarti Footer"
              className="mx-auto mb-2 rounded-md"
              style={{ maxWidth: "150px", height: "auto" }}
            />
            <p className="text-gray-700 font-medium italic">--- The End ---</p>
          </div>
        </div>
      </div>
    </div>
  );
}
