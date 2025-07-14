# 🏢 GED-SAS - Backend

Este repositorio contiene el sistema backend desarrollado para **GED-SAS (Grupo Empresarial de Colombia)**, una empresa enfocada en soluciones sostenibles en las áreas de:

- ☀️ Energía solar
- 📢 Publicidad ecológica
- 📦 Empaques biodegradables
- 🏗 Obras civiles

El sistema tiene como objetivo apoyar la gestión digital del grupo mediante la automatización de procesos como el registro de usuarios, envío de correos y consulta de datos.

---

## 🚀 Funcionalidades

- 📧 Envío de correos electrónicos mediante nodemailer
- 👤 Registro y autenticación básica de usuarios
- 🔍 Lectura y consulta de usuarios registrados
- 🗄️ Conexión con base de datos **MongoDB**
- 🌐 API construida sobre **Express.js**

---

## 🧰 Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB (Mongoose)
- Nodemailer
- dotenv

---

## 📁 Estructura del proyecto
```
├── src/
│ ├── controllers/ # Lógica de negocio
│ ├── routes/ # Rutas de la API
│ ├── models/ # Esquemas de Mongoose
│ ├── utils/ # Funciones auxiliares (envío de correo, etc.)
│ └── index.js # Punto de entrada principal
├── .env # Variables de entorno
├── package.json
└── README.md
```

## 🛠️ Instalación y ejecución

### 1. Obtención de contraseña para Nodemailer

1. Ve a: https://myaccount.google.com/apppasswords

2. Inicia sesión con tu cuenta de Gmail

3. Si no tienes activada la verificación en dos pasos, actívala primero:
👉 https://myaccount.google.com/security

4. Luego, vuelve a la página de contraseñas de aplicación

5. En el campo "Seleccionar aplicación", elige “Otro” y escribe por ejemplo: nodemailer

6. Google generará una contraseña de 16 caracteres.
📋 Cópiala y colócala en tu archivo .env como PASSWORD_EMAIL

### 2. Instalación del Repositorio
```
# Clonar el repositorio
git clone https://github.com/usuario/ged-backend.git
cd ged-backend

# Instalar dependencias
npm install

# Ejecutar el servidor
npm run dev
```

