const mongoose = require("mongoose")

const inventorySchema = mongoose.Schema({
    kilometer: { type: Number, required: true },
    majorScratches: { type: String, required: true },
    numOfAccidents: { required: true, type: Number },
    numOfprevBuyers: { required: true, type: Number },
    registrationPlace: { required: true, type: String },
})

const Marketplace_Inventory = mongoose.model("inventory", inventorySchema)

module.exports = {
    Marketplace_Inventory
}
