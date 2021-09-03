# MongoDB

## Introducción
* Hola amigos de Zeew Dev's en el día de hoy vengo a presentarles una, guía de MongoDB
* Les hablaré un poco sobre MongoDB es una base de datos que actualmente es muy utilizada
* Esta base guarda tus datos en un Clúster para no ocupar espacio en tu proyecto como algunas otras, dB
* Espero que con esta, guía puedas introducirte en el tema de MongoDB

## Creación de la cuenta & el clúster

Primero ingresaremos en el siguiente link y crearemos una cuenta: https://www.mongodb.com/

Cuando se registren les enviara a un apartado donde tienen que elegir un clúster. Le dan a crear nuevo clúster, le colocan un nombre, región donde estará ubicada la data base y creamos nuestro clúster

Cuando creen un nuevo clúster les aparecerá que tienen que esperar de 1 a 3 minutos. Esperamos

![](https://i.gyazo.com/f11f21c3c5947f592aac7fa72a0012cd.png)

Cuando ya lo tengamos así: 

![](https://i.gyazo.com/f088d853561c6229505ee7abd9df902f.png)

Le damos clic en "connect".


Nos aparecerá algo tal que así:


![](https://i.gyazo.com/8a5c8f54bf71e5c2dd1d811695e18448.png)


Le damos en Add Your Current IP address y colocamos un nombre y una contraseña. Te recomiendo anotar la contraseña. Le damos a Create Database User

Le damos a next y aparecerá algo tal que así:


![](https://i.gyazo.com/58caf55e455a44fefe13177df9056774.png)

Le damos a la opción del medio.

Nos aparecerá algo tal que así:


![](https://i.gyazo.com/f56ea22ef93f8b779676c3455c6f5a1e.png)


Copiamos el link y donde dice `<password>` nosotros colocaremos la contraseña que colocamos hace un momento al momento de crear la DataBase. Recalco que debemos quitar los <>
Tal que así: mongodb+srv://pepe:tuContraseña@cluster0.sr5eu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

Le damos a "Close".

Le damos clic a Network Access y donde esta tu IP le damos a editar y colocaremos la IP: 0.0.0.0/0

![](https://i.gyazo.com/88c7d5812ba9d6840b06fcee1750071f.png)

## Conexión a la base de datos desde tu bot

- En tu Index.js colocaremos lo siguiente: 

```js
const mongoose = require('mongoose'); //Tenemos que tener instalado mongoose | npm i mongoose
mongoose.connect('TuURLDeMongoDB', { //Creamos la conexion a MongoDB
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('Estoy Conectado a MongoDB')) //Hacemos un .then dentro de el then colocaremos un console.log donde le diremos a la consola que cuando realize la conexion a mongodb envie Estoy Conectado a MongoDB
```

Con esto ya tendríamos nuestra conexión ahora realizaré un pequeño ejemplo.

## Ejemplo

Creamos una carpeta llamada. Schema/Models a la altura del index.js
Dentro de la carpeta crearemos un archivo como quieran que se llame. Ejemplo: guía.js
Dentro de ese archivo colocaremos lo siguiente: 

```js
const mongoose = require('mongoose')//npm i mongoose

const Schema = new mongoose.Schema({//Creamos un nuevo Schema/Model esto lo que hace es validar los datos antes de subirlo a la web
//Valida los datos segun la informacion que tu requieres y que tu le des
  userId: {
      type: String,
      required: true
  },
  texto: {
      type: String,
      required: true
  }
});//Aqui adentro colocaremos lo que queremos que guarde. Le pueden colocar el nombre que quieran. Pero en type debes colocar: String, Boolean, Array, Number entre esas tienes que colocar existen mas pero esas son las basicas

module.exports = mongoose.model("aqui colocas el nombre con el que quieres que se guarde dentro de el cluster", Schema)//Y Exportamos
```

Ya en nuestro index podremos empezar a guardar datos.

## Guardando los datos

```js
const Schema = require('./Schema/test')//requrimos nuestro Modelo/Schema
const Discord = require('discord.js')//npm i discord.js
const client = new Discord.Client()//Creamos un nuevo Client
client.on('messageCreate', async(message) => {//Realizamos un client.on o un nuevo evento
//Quiero recalcar que esto es de Discord.Js no tiene nada que ver con MongoDB este evento que acabamos de crear es de la libreria de Discord.Js

    if(message.content.startsWith === '.test') {//Aqui hacemos una funcion que si el mensaje empieza con .test envia el comando

        const txt = args.slice(1).join(' ')//Aqui recolectamos los argumentos que el usuario ingrese

        if(!txt) return message.reply("Debes colocar un texto")//Aqui si el usuario no ingresa un texto retornara y le enviara "Debes colocar un texto"

        const data = new Schema({//Aqui empezamos a meter los datos a el Schema/Model
            userId: message.author.id,//Ingresamos el id de el author de el mensaje
            texto: txt//Ingresamos el texto
        })
        await data.save()//Guardamos la data
    }
})
```

Con esto terminamos nuestro ejemplo. Algunos se preguntarán como puedo eliminar un dato. Así que realizaremos un ejemplo

## Eliminar datos

```js
const Schema = require('./Schema/test')//Mandamos a llamar nuestro archivo/model
const Discord = require('discord.js')//npm i discord.js
const client = new Discord.Client()//Creamos un nuevo Client
client.on('messageCreate', async(message) => {//Realizamos un client.on o un nuevo evento
//Quiero recalcar que esto es de Discord.Js no tiene nada que ver con MongoDB este evento que acabamos de crear es de la libreria de Discord.Js

    if(message.content === '.borrar') {//Aqui hacemos una funcion que si el mensaje empieza con .borrar envia el comando
        const data = Schema.findOne({//Abrimos para empezar a buscar nuestros datos
            userId: message.author.id //Buscamos el id de la persona 
        })
        data ? data.findOneAndDelete({ userId: message.author.id }) : message.reply("No encontre datos")
        //Realizamos la funcion de ? : esta funcion lo que nos permite hacer es que si los datos existen realiza la funcion siguiente y si no existe pues retorna
        //Explicare rapidamente
        //Si la data existe buscamos y encontramos el ID de la persona y la eliminamos y si no existe enviamos a el canal "No encontre datos"
    }//Cerramos nuestro if
})//Cerramos nuestro evento
```

## Actualizar datos

```js
const Schema = require('./Schema/test')//Mandamos a llamar nuestro archivo/model
const Discord = require('discord.js')//npm i discord.js
const client = new Discord.Client()//Creamos un nuevo Client
client.on('messageCreate', async(message) => {//Realizamos un client.on o un nuevo evento
//Quiero recalcar que esto es de Discord.Js no tiene nada que ver con MongoDB este evento que acabamos de crear es de la libreria de Discord.Js

    if(message.content === '.actualizar') {//Aqui hacemos una funcion que si el mensaje empieza con .actualizar envia el comando
    

       const buscar = await Schema.findOne({ userId: message.author.id })
       if(!buscar) return message.reply("No encontre datos con tu id")
       //Aqui lo que hacemos es buscar los datos y si no encuentra los datos enviamos el mensaje "No encontre datos con tu id"

       const txtNew = args.slice(1).join(' ')//capturamos los argumentos que la persona escriba
       if(!txtNew) return message.reply("Debes ingresar el nuevo texto")//Si no ingresa retornamos con el mensaje

       const guardar = Schema.findOneAndUpdate({userId: message.author.id}, {texto: txtNew})//Guardamos los datos

       await guardar.save().catch(err => {

           message.channel.send("Eh tenido un error")
           console.log(err)
           return;
       })//Guardamos los datos y si tenemos algun error lo captamos en la consola y enviamos a el canal donde se ejecuto el mensaje que el bot tuvo un error a el intentar guardar los datos


    }//Cerramos nuestro if
})//Cerramos nuestro evento
```

## Finalización

- Con esto ya tendríamos nuestra base de datos espero que haya sido de tu utilidad la información que acabo de dar, espero que empieces a usar MongoDB y si tienes alguna duda te dejo aquí abajo el Discord de Zeew para que entres y me preguntes cualquier duda o fallo que tengas

## Links

| Librerías |                    Links                    |
| :-------: | :-----------------------------------------: |
|  MongoDB  |   [Clic Aquí](https://www.mongodb.com/)    |
| Mongoose  |    [Clic Aquí](https://mongoosejs.com)     |
|  Discord  | [Clic Aquí](https://discord.gg/6tCdxshm9w) |

<div align="center">
    <small>Zeew.Dev &copy ▫ Todos los derechos reservados</small> <br>
    <a href="/init/equipo/zJuqn.html">Author: zjuqn</a>
</div>
