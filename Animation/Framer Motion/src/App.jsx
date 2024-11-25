import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.div
        initial={{
          x: 300,
        }}
        //final position
        animate={{
          x: 1000,
          rotate: 360,
        }}
        transition={{
          duration: 3,
          delay: 1,
          ease: "anticipate",
          repeat: Infinity,
        }}
        id="box"
      >
        Box 1
      </motion.div>
    </>
  );
}

export default App;
