const express = require("express");

const inventoryRoute = express.Router();
inventoryRoute.use(express.json());

require("dotenv").config();

const { Marketplace_Inventory } = require("../model/inventoryModel");
const { OEM_Specs } = require("../model/oem_specsModel");

const { authenticate } = require("../middleware/authentication.middleware");


// get all the inventory
inventoryRoute.get("/", async (req, res) => {
    try {
        const data = await Marketplace_Inventory.find().populate('oemId userID');
        res.status(200).send(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ "Message": "error in getting all Second Hand Cars" });
    }
})

// get specific inventory added by specific user
inventoryRoute.get("/:id", async (req, res) => {
    const ID = req.params.id;
    try {
        const data = await Marketplace_Inventory.find({userID: ID}).populate('oemId userID');
        res.status(200).send(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ "Message": "error in getting all Second Hand Cars" });
    }
})


// authentication is applied for posting / updating and deleting a data
inventoryRoute.use(authenticate)

// post a car details in inventory
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

// update a car details in inventory
inventoryRoute.patch("/update/:id", async (req, res) => {
    const ID = req.params.id;
    const payload = req.body;
    const data = await Marketplace_Inventory.findOne({ _id: ID });
    const userid_in_req = payload.userID;
    const userid_in_doc = data.userID.toString();

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


// delete a car details in inventory
inventoryRoute.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id;
    const data = await Marketplace_Inventory.findOne({ _id: ID });
    const userid_in_req = req.body.userID;

    const userid_in_doc = data.userID.toString();
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


// deleting multiple cars - unique one
inventoryRoute.delete("/delete", async (req, res) => {
    const { itemIds } = req.body;
    try {
        await Marketplace_Inventory.deleteMany({ _id: { $in: itemIds } });
        res.status(200).send("Items deleted successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while deleting items");
    }
})


module.exports = {
    inventoryRoute
}