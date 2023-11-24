# Especifica la versión de Node.js. La versión 'alpine' es más ligera y suficiente para la mayoría de los casos.
FROM node:16-alpine as node
WORKDIR /app

# Primero copia los archivos de definición de dependencias.
COPY package.json package-lock.json ./

# Instala las dependencias.
RUN npm install

# Luego copia el resto de los archivos del proyecto.
COPY . .

# Construye la aplicación para producción.
RUN npm run build --prod

# Stage 2: Configura el servidor Nginx para servir la aplicación construida.
FROM nginx:alpine

# Copia los archivos de construcción al directorio de Nginx.
COPY --from=node /app/dist/census-bolumbia-ui /usr/share/nginx/html

# (Opcional) Si tienes un archivo de configuración de Nginx personalizado, descomenta la siguiente línea y asegúrate de tener el archivo en tu contexto de construcción.
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80 para el servidor Nginx.
EXPOSE 80

# El comando por defecto de Nginx ya está configurado para iniciar el servidor, pero puedes especificarlo explícitamente si lo deseas.
# CMD ["nginx", "-g", "daemon off;"]
