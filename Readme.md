# NODEJS

## Proyecto NodeJs Microservicio  

Proyecto Base NodeJs para microservicios

## Comenzando

Preparación inicial y consideraciones

## Pre-requisitos

Para la instalación se necesita:

* [NodeJsLTS](https://nodejs.org/)  
* [VisualStudio Code](https://code.visualstudio.com/)  

## Instalación

Como instalar las dependencias el proyecto:

```bash
npm install
```

Compilar:

```bash  
npm run tsc
```

Levantar el servicio:  

```bash  
node ./build/config/server/index.js
```

Ejecutar pruebas unitarias:  

```bash  
npm test
```

Mostrar cobertura:  

```bash  
npm run coverage
```

## Swagger  

```bash
npm install -g swagger-jsdoc
swagger-jsdoc -d swaggerDef.js ./**/*.ts -o swagger.json
```

## Sonar

Incluir la cobertura de pruebas unitarias en Sonar

```bash
sonar-scanner \
	 -Dsonar.projectKey=<Nombre del proyecto> \
	 -Dsonar.sources=src \
	 -Dsonar.coverage.exclusions=src/api/**,src/commons/**,src/config/**,src/models/**,src/to/**,src/facade/index.ts,src/facade/**/index.ts \
	 -Dsonar.host.url=<Sonar Host> \
	 -Dsonar.login=<Sonar Token> \
	 -Dsonar.sourceEncoding=UTF-8 \
	 -Dsonar.tests=tests \
	 -Dsonar.typescript.lcov.reportPaths=coverage/lcov.info
```
## Logger

Para utilizar los logs del proyecto se utiliza la biblioteca de winston el cual tiene configurado dos transport uno para la salida a consola y otro para indexar logs a elasticsearch 

para utilizar los logs solo hace falta importar la siguiente biblioteca en cada lugar donde utilicemos el logger 
```bash
import { logger } from '../logger/logger';
```
Uso del logger
incluir la severidad del log:
```bash
{
  emerg: 0,
  alert: 1,
  crit: 2,
  error: 3,
  warning: 4,
  notice: 5,
  info: 6,
  debug: 7
}
```
Sustituir MENSAJE por el mensaje a loggear
Sustituir CLASS por la clase donde se detona el log
Sustituir DATA por los metadatos que se incluiran en el log, se recomienda utilizar una estructura json o plana
```bash
logger.info("(%s) MENSAJE %s","CLASS",DATA); 
```
Para el uso de elastic search, se debe setear las siguientes variables
```bash
	ELASTIC_SEARCH_HOST
	ELASTIC_SEARCH_USER
	ELASTIC_SEARCH_PASSWORD
	ELASTIC_SEARCH_INDEX_LOGGER
```
Para el caso de ELASTIC_SEARCH_INDEX_LOGGER contendra el nombre de la aplicacion por ejemplo si el service se llama client-service, este sera el valor que contendra esta variable y su resultado del nombre en el indice de ELK sera log-development-client-service-2022.04.12

## Contributors

Javier RodrÃ­guez  
[francisco.rodriguez@axity.com]  
Hugo Meraz  
[hugo.meraz@axity.com]  