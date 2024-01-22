import React from "react";
import "./services.scss";
import { motion } from "framer-motion";

const variants = {
  initial: { x: -500, y: 100, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1, transition:{
      duration:1,staggerChildren:0.1,
  }},
};

function Services() {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="error" />
          <h1>
            <b>Unique </b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your </b>Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            reiciendis animi sequi non eos suscipit perferendis minima ratione
            nostrum error.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            reiciendis animi sequi non eos suscipit perferendis minima ratione
            nostrum error.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            reiciendis animi sequi non eos suscipit perferendis minima ratione
            nostrum error.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            reiciendis animi sequi non eos suscipit perferendis minima ratione
            nostrum error.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
