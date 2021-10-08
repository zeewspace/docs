# Zeew Module

- [Zeew Module](#zeew-module)
  - [Informacion](#informacion)
  - [Instalacion](#instalacion)
- [Contenido](#contenido)
  - [Gifs](#gifs)
  - [IMG](#img)

## Informacion

Seguramente sabes que tenemos una api, para algunos es facil usarlo, pero para otros y por comodidad, les gusta usar el npm/modulo que hemos creado.

Como la api tiene tantas cosas, el npm/modulo tambien tendra demaciadas funciones <br>
pero para nos saturar la pagina principal con todas las funciones, solo colocamos
lo mas importante y lo mas usado.

Pero aqui, si encontraras todas las funciones, explicado detalladamente, simple y con un ejemplo.

Algo que debes tener en cuenta es la opcionde status, este quiere decir si esta disponible o no.

- `status:` 
  - ✔ Disponible
  - ✖ No Disponible (aun)

<br>

## Instalacion

Para poder utilizar la api, debes tener un token, esto te lo digo, ya que el modulo lo unico que hace es hacer peticiones a la api, de una manera mas facil.

Las funciones del modulo son asyncronas, lo cual deberias usar [async y await](https://es.javascript.info/async-await).

Para obtener las funciones del modulo, se tiene que colocar primero el contructor, que es donde salen todas categorias y las funciones.

un ejemplo claro de esta seria los gifs de interaccion.

```js
const zeew = require('zeew');
const gif = new zeew.gif("TOKEN"); //Contructor

gif.sfw.dance() // Contenido sfw de bailes
gif.nsfw.maid() // Contenido nsfw de sirvientas
```

Si te das cuenta, desde el contructor, sale la categoria y la de ahi la funcion, algunos tiene categorias, otros simplemente funciones.

```js
<constructor>.<categoria>.<funcion>
```



# Contenido

## Gifs

Yo se que muchas veces nos toca buscar gifs con ciertas acciones espesificas, ya sea para poder simular ciertas acciones cuando hacemos rol o reprensentarnos de alguna manera.

Todas las imagenes son de anime.

```javascript
const Zeew = require("zeew");
const gif = new zeew.gif("TOKEN");

// -= Estructura =-
gif.sfw.<contenido>
gif.nsfw.<contenido>

// -= Ejemplo =-
gif.sfw.dance()
gif.nsfw.maid()

// -= Ejemplo =-
gif.sfw.dance().then(link => console.log(link))
console.log(await gif.sfw.dance())
```

- **Contenido SFW**

| Funcion | Descripcion | status |
| ------- | :---------: | :----: |
| neko    | Chicas gato |   ✔    |
| kiss    |    beso     |   ✔    |
| slap    |  bofetada   |   ✔    |
| wink    |    giño     |   ✔    |
| run     |   correr    |   ✔    |

- **Contenido NSFW**

| Funcion  |   Descripcion   | status |
| -------- | :-------------: | :----: |
| maid     |   sirvientas    |   ✔    |
| boobs    |     pechos      |   ✖    |
| hentai   |     hentai      |   ✖    |
| futunari |       7w7       |   ✖    |
| pussy    |       7w7       |   ✖    |
| ass      |       7w7       |   ✖    |
| chubby   | gorditas buenas |   ✖    |

## IMG

Si has visto las aplicaciones de filtros, pues es justamente esto.

Los parametros, son las cosas que colocas dentro de las parentesis, por ejemplo la url de la imagen.

```javascript
const Zeew = require("zeew");
const img = new Zeew.img("TOKEN");

// -= Estructura =-
img.<categoria>.<funcion>

// -= Ejemplo =-

// Filtros
img.filter.circulo("URL")

// Bienvenida
const card = new img.card
      .bienvenida()
      .token(key)
      .estilo("classic")
      .avatar("URL DEL AVATAR")
      .fondo("URL DEL FONDO")
      .colorTit("#FF3DB0")
      .titulo("Bienvenido")
      .colorDesc("#fff")
      .descripcion("Tenemos un nuevo usuario");
const render = await img.card.render(card);
```

- **Categorias**

| Funcion |      Descripcion      |
| ------- | :-------------------: |
| card    |       Tarjetas        |
| filter  | filtros para imagenes |
| Memes   |  Memes con imagenes   |

- **filter**
- triggered
  - `Parametros:` URL
  - `Ejemplo:`
    ```js
    img.filter.triggered("URL")
    ```
- sepia
  - `Parametros:` URL
  - `Ejemplo:` 
    ```js
    img.filter.sepia("URL")
    ```
- invertir
  - `Parametros:` URL
  - `Ejemplo:` 
    ```js
    img.filter.invertir("URL")
    ```
- gris
  - `Parametros:` URL
  - `Ejemplo:` 
    ```js
    img.filter.gris("URL")
    ```
- desenfoque
  - `Parametros:` URL & NUMERO
  - `Ejemplo:` 
    ```js
    img.filter.desenfoque("URL", 5)
    ```
- pixel
  - `Parametros:` URL & NUMERO
  - `Ejemplo:` 
    ```js
    img.filter.pixel("URL", 5)
    ```
- gay
  - `Parametros:` URL
  - `Ejemplo:` 
    ```js
    img.filter.gay("URL")
    ```
- circulo
  - `Parametros:` URL
  - `Ejemplo:` 
    ```js
    img.filter.circulo("URL")
    ```
- shipeo
  - `Parametros:` URL
  - `Ejemplo:` 
    ```js
    img.filter.shipeo("URL","URL","URL DE CORAZON")
    ```

- **card**
  - bienvenida
    - `Estilo:`
      - [classic](https://i.imgur.com/XqOGyel.png) 
      - [anime](https://i.imgur.com/ZEt9X63.png) 
      - [premiun] ani 
      - [premiun] simple 
    - `Ejemplo:` 
      ```js
        const card = new img.card
            .bienvenida()
            .token(key)
            .estilo("classic")
            .avatar("URL DEL AVATAR")
            .fondo("URL DEL FONDO")
            .colorTit("FF3DB0") // COLOR HEXADECIMAL
            .titulo("Bienvenido")
            .colorDesc("fff") // COLOR HEXADECIMAL
            .descripcion("Tenemos un nuevo usuario");
      ```