"use client";
import { PageWrapper } from "../PageWrapper";
import Image from "next/image";
import main from "../../public/main.png";
import bootstrap from "../../public/bootstrap.png";
import { motion } from "framer-motion";
function projects() {
  const images = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen font-space text-white mx-auto">
      <PageWrapper>
        <div className=" pt-8 pl-8">
          <p className="text-5xl font-bold">Projects I&apos;ve Worked On! 🚀</p>

          <div className="mb-8 mt-5 max-w-screen-xl mx-auto text-xl">
            <h2 className="text-2xl font-semibold mb-2">
              At-Risk Student Prediction
            </h2>
            <motion.div
              initial={images.hidden}
              animate={images.show}
              className=" float-right mx-auto"
            >
              <Image priority={true} src={main} width={300} alt="img" />
            </motion.div>

            <ul className="ml-8 list-disc  leading-loose mx-auto">
              <li>
                It predicts their performance based on their percentage and
                their presence in the class.
              </li>
              <li>
                This was done by using HTML and CSS for frontend and Python for
                backend.
              </li>
              <li>
                For training data, used the teachable machine which gives
                accuracy more than 75% if trained perfectly.
              </li>
            </ul>
          </div>

          <div className="mb-8 mt-5 max-w-screen-xl mx-auto text-xl">
            <h2 className="text-2xl font-semibold mb-2">
              Forest Fire Alarm System using Arduino and GSM Module
            </h2>
            <ul className="ml-8 list-disc leading-loose mx-auto">
              <li>
                It is an IoT-based project used for detecting forest fire from a
                long distance.
              </li>
              <li>
                To alert the forest department to identify the forest fire
                without risking their lives.
              </li>
            </ul>
          </div>

          <div className="mt-5 max-w-screen-xl mx-auto text-xl">
            <h2 className="text-2xl font-semibold mb-2">
              A Website for Buying AAA Games (Front End)
            </h2>
            <motion.div
              initial={images.hidden}
              animate={images.show}
              className=" float-right mx-auto"
            >
              <Image priority={true} src={bootstrap} width={300} alt="img" />
            </motion.div>
            <ul className="ml-8 list-disc leading-loose mx-auto">
              <li>It is a front-end website for buying PC games.</li>
              <li>
                Inspired by Epic Games and a designing project done by me on
                Figma.
              </li>
              <li>This was done using HTML, CSS, and Bootstrap.</li>
            </ul>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
export default projects;
