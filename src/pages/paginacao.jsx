import React, { useEffect, useState } from "react";
import api from "../services/api";

function Teste() {

  const [prova, setProva] = useState([]);




    useEffect(() => {
      async function Prova() {
        const result = await api.get("/provaAll");
        setProva(result.data);
        console.log(result.data);
      }
      Prova();
    }, []);
  return (
    <>

<table>
              <tr className="tr1">
                <td className="titulodadosEstudantes">Título da Prova</td>
                <td td className="titulodadosEstudantes">Data da Prova</td>
                <td td className="titulodadosEstudantes">Quantidade de Questões</td>
                <td td className="titulodadosEstudantes">Hora do início</td>
                <td td className="titulodadosEstudantes">Hora do fim</td>
                <td td className="titulodadosEstudantes">Apagar</td>
                <td td className="titulodadosEstudantes">Editar</td>
              </tr>
             
              {prova.map((lista) => (
                    <tr key={lista.id}>
                    <td  className="dadosEstudantes">{lista.descricao}</td>
                    <td  className="dadosEstudantes">{lista.dataProva}</td>
                    <td  className="dadosEstudantes">{lista.quantQuestoes}</td>
                    <td  className="dadosEstudantes">{lista.inicioProva}</td>
                    <td  className="dadosEstudantes">{lista.finalProva}</td>
                    <td>
                   <button  > Deletar</button>
                      
                      </td>
                      <td> <button id="update">Actualizar</button></td>
                    
              
                    </tr>
                  ))}
              
            </table>

     
    </>
  );
}

export default Teste;
