# Zeew Levels

- [Zeew Levels](#zeew-levels)
- [Informacion](#informacion)
- [Como usarlo](#como-usarlo)
  - [Propiedades](#propiedades)
  - [Principal](#principal)
    - [main: options](#main-options)
    - [main: newLevel](#main-newlevel)
  - [Obtener](#obtener)
    - [Get: Level](#get-level)
    - [Get: XP](#get-xp)
    - [Get: TOP](#get-top)
  - [Agregar](#agregar)
    - [set: Level](#set-level)
    - [set: XP](#set-xp)
  - [Eliminar](#eliminar)
    - [delete: User](#delete-user)
    - [delete: All](#delete-all)
- [Ejemplo](#ejemplo)
  - [MYSQL](#mysql)
  - [Discord](#discord)

# Informacion

Zeew-levels es un modulo para crear sistema de niveles de manera facil usando la base de datos mysql que para este tipo de sistemas es perfecto.

A qui tendras todas las funciones y explicaciones mas detalladas y extensas.

# Como usarlo

Todas las funciones de zeew levels son `asyncronos`, a si que no olvides el `await` y `async`

Primero debes hacer la conexion de mysql, te recomiendo usar mysql2.
A qui te dejo el ejemplo. Se lo que necesitaras.

```js
const mysql = require('mysql2');

const conexionMYSQL = mysql.createConnection({
    host,
    user,
    database
});
```

Una vez que lo tengas, pasa la conexion de mysql a zeewlevels.

> `NOTA` Esta funcion solo debe existir una vez. Colocalo en el archivo principal.
```js
zeewLevels.conexion(conexionMYSQL)
```

y ahora podras usar las funciones.

## Propiedades

La `key` es un indentificador. Por ejemplo la id del servidor, pero si sera global, pone algo que siempre tendran.

La `id` es el indentifacdor del usuario.

La `amount` es la cantidad que sera añadida o removida

El `limit` es para obtener cierta cantidad de datos

El `limitXP` es el limite de XP que necesita para que suba de nivel. Por defecto sera 1000.

El `maxXP` el maximo de XP random que pueden obtener. Por defecto sera de 5.

## Principal

### main: options

```js
zeewLevels.main.options({limitXP, maxXP});
```

### main: newLevel

Esta es la funcion que debes colocar en el evento de mensajes para que suban de nivel. <br>
Esta funcion tambien regresa el nivel subido.

```js
zeewLevels.main.newLevel(id, key);
```

## Obtener

### Get: Level

- `Return:` Nivel actual del usuario

```js
zeewLevels.get.Level(id, key);
```

### Get: XP

- `Return:` XP actual del usuario

```js
zeewLevels.get.XP(id, key);
```

### Get: TOP

- `Return:` Array con cierta cantidad de usuarios con el nivel mas alto

```js
zeewLevels.get.TOP(key, limit);
```

## Agregar

### set: Level

- `Return:` El nivel agregado

```js
zeewLevels.set.Level(id , key, amount);
```

### set: XP

- `Return:` El XP agregado

```js
zeewLevels.set.XP(id , key, amount);
```

## Eliminar

### delete: User

- `Return:` True si salio todo correcto

```js
zeewLevels.delete.user(id, id);
```

### delete: All

- `Return:` True si salio todo correcto

Este elimina todo los datos en la base de datos, ten cuidado.

```js
 zeewLevels.delete.all(key);
```

# Ejemplo

## MYSQL

```js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'zeew',
    password: '4tLaNL@h'
    database: 'bot'
});

connection.connect(error => {
    if(error) return console.log(error);
})

connection.on('error', (err) => {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.log('DB disconnected attempting reconnection')
        connection.connect((err) => {
            if (err) throw err;
            console.log('DB reconnected!')
        });
    } else {
        throw err;
    }
})
connection.on('connect', () => {
    console.log(`Connected!`)
})

module.exports = connection;
```

## Discord
```js
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ ws: { intents: Intents.ALL } });
const { Discord: { token } } = require('./config');
const conexiondb = require('./mysql')

const zeewLevels = require('zeew-levels');
zeewLevels.conexion(conexiondb)
zeewLevels.main.options({
    limitXP: 500,
    maxXP: 50
})

const embed = (message, title, description) => {
    const ed = new MessageEmbed()
        .setTitle(title)
        .setDescription(description)
        .setColor(0xFF0000)
    message.channel.send(ed)
}

client.on('ready', () => {
    console.log('Logged in as', client.user.tag, client.user.id);
})

client.on("message", async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith('!getlevel')) {
        const getlevel = await zeewLevels.get.Level(message.author.id, message.guild.id);
        embed(message, "Tu Nivel", `Nivel: ${getlevel}`)
    }
    if (message.content.startsWith('!getxp')) {
        const getXP = await zeewLevels.get.XP(message.author.id, message.guild.id);
        embed(message, "Tu X", `XP: ${getXP}`)
    }
    if (message.content.startsWith('!gettop')) {
        const getXP = await zeewLevels.get.TOP(message.guild.id, 10);
        embed(message, "TOP 10", getXP.map(a => `• <@${a.id}> > LvL: ${a.lvl} - XP: ${a.xp}`))
    }
    if (message.content.startsWith('!setlevel')) {
        const setlevel = await zeewLevels.set.Level(message.author.id, message.guild.id, message.content.split(' ')[1]);
        embed(message, "Nuevo Nivel", `Nivel: ${setlevel}`)
    }
    if (message.content.startsWith('!setxp')) {
        const setlevel = await zeewLevels.set.XP(message.author.id, message.guild.id, message.content.split(' ')[1]);
        embed(message, "Nuevo XP", `XP: ${setlevel}`)
    }
    if (message.content.startsWith('!deleteuser')) {
        await zeewLevels.delete.user(message.author.id, message.guild.id);
        embed(message, "Borrado", `Borrado: <@${message.author.id}>`)
    }
    if (message.content.startsWith('!deleteall')) {
        await zeewLevels.delete.all(message.guild.id);
        embed(message, "Borrado", `Borrado: Todos`)
    }

    let newLevel = await zeewLevels.main.newLevel(message.author.id, message.guild.id)
    if(!newLevel) return;
    embed(message, "Zeew-Level", `Nuevo Nivel: ${newLevel} - <@${message.author.id}>`)
})

client.login(token);
```