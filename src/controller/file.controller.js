
import fs from 'fs';
import { Storage } from 'megajs';
import path from 'path';
import { MEGA_EMAIL, MEGA_PASSWORD } from '../config.js';

const MEGA_CREDENTIALS = {
    email: Buffer.from(MEGA_EMAIL, 'base64').toString('utf-8'),
    password: Buffer.from(MEGA_PASSWORD, 'base64').toString('utf-8')
};

const cleanUploadsFolder = () => {
    const directory = path.join('uploads');

    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('❌ Error al leer la carpeta uploads:', err);
            return;
        }

        for (const file of files) {
            const filePath = path.join(directory, file);
            fs.unlink(filePath, (err) => {
                if (err) console.error(`⚠️ No se pudo eliminar ${file}:`, err.message);
            });
        }

        console.log('🧹 Carpeta uploads limpiada correctamente');
    });
};

export const saveFileEmail = async (req, res) => {
    try {
        const { path: filePath, originalname } = req.file;
        const fileSize = fs.statSync(filePath).size;

        const storage = new Storage({
            email: MEGA_CREDENTIALS.email,
            password: MEGA_CREDENTIALS.password
        });

        storage.on('ready', () => {
            const fileStream = fs.createReadStream(filePath);
            const uploadStream = storage.upload({
                name: originalname,
                size: fileSize
            });

            fileStream.pipe(uploadStream);

            uploadStream.on('complete', async (file) => {
                try {

                    cleanUploadsFolder();
                    fs.unlinkSync(filePath); // Borra archivo temporal del servidor

                    // Genera el enlace público
                    file.link((err, url) => {
                        if (err) {
                            return res.status(500).json({ error: '❌ Error al obtener enlace', details: err.message });
                        }

                        return res.json({ message: '✅ Archivo subido correctamente', link: url });
                    });

                } catch (error) {
                    return res.status(500).json({ error: '❌ Falló al borrar archivo local', details: error.message });
                }
            });

            uploadStream.on('error', (err) => {
                return res.status(500).json({ error: '❌ Falló la subida a MEGA', details: err.message });
            });
        });

        storage.on('error', (err) => {
            cleanUploadsFolder();
            return res.status(500).json({ error: '❌ Falló la conexión con MEGA', details: err.message });
        });

    } catch (error) {
        cleanUploadsFolder();
        return res.status(500).json({
            message: '❌ Error inesperado al procesar el archivo',
            details: error.message
        });
    }
};
