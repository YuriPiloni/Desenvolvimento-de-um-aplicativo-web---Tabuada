//Esta aplicação WEB será desenvolvida com o auxílio da biclioteca/modulo [Express].
//Express é um framework web para desenvolvimento de aplicaçoes web.
//O frameword Express foi desenvolvido com o objetivo de simplificar o desenvolvimento de aplicaçoes web.
//A aplicação web pode ser desenvolvida de forma isolada ou em conjunto com outros aplicativos web.
//A complexidade de programar o protocolo HTTP é diminuida com a ajuda do framework Express.
//Para não reinventar a roda... vamos instalar o Express
//No terminal executar o comando: npm install express
//No formato CommonJs --> const express = require("express");

import express from "express";

const host = "0.0.0.0"; //todas as interfaces do rede do computados.
const porta = 3000; // identifica a nossa aplicação como sendo a 3000.
const app = express(); //Aplicação servidora web que se comunica ultilizando o HTTP.

function paginaInicial(requisicao, resposta){
    resposta.send(`<h1>Seja Bem Vindo!!</h1> 
                   <br/>
                   <h2>Desenvolvendo uma Tabuada com NodeJS</h2>
                   <h3>Pagina Inicial</h3>
        `);
}

// A função paginaInicial não é chamada, ela é passada como parametro

app.get("/", paginaInicial); // http://localhost:3000/ <== é a raiz da aplicação.

app.listen(porta, host, () => { // arrow function ou ainda função de seta.
    console.log("Servidor em execução http://" + host + ":" + porta);
});
