// INSTALAR
// npm install express
//npm install nodemailer

"use strict";

const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const port = 3000;

const user = "bacudigital@gmail.com";
const password = "xczfztlqhmnsrlll";

app.get("/", (req, res) => {
    res.send("PAGINA PRINICIPAL"); // Corrigido "Welcommmmmmmmme" para "Welcome"
});

app.get("/enviar", (req, res) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: password
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });

    async function main() {
        try {
            // send mail with defined transport object
            const info = await transporter.sendMail({
                from: user, // sender address
                to: user, // list of receivers
                subject: "CLIENTE ENVIOU UM FORMULÁRIO ✔", // Subject line
                text: "CLIENTE ENVIOU FORMULARIO NO SITE", // plain text body
                html: `<b>CLIENTE ENVIOU FORMULARIO NO SITE - AGUARDANDO CONTATO</b>`, // html body
            });

            console.log("MENSAGEM ENVIADA COM SUCESSO");
            res.send("MENSAGEM ENVIADA COM SUCESSO - AGUARDE");
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).send("Error sending email");
        }
    }

    main().catch(console.error);
});

app.listen(port, () => console.log(`Rodando na Porta ${port}`));
