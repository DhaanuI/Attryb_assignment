const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());


const { connection } = require("./config/db");
const { userRoute } = require("./route/userRoute");


app.get("/", async (req, res) => {
    res.status(200).send("Welcome to BUYC Corp Backend");
})


app.use("/users", userRoute)


app.listen(process.env.port, async (req, res) => {
    try {
        await connection;
        console.log("DB is connected")
    }
    catch (error) {
        console.log("DB is not connected", error)
    }
    console.log(`Listening at Port ${process.env.port}`)
})

