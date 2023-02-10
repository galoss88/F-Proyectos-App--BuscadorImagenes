import axios from "axios";
import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";
import {
  Container,
  WrapperBuscador,
  WrapperButtonPagina,
} from "./components/styles/stylesApp";

function App() {
  const [nameImageSearch, setNameImageSearch] = useState("");
  const [imagenesEncontradas, setImagenesEncontradas] = useState([]);

  //paginad
  const [paginaactual, setPaginaActual] = useState(1);
  const [totalpaginas, setTotalPaginas] = useState(1);
  const [sinresultado, setSinResultado] = useState(false)
  const refBuscador = useRef();
  useEffect(() => {
    if (nameImageSearch === "") return;
     
    const llamadaAPI = async () => {
      setSinResultado(false)
      const key = "33532612-baea6baf6c660a37013418410";
      const imagesPerPage = 30;
      const url = `https://pixabay.com/api/?key=${key}&q=${nameImageSearch}&per_page=${imagesPerPage}&page=${paginaactual}`;
      const api = await axios.get(url);
      const data = api.data;
      if(!data.hits.length)setSinResultado(true)
      
      setImagenesEncontradas(data.hits);
      
      //calcular total paginas
      const calcularTotalPaginas = Math.ceil(data.totalHits / imagesPerPage);
      setTotalPaginas(calcularTotalPaginas);
      //mover pantalla hacia arriba
      refBuscador.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    };
    llamadaAPI();
  }, [nameImageSearch, paginaactual]);

  //definir pagina anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;
    if (nuevaPaginaActual === 0) return;
    setPaginaActual(nuevaPaginaActual);
  };
  //definir pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;
    if (nuevaPaginaActual > totalpaginas) return;
    setPaginaActual(nuevaPaginaActual);
  };
  return (
    <Container>
      <WrapperBuscador ref={refBuscador}>
        <Formulario setNameImageSearch={setNameImageSearch} />
      </WrapperBuscador>
      <ListadoImagenes imagenesEncontradas={imagenesEncontradas} sinresultado={sinresultado}  />
      <WrapperButtonPagina>
        {paginaactual === 1 ? null : (
          <button onClick={() => paginaAnterior()}>&laquo; Anterior</button>
        )}
        {paginaactual === totalpaginas ? null : (
          <button onClick={() => paginaSiguiente()}>Siguiente &raquo;</button>
        )}
      </WrapperButtonPagina>
    </Container>
  );
}

export default App;
