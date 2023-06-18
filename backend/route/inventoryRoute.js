const express = require("express");

const inventoryRoute = express.Router();
inventoryRoute.use(express.json());

require("dotenv").config();

const { Marketplace_Inventory } = require("../model/inventoryModel");
const { OEM_Specs } = require("../model/oem_specsModel");

const { authenticate } = require("../middleware/authentication.middleware");


inventoryRoute.get("/", async (req, res) => {
    try {
        const data = await Marketplace_Inventory.find();
        res.status(200).send(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ "Message": "error in getting all Second Hand Cars" });
    }
})


inventoryRoute.use(authenticate)

inventoryRoute.post("/add", async (req, res) => {
    const {
        kilometer,
        majorScratches,
        originalPaint,
        numOfAccidents,
        numOfprevBuyers,
        registrationPlace,
        image,
        title,
        description,
        userID } = req.body;
    try {
        const data = new Marketplace_Inventory({
            kilometer,
            majorScratches,
            originalPaint,
            numOfAccidents,
            numOfprevBuyers,
            registrationPlace,
            image,
            title,
            description,
            userID
        })
        await data.save();
        res.status(201).send({ "message": "Car info added Successfully" });
    }
    catch (err) {
        console.log(err);
        res.status(500)({ "ERROR": err });
    }
})


inventoryRoute.patch("/update/:id", async (req, res) => {
    const ID = req.params.id;
    const payload = req.body;
    const data = await Marketplace_Inventory.findOne({ _id: ID });
    const userid_in_req = payload.userID;
    const userid_in_doc = data.userID;
    try {
        if (userid_in_req !== userid_in_doc) {
            res.status(401).send({ "message": "Oops, You're NOT Authorized" });
        }
        else {
            await Marketplace_Inventory.findByIdAndUpdate({ _id: ID }, payload)
            res.send({ "Message": "Info modified in Database" })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ "Error": err })
    }
})


inventoryRoute.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id;
    const data = await Marketplace_Inventory.find({ _id: ID });
    const userid_in_req = req.body.userID;
    const userid_in_doc = data.userID;
    try {
        if (userid_in_req !== userid_in_doc) {
            res.status(401).send({ "message": "Oops, You're NOT Authorized" });
        }
        else {
            await Marketplace_Inventory.findByIdAndDelete({ _id: ID })
            res.send({ "Message": "Particular data has been deleted" })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ "Error": err })
    }
})



module.exports = {
    noticeRoute
}