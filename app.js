//Requerir express y path
const express = require('express')
const path = require('path')

//Guardar en una constante app la funcionalidad de express()
const app = express()

//Definir las rutas para los archivos estáticos (públicos) y otra para las vistas
const viewsPath = path.join(__dirname, 'views')
const publicPath = path.join(__dirname, 'public')

//Agregar el middleware para configurar la carpeta de archivos estáticos
app.use(express.static(publicPath));

//Definir la ruta que responda a GET '/' con la vista home.html
app.get('/', (req, res) => res.sendFile(path.join(viewsPath, 'home.html')));

//Definir la ruta que responda a GET '/' con la vista login.html
app.get('/login', (req, res) => res.sendFile(path.join(viewsPath, 'login.html')));

//Definir la ruta que responda a GET '/' con la vista register.html
app.get('/register', (req, res) => res.sendFile(path.join(viewsPath, 'register.html')));

//Definir la ruta que responda a GET '/' con la vista register.html
app.get('/productDetail', (req, res) => res.sendFile(path.join(viewsPath, 'productDetail.html')));

//Definir el puerto en el que se va a levantar el servidor
const port = process.env.PORT || 3000

//Levantar el servidor con app.listen(port)
app.listen(port, () => {
    console.log('servidor corriendo en el puerto ' + port);
})