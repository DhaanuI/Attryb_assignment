const express = require("express");

// dotenv to securely store values 
require("dotenv").config();

const app = express();
app.use(express.json());

// importing necessary things from other files
const { connection } = require("./config/db");
const { userRoute } = require("./route/userRoute");
const { inventoryRoute } = require("./route/inventoryRoute");
const { oemRoute } = require("./route/oemRoute");


// home route
app.get("/", async (req, res) => {
    res.status(200).send("Welcome to BUYC Corp Backend");
})


app.use("/users", userRoute)
app.use("/oemspecs", oemRoute)
app.use("/inventory", inventoryRoute)



app.listen(process.env.port, async (req, res) => {
    try {
        await connection;   // connecting to Database
        console.log("DB is connected")
    }
    catch (error) {
        console.log("DB is not connected", error)
    }
    console.log(`Listening at Port ${process.env.port}`)
})

