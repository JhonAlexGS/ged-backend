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
        const { email } = userData;
        const exists = await User.findOne({email}).lean();
        if (!exists) {
            const newUser = new User(userData);
            const savedUser = await newUser.save();
            return savedUser;
        }else{
            console.log(exists)
            return { success: true, message: "El usuario ya se encuentra registrado", data: exists };
        }
    } catch (error) {
        console.error("Error al crear usuario:", error);
        return { success: false, message: "Error al crear el usuario" };
    }
};

export const updateCodeUser = async (userId, code) => {
    try {
        await User.findByIdAndUpdate(userId, {
            code: code,
        });
    } catch (error) {
        console.error("Error al crear usuario:", error);
        return { success: false, message: "Error al crear el usuario" };
    }
};