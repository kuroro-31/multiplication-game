FROM node:16 AS build
ADD . /
WORKDIR /
RUN npm install --production=false
RUN npm run build

FROM gcr.io/distroless/nodejs:16
WORKDIR /
COPY --from=build /next.config.js ./
COPY --from=build /public ./public
COPY --from=build /package.json ./package.json
COPY --from=build /.next/static ./.next/static
COPY --from=build /.next/standalone ./
COPY --from=build /server.js ./server.js

ENV PORT 8080
ENV PATH="/nodejs/bin:${PATH}"

CMD ["server.js"]
