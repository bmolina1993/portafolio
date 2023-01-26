import React from "react";
import { Card, Tittle } from "../components";
import { ProjectCard } from "../modals";

export const Projects = () => {
  return (
    <>
      {/* Tittle */}
      <Tittle idValue="idProjects" value="Proyectos" />

      {/* Cards */}
      <section className={`flex w-full justify-center px-5`}>
        <section
          className={`flex h-80 w-full max-w-lg flex-col flex-wrap items-center gap-2.5 overflow-hidden overflow-x-scroll`}
        >
          <Card tittle="Buzón de correo" cardImage={1} vertical={false} />
          <Card tittle="Viajes" cardImage={2} vertical={false} />
          <Card tittle="To do list" cardImage={3} vertical={true} />
          <Card tittle="Datos inmobiliarios" cardImage={4} vertical={true} />
        </section>
      </section>

      {/* modal */}
      <ProjectCard />
    </>
  );
};
