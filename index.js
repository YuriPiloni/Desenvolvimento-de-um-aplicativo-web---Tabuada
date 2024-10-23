//Esta aplicação WEB será desenvolvida com o auxílio da biclioteca/modulo [Express].
//Express é um framework web para desenvolvimento de aplicaçoes web.
//O frameword Express foi desenvolvido com o objetivo de simplificar o desenvolvimento de aplicaçoes web.
//A aplicação web pode ser desenvolvida de forma isolada ou em conjunto com outros aplicativos web.
//A complexidade de programar o protocolo HTTP é diminuida com a ajuda do framework Express.
//Para não reinventar a roda... vamos instalar o Express
//No terminal executar o comando: npm install express
//No formato CommonJs --> const express = require("express");

import express from "express";

const host = "0.0.0.0"; // todas as interfaces de rede do computador.
const porta = 4000; // identifica a nossa aplicação como sendo a 4000.
const app = express(); // Aplicação servidora web que se comunica utilizando o HTTP.

// Função para a página inicial
function paginaInicial(requisicao, resposta){
    resposta.send(`<h1>Seja Bem-Vindo!!</h1> 
                   <br/>
                   <h2>Desenvolvendo uma Tabuada com NodeJS</h2>
                   <h3>Página Inicial</h3>
                   <p>Para acessar a tabuada, use a URL no formato: /tabuada?tabuada=3&sequencia=25</p>
        `);
}

// Rota para gerar a tabuada
app.get('/tabuada', (req, res) => {
    // Pegando os parâmetros da URL
    const numero = parseInt(req.query.tabuada) || 1; // Se não for informado, o número padrão será 1
    const sequencia = parseInt(req.query.sequencia) || 10; // Padrão de 10 multiplicações

    // Criando a tabuada
    let tabuadaHtml = `<h1>Tabuada do ${numero}</h1>`;
    tabuadaHtml += `<h3>Sequência até ${sequencia} multiplicações</h3>`;
    tabuadaHtml += `<ul>`;

    for (let i = 0; i <= sequencia; i++) {
        tabuadaHtml += `<li>${numero} x ${i} = ${numero * i}</li>`;
    }

    tabuadaHtml += `</ul>`;

    // Enviando a resposta com a tabuada
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Tabuada do ${numero}</title>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px; }
                h1 { color: #333; }
                ul { list-style-type: none; padding: 0; }
                li { margin: 5px 0; }
            </style>
        </head>
        <body>
            ${tabuadaHtml}
        </body>
        </html>
    `);
});

// A função paginaInicial agora é usada para a rota raiz ("/")
app.get("/", paginaInicial); // http://localhost:4000/ <== é a raiz da aplicação.

app.listen(porta, host, () => {
    console.log("Servidor em execução http://" + host + ":" + porta);
});