import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();
    const controls = useAnimation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        controls.start({
            opacity: [0, 1],
            y: [20, 0],
            transition: { duration: 0.6, ease: "easeOut" },
        });
    }, [pathname, controls]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            style={{ width: "100%" }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollToTop;
