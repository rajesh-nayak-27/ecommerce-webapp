FROM node:16-alpine AS ui-build
RUN mkdir -p ecommerce/frontend
WORKDIR /ecommerce/frontend
COPY ./frontend/package.json .
RUN npm install
COPY ./frontend/ .
RUN npm run build


FROM node:16-alpine
RUN mkdir -p ecommerce/backend
COPY --from=ui-build /ecommerce/frontend/build /ecommerce/backend/build
WORKDIR /ecommerce/backend
COPY ./backend/package.json .
RUN npm install
COPY ./backend .
EXPOSE 5000
CMD [ "node", "./server.js" ]