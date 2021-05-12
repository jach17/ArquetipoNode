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
swagger-jsdoc -d swaggerDef.js ./src/api/*.ts -o swagger.json
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

## Contributors

Javier RodrÃ­guez  
[francisco.rodriguez@axity.com]  
Hugo Meraz  
[hugo.meraz@axity.com]  