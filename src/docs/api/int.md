# Interaccion

Unos de los servicios que brindamos a nuestra comunidad es nuestra `API DE INTERACCION`, con esta api
tu tendras imagenes de acciones para rol, imagenes editadas y entre otras cositas.

Para poder usar nuestra `API` tendras que tener un `token`, sin esta no podras usarla, para obtenerla
tendras que entras a nuestro servidor de [discord](https://zeew.dev/discord) y ejecutar el comando
`zw!token` al dm del bot `zeew` y brinda cierta informacion para obtener [acceso](https://docs.zeew.dev/init/information/tos.html#acceso),
pero no te preocupes, nosotros solo recopilamos [informacion de usaurio](https://docs.zeew.dev/init/information/tos.html#datos).

## Categoria

| Categoria | Descricion                |
| --------- | ------------------------- |
| sfw       | Gifs randoms para rol     |
| nsfw      | Gifs randoms para rol +18 |
| img       | Imágenes editadas         |
| card      | Tarjetas editadas         |

## sfw

* API: `https://api.zeew.dev/int/gif/sfw`
* endpoint:
  * `/neko` - Gifs randoms de gatos (anime)
  * `/kiss` - Gifs randoms de besos (anime)
  * `/run` - Gifs randoms corriendo (anime)
  * `/hug` - Gifs randoms de abrazos (anime)
  * `/cry` - Gifs randoms llorando (anime)
  * `/punch` - Gifs randoms de golpes (anime)
  * `/wasted` - Gifs randoms de wasted (anime)
  * `/waifus` - Gifs randoms de waifus (anime)

## nsfw

* API: `https://api.zeew.dev/int/gif/nsfw`
* endpoint:
  * `/maid` - Gifs randoms de sirvientas (anime)
  * `/boobs` - Gifs randoms de pechos (anime)
  * `/furry` - Gifs randoms furry (anime)

## img

* API: `https://api.zeew.dev/int/img`
* Ejemplo: `https://api.zeew.dev/int/img/triggeredavatar=https://i.imgur.com/6x643a0.jpg`
* Otro ejemplo: `https://api.zeew.dev/int/img/desenfoque?avatar=https://i.imgur.com/6x643a0.jpg&pixel=5`
* Retorna un buffer

### filtros

* `/triggered` - Coloca un avatar y se convertira en un triggered
  * **Querys**:
    * `avatar` - coloca la url de una imagen

![](https://cdn.discordapp.com/attachments/686222778504052846/958573913284182037/triggered.gif)

* `/sepia` - Coloca un avatar y se convertira en sepia
  * **Querys**:
    * `avatar` - Coloca la url de una imagen

![](https://cdn.discordapp.com/attachments/686222778504052846/958574236136538112/sepia.png)

* `/gris` - Coloca un avatar y se convertira en gris
  * **Querys**:
    * `avatar` - Coloca la url de una imagen

![](https://cdn.discordapp.com/attachments/686222778504052846/958574377883017216/gris.png)

* `/desenfoque` - Coloca un avatar y se convertira en desenfocado
  * **Querys**:
    * `avatar` - Coloca la url de una imagen
    * `pixel` - Coloca el grado del desenfoque

![](https://cdn.discordapp.com/attachments/686222778504052846/958574603771473950/desenfocado.png)

* `/pixel` - Coloca un avatar y se convertira en pixeleado
  * **Querys**:
    * `avatar` - Coloca la url de una imagen
    * `pixel` - Coloca el grado del pixel

![](https://cdn.discordapp.com/attachments/686222778504052846/958574817731289138/pixel.png)


* `/gay` - Superpone una bandera gay (arcoiris)
  * **Querys**:
    * `avatar` - Coloca la url de una imagen

![](https://cdn.discordapp.com/attachments/686222778504052846/958574887616786482/gay.png)

* `/circulo` - Coloca un avatar y se convertira en círculo
  * **Querys**:
    * `avatar` - Coloca la url de una imagen

![](https://cdn.discordapp.com/attachments/686222778504052846/958574990368833536/triggered.gif)

* `/shipeo` - Coloca un avatar y se convertirá en un shipeo
  * **Querys**:
    * `avatar` - Coloca la url de otra imagen
    * `avatar2` - Coloca la url de otra imagen
    * `ship` - Coloca la url de una imagen

![](https://cdn.discordapp.com/attachments/686222778504052846/958575213635846184/imginvertida.png)
