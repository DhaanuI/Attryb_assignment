const mongoose = require("mongoose")
const { OEM_Specs } = require("./oem_specsModel");
const { UserModel } = require("./userModel");


const inventorySchema = mongoose.Schema({
    kilometer: { type: Number, required: true },
    majorScratches: { type: String, required: true },
    numOfAccidents: { required: true, type: Number },
    numOfprevBuyers: { required: true, type: Number },
    registrationPlace: { required: true, type: String },
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: [String], required: true },
    oemId: { type: mongoose.Schema.Types.ObjectId, ref: OEM_Specs },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: UserModel }
})

const Marketplace_Inventory = mongoose.model("inventory", inventorySchema)

module.exports = {
    Marketplace_Inventory
}
