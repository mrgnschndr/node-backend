// const express = require("express");
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(express.json());

// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//     console.log(`Server running on ${process.env.URL}:${PORT}`)
// })

// const express = require("express");
// require("dotenv").config();

// const app = express();


// app.use(express.json());

// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//     console.log(`Server running on ${process.env.URL}:${PORT}`)
// })



// const express = require("express");
// require("dotenv").config();

// const app = express();


// app.use(express.json());

// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//     console.log(`Server running on ${process.env.URL}:${PORT}`)
// })



const developerNotes = require("./developerNotes.json");
const express = require("express");
require("dotenv").config();
const cors = require('cors');
const { faker } = require("@faker-js/faker");


const app = express();
app.use(cors({}));

// app.use(express.json());

// Domain: http://localhost:5000
app.get("/documentation", (req, res) => {
    // get documentation from database
    res.json(developerNotes)
})

app.post("/documentation", (req, res) => {
    res.json({
        "test": "Documentation created"
    })
})

app.get("/products", (req, res) => {
    let product = {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        company: faker.company.name()
    }
})


app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.URL}:${process.env.PORT}`)
})