import React, { useState } from "react";
import Error from "./Error";

import {
  ContainerForm,
  WrapperSearch,
  WrapperSubmit,
  InputSubmit,
  InputSearch,
} from "./styles/stylesFormulario";

const Formulario = ({ setNameImageSearch }) => {
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    setError(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setNameImageSearch(search);
    
  };
  const MensajeError = error ? <Error messageError={"Busqueda vacia"} /> : null;
  return (
    <ContainerForm onSubmit={(e) => handleSubmit(e)}>
      <WrapperSearch>
        <InputSearch
          type="search"
          placeholder="Imagen a buscar"
          error={error}
          value={search}
          onChange={(e) => handleChange(e)}
        />
        {MensajeError}
      </WrapperSearch>

      <WrapperSubmit>
        <InputSubmit type="submit" value="Buscar" />
      </WrapperSubmit>
    </ContainerForm>
  );
};

export default Formulario;
