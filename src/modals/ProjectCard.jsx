import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { GlobalContext } from "../Context";
import { gitHub, www } from "../img";

export const ProjectCard = () => {
  //---------------
  // global context
  //---------------
  const { showModal, onClickShowModal, detailProject } =
    useContext(GlobalContext);

  return createPortal(
    <AnimatePresence>
      {showModal && (
        <section className="fixed top-0 z-30 flex h-screen w-screen flex-col items-center justify-end bg-black bg-opacity-50">
          {/* cierra modal */}
          <section
            onClick={onClickShowModal}
            className="flex h-full w-full"
          ></section>

          {/* modal info */}
          <motion.section
            initial={{ y: "100%" }}
            animate={{
              y: 0,
            }}
            exit={{
              y: "100%",
            }}
            transition={{ type: "just", bounce: 0, duration: 0.3 }}
            className="flex w-full flex-col gap-5 rounded-t-xl bg-sidebar pb-5 text-white"
          >
            <div className="flex flex-col gap-2.5">
              {/* line top modal */}
              <div className="flex h-5 w-full items-center justify-center">
                <span className="h-1 w-20 rounded-full bg-slate-300"></span>
              </div>

              {/* images */}
              <section className="flex h-52 w-full flex-col flex-wrap overflow-x-scroll">
                {detailProject.bgImages.map((bgImage, index) => (
                  <div
                    key={index}
                    className={`flex h-full w-full ${bgImage} bg-contain bg-center bg-no-repeat`}
                  ></div>
                ))}
              </section>
            </div>

            {/* info project */}
            <article className="px-5">
              <h1 className="text-center text-xl font-medium">
                {detailProject.title}
              </h1>
              <p className="text-center line-clamp-2">
                {detailProject.description}
              </p>
            </article>

            {/* buttons */}
            <section className="flex flex-col gap-2.5 px-5">
              <a
                href={detailProject.repository}
                target="_blank"
                className="flex h-11 items-center justify-center gap-2.5 rounded-md bg-contact text-xl"
              >
                <img width={26} height={26} src={gitHub} alt="GitHub" />
                Repositorio
              </a>
              {detailProject.demo && (
                <a
                  href={detailProject.demo}
                  target="_blank"
                  className="flex h-11 items-center justify-center gap-2.5 rounded-md bg-contact text-xl"
                >
                  <img width={26} height={26} src={www} alt="Pagina web" />
                  Demo
                </a>
              )}
            </section>
          </motion.section>
        </section>
      )}
    </AnimatePresence>,
    document.getElementById("modalProjectCard")
  );
};