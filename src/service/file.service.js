import fs from 'fs';
import mega from 'megajs';

const storage = mega({
  email: 'TU_CORREO@ejemplo.com',
  password: 'TU_CONTRASEÑA'
});

storage.on('ready', () => {
  const fileStream = fs.createReadStream('./archivo.txt');

  const upload = storage.upload({
    name: 'archivo.txt'
  });

  fileStream.pipe(upload);

  upload.on('complete', () => {
    console.log('Archivo subido correctamente.');
    console.log('Enlace de descarga:', upload.link());
  });
});
