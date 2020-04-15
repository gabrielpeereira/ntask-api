const express = require('express');

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
    res.json({status: "NTask Api"});
})

app.set("json spaces", 4);

app.get('/task', (req, res) => {
    res.json({
        task: [
            {title: "Fazer compras"},
            {title: "Consertar o PC"},
        ]
    });
});

app.listen(PORT, () => console.log(`NTask API - porta ${PORT}`));