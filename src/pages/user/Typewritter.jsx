import React, { useState, useEffect, useRef } from "react";

const Typewriter = ({ 
  text, 
  speed = 100, 
  eraseSpeed = 80, 
  pause = 1500,
  className = "",
  cursor = "|",
  cursorBlinkSpeed = "1s",
  onTypingComplete,
  onCycleComplete
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [cycleCount, setCycleCount] = useState(0);
  const indexRef = useRef(0);
  const isMountedRef = useRef(true);

  // Reset when text changes
  useEffect(() => {
    setDisplayedText("");
    setIsTyping(true);
    indexRef.current = 0;
    setCycleCount(0);
  }, [text]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    let timeout;
    
    if (!isMountedRef.current) return;

    if (isTyping) {
      // Typing phase
      if (indexRef.current < text.length) {
        timeout = setTimeout(() => {
          if (isMountedRef.current) {
            const newText = displayedText + text[indexRef.current];
            setDisplayedText(newText);
            indexRef.current += 1;
            
            // Callback when typing completes
            if (indexRef.current === text.length && onTypingComplete) {
              onTypingComplete();
            }
          }
        }, speed);
      } else {
        // Pause before erasing
        timeout = setTimeout(() => {
          if (isMountedRef.current) {
            setIsTyping(false);
          }
        }, pause);
      }
    } else {
      // Erasing phase
      if (indexRef.current > 0) {
        timeout = setTimeout(() => {
          if (isMountedRef.current) {
            setDisplayedText((prev) => prev.slice(0, -1));
            indexRef.current -= 1;
          }
        }, eraseSpeed);
      } else {
        // Pause before typing again and increment cycle count
        timeout = setTimeout(() => {
          if (isMountedRef.current) {
            setIsTyping(true);
            setCycleCount(prev => {
              const newCount = prev + 1;
              if (onCycleComplete) onCycleComplete(newCount);
              return newCount;
            });
          }
        }, pause / 2); // Shorter pause before restarting
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, text, speed, eraseSpeed, pause, onTypingComplete, onCycleComplete]);

  return (
    <div className={`inline-flex ${className}`}>
      <h1 
        className="text-5xl md:text-6xl font-semibold mb-4 animate-fadeInDown whitespace-nowrap overflow-hidden"
        aria-live="polite"
        aria-label={text}
      >
        {displayedText}
        <span 
          className="animate-blink text-inherit" 
          style={{ animationDuration: cursorBlinkSpeed }}
          aria-hidden="true"
        >
          {cursor}
        </span>
      </h1>
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink ${cursorBlinkSpeed} step-end infinite;
        }
      `}</style>
    </div>
  );
};

export default Typewriter;