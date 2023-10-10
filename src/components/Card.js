import React from "react";
import NikeImg from "../img/nike.png";
import logoImg from "../img/logo.svg";
import { useMotionValue, useTransform, motion } from "framer-motion";

const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [100, -100], [-30, 30]);

  const colors = [
    {
      value: "#b6a179",
    },
    {
      value: "#272425",
    },
    {
      value: "#6389cb",
    },
    {
      value: "#f2c758",
    },
    {
      value: "#ffffff",
    },
  ];

  return (
    // card wrapper
    <div style={{ perspective: 2000 }}>
      {/* card */}
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
        className="w-[400px] min-h-[600px] h-52 bg-[#e4dfdc]  rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative"
      >
        {/* card logo */}
        <div className="mb-6">
          <img src={logoImg} alt="" draggable="false" />
        </div>
        {/* card title */}
        <div className="text-2xl mb-6 font-extrabold text-black">
          Nike Air Max Pre-Day
        </div>
        {/* card subtitle */}
        <div>
          <p className="text-semibold mb-5">
            Taking the classic look of heritage Nike Running into a new realm.
            the Nike Air Max Pre-Day brings you a fast-paced look that's ready
            for today's world
          </p>
        </div>

        {/* btn and price wrapper */}
        <div>
          <div className="flex items-center gap-5 mb-10">
            <button className="bg-black text-white px-14 py-2 rounded-md">
              Add to Cart
            </button>
            <div>
              <p className="text-2xl font-bold text-black">$495.00</p>
            </div>
          </div>
          {/* colors */}
          <ul className="flex gap-3">
            {colors.map((color, index) => {
              return (
                <li
                  key={index}
                  style={{ backgroundColor: color.value }}
                  className="w-8 h-8 rounded-full cursor-pointer "
                ></li>
              );
            })}
          </ul>
          {/* card image */}
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100000 }}
            className="absolute -right-52 top-28 w-[450px]"
          >
            <img src={NikeImg} alt="" draggable="false" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
