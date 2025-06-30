import mongoose from "mongoose";

const usuarioSchema = new mongoose.model(
    "user", 
    new mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        name: {
            type: String
        },
        lastname: {
            type: String
        },
        email: {
            type: String,
            unique: true
        },
        nit: {
            type: String
        },
        nombreEmpresa: {
            type: String
        }
    },
    {
        timestamps: true, 
        versionKey: false,
    }));

export default usuarioSchema; 