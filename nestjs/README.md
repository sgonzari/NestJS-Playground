# NestJS
Aprendizaje de NestJS

# [Tutorial](https://youtu.be/GHTA143_b-s)

# Pasos a seguir
## Descargar cli de NestJS de manera global
```
npm i -g @nestjs/cli
```

## Creación del proyecto
```
nest new project-name
```
_Eliminar carpeta .git para poder subir al repositorio_

## Creación de un módulo
```
nest g module module-name
```

## Descargar cli de Prisma
```
npm i @prisma/client
```

## Descargar Prisma para modelado y exportación de database
```
npm i -D prisma
```

## Inicialización de Prisma
```
npx prisma init
```

## Migración y exportación de Prisma [DEV]
```
npx prisma migrate dev
```

## Generar el cliente de Prisma 
_Hace que los modelos declarados, sean interfaces utilizables_
```
npx prisma generate
```

## Prisma Studio
_Visualizador web (como phpmyadmin) de la base de datos_
```
npx prisma studio
```