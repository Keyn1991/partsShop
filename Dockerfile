# Użyj oficjalnego obrazu Node.js
FROM node:20

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj pliki package.json i package-lock.json
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj resztę aplikacji
COPY . .

# Expose port aplikacji NestJS
EXPOSE 3000

# Uruchom aplikację NestJS w trybie developerskim
CMD ["npm", "run", "start:dev"]
