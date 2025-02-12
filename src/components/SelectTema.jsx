import { useEffect, useState } from "react";
import API_2 from "../api/api2";
import PropTypes from "prop-types";
/*Mudança para o projeto final:
- value do select
- value das options
*/

const SelectTema = ({ tema, handleMudaTema }) => {
  //Definindo variável de temas
  const [temas, setTemas] = useState([]);

  //Buscando temas
  useEffect(() => {
    const fetchApi = async () => {
      const res = await API_2.get(`/tema`);
      setTemas(res.data);
    };

    fetchApi();
  }, []);

  //Retornando selecionador de temas
  return (
    <select className="form-select" value={tema.id} name="tema" onChange={handleMudaTema}>
      {/*Opção neutra*/}
      <option value="">Selecione...</option>
      {/*Mpaeando temas para exibir*/}
      {temas &&
        temas.map((currentTema) => (
          <option key={currentTema.id} value={currentTema.id}>
            {currentTema.titulo}
          </option>
        ))}
    </select>
  );
};

//Definindo tipos dadas props
SelectTema.propTypes = {
  tema: PropTypes.object,
  handleMudaTema: PropTypes.func,
};

//Exportando componente
export default SelectTema;
