import React, { useEffect, useState } from "react";
import api from "../services/api";

function Cadastrar() {
  //const [enderecoId, setEnderecoId] = useState("0");
  const [nomeInstituicao, setNomeInstituicao] = useState("");
  const [senha, setSenha] = useState("");

  const [provinciaId, setProvinciaId] = useState("0");
  const [provincia, setProvincia] = useState([]);

  const [municipioId, setMunicipioId] = useState("0");
  const [municipio, setMunicipio] = useState([]);

  const [distritoUrbanoId, setDistritoUrbanoId] = useState("0");
  const [distritoUrbano, setDistritoUrbano] = useState([]);

  const [bairroId, setBairroId] = useState("0");
  const [bairro, setBairro] = useState([]);

  const [rua, setRua] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await api.post("/enderecoCreate", {
      provinciaId,
      municipioId,
      distritoUrbanoId,
      bairroId,
      rua,
    });

    const { id } = result.data;
    localStorage.setItem("enderecos", id);

    const enderecoId = id;

    const resulta = await api.post("/instituicaoCreate", {
      enderecoId,
      nomeInstituicao,
      senha,
    });

    console.log(result.data);
    console.log(resulta.data);
  }

  useEffect(() => {
    async function provincia() {
      const result = await api.get("/provinciaAll");
      setProvincia(result.data);
    }
    provincia();
  }, []);

  useEffect(() => {
    async function municipio() {
      const result = await api.get("/municipioAll");
      setMunicipio(result.data);
    }
    municipio();
  }, []);

  useEffect(() => {
    async function distrito() {
      const result = await api.get("/distritoUrbanoAll");
      setDistritoUrbano(result.data);
    }
    distrito();
  }, []);

  useEffect(() => {
    async function bairro() {
      const result = await api.get("/bairroAll");
      setBairro(result.data);
    }
    bairro();
  }, []);

  // useEffect(() => {
  //   async function load() {
  //     const result = await api.get("/enderecoAll");
  //    setEndereco(result.data);
  //  }
  //  load();
  // }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nome"
          value={nomeInstituicao}
          onChange={(e) => setNomeInstituicao(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        ></input>

        <br></br>

        <select
          value={provinciaId}
          onChange={(e) => setProvinciaId(e.target.value)}
        >
          <option value="0">provincia</option>
          {provincia.map((lista) => (
            <option key={lista.id} value={lista.id}>
              {lista.nome}
            </option>
          ))}
        </select>

        <br></br>

        <select
          value={municipioId}
          onChange={(e) => setMunicipioId(e.target.value)}
        >
          <option value="0">município</option>
          {municipio.map((lista) => (
            <option key={lista.id} value={lista.id}>
              {lista.nome}
            </option>
          ))}
        </select>

        <br></br>

        <select
          value={distritoUrbanoId}
          onChange={(e) => setDistritoUrbanoId(e.target.value)}
        >
          <option value="0">distrito urbano</option>
          {distritoUrbano.map((lista) => (
            <option key={lista.id} value={lista.id}>
              {lista.nome}
            </option>
          ))}
        </select>

        <br></br>

        <select value={bairroId} onChange={(e) => setBairroId(e.target.value)}>
          <option value="0">bairro</option>
          {bairro.map((lista) => (
            <option key={lista.id} value={lista.id}>
              {lista.nome}
            </option>
          ))}
        </select>

        <br></br>

        <input
          type="text"
          placeholder="rua"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
        ></input>

        <button id="add" type="submit">
          Adicionar
        </button>
      </form>
    </>
  );
}

export default Cadastrar;
