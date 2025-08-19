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
        companyName: {
            type: String
        },
        city: {
            type: String
        },
        code: {
            type: String,
            default: "",
        },
        typeUser: {
            type: String,
            default: "",
        },
        direction: {
            type: String,
            default: "",
        },
        phoneNumber: {
            type: String,
            default: "",
        }
    },
    {
        timestamps: true, 
        versionKey: false,
    }));

export default usuarioSchema; 