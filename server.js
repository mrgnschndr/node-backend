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




const express = require("express");
require("dotenv").config();
const cors = require('cors');


const app = express();
app.use(cors({}));

// app.use(express.json());

// Domain: http://localhost:5000
app.get("/documentation", (req, res) => {
    // get documentation from database
    res.json({
        "test": "Proof of Life"
    })
})

app.post("/documentation", (req, res) => {
    res.json({
        "test": "Documentation created"
    })
})


app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.URL}:${process.env.PORT}`)
})