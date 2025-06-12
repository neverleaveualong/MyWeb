import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../pages/Home";
import Certificates from "../pages/Certificates";
import Skill from "../pages/Skill";
import Activity from "../pages/Activity";
import ProjectSection from "../components/Project/Project";

// 트렌디한 메인(홈) 애니메이션
const mainVariants = {
  initial: { opacity: 0, y: 48, scale: 0.95, filter: "blur(2px)" },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.56, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    y: -48,
    scale: 0.97,
    filter: "blur(2px)",
    transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] },
  },
};

// 나머지 페이지: fade-in only
const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.48, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 0.28, ease: "easeInOut" } },
};

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={mainVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ willChange: "opacity, transform, filter" }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ willChange: "opacity" }}
            >
              <ProjectSection />
            </motion.div>
          }
        />
        <Route
          path="/certificates"
          element={
            <motion.div
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ willChange: "opacity" }}
            >
              <Certificates />
            </motion.div>
          }
        />
        <Route
          path="/skills"
          element={
            <motion.div
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ willChange: "opacity" }}
            >
              <Skill />
            </motion.div>
          }
        />
        <Route
          path="/Activities"
          element={
            <motion.div
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ willChange: "opacity" }}
            >
              <Activity />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
