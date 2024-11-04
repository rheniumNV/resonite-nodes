FROM node:22.4.0-alpine3.20 AS build
WORKDIR /app
ARG HUSKY=0
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./tsconfig.json ./tsconfig.json

COPY package.json .
RUN npm ci

COPY ./src ./src
RUN npm run build

FROM node:22.4.0-alpine3.20 AS server
LABEL org.label-schema.name="core-api-alt"
WORKDIR /app
ENV NODE_ENV=production
COPY --chown=node:node --from=build /app/package.json /app/package.json
COPY --chown=node:node --from=build /app/package-lock.json /app/package-lock.json
COPY --chown=node:node --from=build /app/node_modules /app/node_modules
COPY --chown=node:node --from=build /app/dist /app/dist
USER node
ENTRYPOINT ["node", "dist/server.mjs"]