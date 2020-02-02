# r-pro-prueba-seleccion

Implementación de la Prueba de selección de R-PRO

## Tecnologías

* Node.js v8.16.0
* NPM 6.4.1
* Docker 19.03.5

## Uso sin contenedor

### Dependencias
```
npm i
```

### Run
```
node index
```

* Abrir URL en el Browser [http://localhost:3000](http://localhost:3000)

## Uso con contenedores Docker

### Build
```
docker build -t r-pro-prueba .
```

### Run
```
docker run -p 3000:3000 -d r-pro-prueba
```

## Test

### Test API Publica

* Abrir URL en el Browser [Heroku API](https://limitless-bastion-81935.herokuapp.com)

### Test Ambiente Local

* Abrir URL en el Browser [Localhost](http://localhost:3000)
