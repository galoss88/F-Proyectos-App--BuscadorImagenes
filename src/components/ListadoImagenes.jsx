import React from "react";
import Imagen from "./Imagen";
import SinResultados from "./SinResultados";
import { ContainerListadoImagenes } from "./styles/stylesListadoImagenes";

const ListadoImagenes = ({ imagenesEncontradas }) => {
  return (
    <ContainerListadoImagenes>
      {imagenesEncontradas &&
        imagenesEncontradas.map((i) => <Imagen key={i.id} i={i} />)}
    </ContainerListadoImagenes>
  );
};

export default ListadoImagenes;
