import React from "react";

const ImgGallery = ({ images }) => {
    const [selectedImageIndex, setSelectedImageIndex] = React.useState(null);
    const [isFullscreen, setIsFullscreen] = React.useState(false);

    if (!images || images.length === 0) {
        return (
            <div className="flex justify-center items-center p-20 text-lg text-muted-foreground">
                No images to display.
            </div>
        );
    }

    const openFullscreen = (index) => {
        setSelectedImageIndex(index);
        setIsFullscreen(true);
        document.body.style.overflow = "hidden";
    };

    const closeFullscreen = () => {
        setIsFullscreen(false);
        setSelectedImageIndex(null);
        document.body.style.overflow = "unset";
    };

    const navigateImage = (direction) => {
        if (selectedImageIndex === null) return;
        if (direction === "next") {
            setSelectedImageIndex((prev) => (prev + 1) % images.length);
        } else {
            setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isFullscreen) return;

            switch (e.key) {
                case "Escape":
                    closeFullscreen();
                    break;
                case "ArrowRight":
                    navigateImage("next");
                    break;
                case "ArrowLeft":
                    navigateImage("prev");
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isFullscreen, selectedImageIndex]);

    return (
        <>
            {/* Main Gallery Grid */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-6 max-w-7xl mx-auto">
                {images.map((imgSrc, index) => (
                    <div
                        key={index}
                        className="mb-4 break-inside-avoid relative group cursor-pointer"
                        onClick={() => openFullscreen(index)}
                    >
                        <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <img
                                src={imgSrc}
                                alt={`User uploaded image ${index + 1}`}
                                className="w-full h-auto object-fit transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                                onError={(e) => {
                                    e.target.src =
                                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=";
                                    e.target.className = "w-full h-auto object-contain";
                                }}
                            />

                            {/* Darker Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-lg pointer-events-none"></div>

                            {/* Plus Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="white"
                                    strokeWidth={1.2}   // slightly thicker stroke for clarity
                                    className="w-[2.8rem] h-[2.8rem] drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                </svg>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* Fullscreen Modal */}
            {isFullscreen && selectedImageIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center p-4">
                    {/* Close Button */}
                    <button
                        onClick={closeFullscreen}
                        className="cursor-pointer absolute top-4 right-4 text-white hover:text-accent transition-colors duration-200 z-10 bg-black bg-opacity-50 rounded-full p-2 transform hover:scale-110 hover:bg-opacity-80"
                        aria-label="Close fullscreen"
                    >
                        <svg
                            className="w-8 h-8 transition-transform duration-300 ease-in-out hover:rotate-90"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => navigateImage("prev")}
                        className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors duration-200 z-10 bg-black bg-opacity-50 rounded-full p-3 transform hover:scale-110 hover:bg-opacity-80"
                        aria-label="Previous image"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={() => navigateImage("next")}
                        className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors duration-200 z-10 bg-black bg-opacity-50 rounded-full p-3 transform hover:scale-110 hover:bg-opacity-80"
                        aria-label="Next image"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Image Display */}
                    <div className="relative max-w-full max-h-[80vh] flex items-center justify-center">
                        <img
                            src={images[selectedImageIndex]}
                            alt={`Fullscreen view of image ${selectedImageIndex + 1}`}
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                            {selectedImageIndex + 1} / {images.length}
                        </div>
                    </div>

                    {/* Preview Thumbnails */}
                    <div className="mt-6 w-full overflow-x-auto flex space-x-3 px-4">
                        {images.map((thumb, i) => (
                            <img
                                key={i}
                                src={thumb}
                                alt={`Preview ${i + 1}`}
                                className={`w-20 h-20 object-fit rounded-lg cursor-pointer border-2 transition-all duration-200 ${i === selectedImageIndex ? "border-white scale-105" : "border-transparent opacity-70 hover:opacity-100"
                                    }`}
                                onClick={() => setSelectedImageIndex(i)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ImgGallery;
