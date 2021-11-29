# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:lts as frontend

WORKDIR /app

COPY . .

RUN npm install

COPY ./ /app/

RUN npm run build

FROM nginx

COPY --from=frontend /app/build/ /usr/share/nginx/html

COPY /build /usr/share/nginx/html