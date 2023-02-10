import React from "react";
import Imagen from "./Imagen";
import SinResultados from "./SinResultados";
import { ContainerListadoImagenes } from "./styles/stylesListadoImagenes";

const ListadoImagenes = ({ imagenesEncontradas, conImagenes }) => {
  if (!conImagenes && conImagenes !== 0) return <SinResultados />;
  return (
    <ContainerListadoImagenes>
      {imagenesEncontradas?.map((i) => (
        <Imagen key={i.id} i={i} />
      ))}
    </ContainerListadoImagenes>
  );
};

export default ListadoImagenes;
