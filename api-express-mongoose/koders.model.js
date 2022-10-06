 import mongoose from 'mongoose'


 const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLenght: 3,
        maxLenght: 100,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        minLenght: 3,
        maxLenght: 100,
        trim: true
    },

    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100,
        trim: true
    },

    gender: {
        type: String,
        required: true,
        enum:['h', 'm'] // que valores son validos para este campo, el enum va a permitir conceptos validos para un campo
    },

    isGraduate: {
        type: Boolean,
        default: false  //  tenga un valor por defecto
    }
 })