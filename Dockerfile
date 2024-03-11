FROM node:18.13.0 as builder
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/dist/angular17/browser /usr/share/nginx/html