const express = require("express");

const oemRoute = express.Router();
oemRoute.use(express.json());

const { OEM_Specs } = require("../model/oem_specsModel");


// get OEM specs of all else specific oem based on SEARCH
oemRoute.get("/", async (req, res) => {
    const { findSpecs } = req.query;
    try {
        if (findSpecs) {
            const [modelName, modelYear] = findSpecs.split(" ");
            const specs = await OEM_Specs.find({
                $or: [
                    { modelName: { $regex: modelName, $options: "i" } },
                    { modelYear: { $regex: modelYear, $options: "i" } }
                ],
            });
            res.status(200).send({ specs });
        }
        else {
            const data = await OEM_Specs.find();
            res.status(200).send(data);
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ "Message": "error in getting all OEM data" });
    }
})

// Post OEM specs 
oemRoute.post("/add", async (req, res) => {
    const {
        modelName,
        modelYear,
        vehiclePrice,
        colors,
        mileage,
        power,
        maxSpeed,
        image } = req.body;
    try {
        const data = new OEM_Specs({
            modelName,
            modelYear,
            vehiclePrice,
            colors,
            mileage,
            power,
            maxSpeed,
            image
        })
        await data.save();
        res.status(201).send({ "message": "OEM info added Successfully" });
    }
    catch (err) {
        console.log(err);
        res.status(500)({ "ERROR": err });
    }
})




module.exports = {
    oemRoute
}