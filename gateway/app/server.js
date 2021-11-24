const express = require("express");
const axios = require("axios");

const app = express();

const optionsBook = {
    hostname: '127.0.0.1',
    port: 7000,
    path: '/books',
    method: 'GET'
}

const optionsStock = {
    hostname: '127.0.0.1',
    port: 2500,
    method: 'GET'
}

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));   /* bodyParser.urlencoded() is deprecated */

function Book(name, stock) {
    this.nom = name;
    this.stock = stock;
}

var oldList = [];
var list = [];
app.get("/", (req, res) => {
    //GET ALL BOOKS
    axios({
        method: 'get',
        url: 'http://app:7000/books',
    }).then(resp => {
        datas = resp.data;
        datas.forEach(data => {
            let book = new Book(data);
            oldList.push(book);
        });
        oldList.forEach(value => {
            axios({
                method: 'get',
                url: 'http://inventory:2500/' + value.nom,
            }).then(resp2 => {
                let test = value.nom;
                let book2 = new Book(test, resp2.data[0]['stock']);
                list.push(book2);
            });
        });
        res.json({ message: list });
    });

});

// set port, listen for requests
const PORT = process.env.PORT || 6900;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
