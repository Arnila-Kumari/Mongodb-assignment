//import mongoose from 'mongoose';//
const mongoose = require("mongoose")
const { Schema } = mongoose;

  const marks = new Schema({
    Name:  String, // String is shorthand for {type: String}
    Registration_number: String,
    Marks:   String
    });

module.exports = mongoose.model("Result",marks,"SMIT_Result")