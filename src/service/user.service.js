import User from "../models/usuario.model.js";

export const getUser = async (body) => {
    try {
        const existingUser = await User.findOne({
            email:body.email
        });
        return existingUser;
    }catch(error){
        console.log(error)
        return {}
    }
}

export const createUser = async (userData) => {
    try {
        const newUser = new User(userData);
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        console.error("Error al crear usuario:", error);
        return { success: false, message: "Error al crear el usuario" };
    }
};