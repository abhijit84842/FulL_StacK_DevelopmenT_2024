import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.div
        // we can also drag the box
        drag
        // make drag boundary
        dragConstraints={{
          top: 0,
          left: 0,
          right: 1000,
          button: 300,
        }}
        // Lock the drag direction
        // dragDirectionLock="true"
        whileHover={{
          backgroundColor: "green",
        }}
        whileDrag={{
          backgroundColor: "royalblue",
          scale: 0.9,
        }}
        // whileTap={{
        //   backgroundColor: "red",
        //   scale: 0.5,
        // }}
        initial={{
          x: 300,
        }}
        //final position
        animate={{
          x: 1000,
          // rotate: 360,
        }}
        transition={{
          duration: 3,
          delay: 1,
          ease: "anticipate",
          // repeat: Infinity,
        }}
        id="box"
      >
        Box 1
      </motion.div>
    </>
  );
}

export default App;
