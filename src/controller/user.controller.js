
import { getUser, createUser } from "../service/user.service.js"
import { sendEmail } from "../utils/email.service.js"

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
            await sendEmail({
                to: 'alexgsierra22@gmail.com',
                subject: 'Confirmación de registro',
                html: `<p>¡Gracias por registrarte!</p>`,
            });
            return res.status(200).json({
                message: "Usuario Encontrado",
            }); 
        }else{
            return res.status(200).json({
                message: "Usuario Encontrado",
            }); 
        }

    } catch (error) {
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
                message:"No se envio el Correo Electronico",
                user:{}
            });
        }

        const user = await getUser(req.params);

        if (user){
            
            return res.status(200).json({
                message: user ?"Usuario Encontrado": "Usuario no encontrado",
                
            }); 
        }else{
            return res.status(200).json({
                message: "Usuario Encontrado",
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
        logger.error("Ocurrió un error inesperado");
        logger.error(error.message);
        return res.status(500).json({
            message:"Error al añadir el usuario",
            user: {}
        });
    }

}