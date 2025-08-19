
import { getUser, createUser, updateCodeUser } from "../service/user.service.js"
import { sendEmail } from "../service/email.service.js"
import { generateCode } from "../utils/utils.js";

export const sendUserEmail = async (req, res) => {

    try {

        if (!req.params.email) {
            return res.status(400).json({
                message:"No se envio el Correo Electronico",
                user:{}
            });
        }

        const user = await getUser(req.params);

        if (user){
            const generatedCode = generateCode();
            await updateCodeUser(user._id, generatedCode);
            await sendEmail({
                to: req.params.email,
                subject: 'Confirmación de registro',
                templateName: 'sendCode',
                context: { 
                    name:`${user.name} ${user.lastname}`, 
                    email:"alexgsierra22@gmail.com", 
                    code:generatedCode 
                },
            });

            return res.status(200).json({
                message: "Usuario Encontrado",
                foundUser: true
            }); 
        }else{
            return res.status(200).json({
                message: "El usuario no se encuentra registrado",
                foundUser: false
            }); 
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Error al obtener el usuario",
            user: {}
        });
    }

}


export const statusUser = async (req, res) => {

    return res.status(200).json({
        message:"Funcionando"
    });

}

export const getUserEmail = async (req, res) => {

    try {

        if (!req.params.email) {
            return res.status(400).json({
                success: false,
                message:"No se envio el Correo Electronico",
                user:{}
            });
        }

        const user = await getUser(req.params);

        if (user){
            
            return res.status(200).json({
                success: true,
                message: "Usuario Encontrado",
                data: user
            }); 
        }else{
            return res.status(200).json({
                success: false,
                message: "Usuario no Encontrado",
                data: {},
            }); 
        }


    } catch (error) {
        logger.error("Ocurrió un error inesperado");
        logger.error(error.message);
        return res.status(500).json({
            message:"Error al obtener el usuario",
            user: {}
        });
    }

}

export const addUserData = async (req, res) => {

    try {
        const responseUser = await createUser(req.body);
        return res.status(200).json(responseUser); 
    } catch (error) {
        console.log("Ocurrió un error inesperado");
        console.log(error.message);
        return res.status(500).json({
            message:"Error al añadir el usuario",
            user: {}
        });
    }

}

export const validateCode = async (req, res) => {

    try {
        
        const { code } = req.body;

        const user = await getUser(req.params);

        console.log(code)
        console.log(user.code)

        if (user.code === code) {
            return res.status(200).json({
                successfulLogin: true,
                user
            });
        }else{
            return res.status(200).json({
                successfulLogin: false,
            });
        }


    } catch (error) {
        return res.status(500).json({
            message:"Error al añadir el usuario",
            user: {}
        });
    }

}