# Discord

- [Discord](#discord)
  - [No funcionan las bienvenidas](#no-funcionan-las-bienvenidas)
  - [Intents](#intents)

Seguramente tienes la misma duda o el mismo problema y lo usas para discord esto te ayudara mucho.

## No funcionan las bienvenidas

Seguramente estas usando las targetas de bienvenida y no se mandan... <br>
discord ha cambiado las cosas, antes tu no tenias que usar algo llamado **intents**<br>

Por lo cual, seguramente tu no lo tienes, debes colocarlo. Seguramente tienes esto
```js
const client = new Client();
```
que es el cliente de discord, tu debes colocar estos intents (v13)
```js
const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS"
    ]
});
```
si quieres saber mas → https://discordjs.guide/popular-topics/intents.html#enabling-intents

::: danger
Solo debes tener un `new Client()`
:::

## Intents

Los intents son algo que discord ha puesto, con esto puedes decir que `eventos` <br>
puede ejecutar tu bot.

Por ejemplo el evento que se activa cuando un nuevo miembro a entrado a tu comunidad.

- https://discordjs.guide/popular-topics/intents.html
- https://discord.js.org/#/docs/main/stable/class/Intents
