# Editor Backend

## Build

Install dependencies: `npm install`

Start a dev server and listen for code changes: `npm start`

Build a docker image:

```bash
npm run build
npm run docker-build
```

## API

The Relay provides a GraphQL API that is served on `/graphql` (e.g., http://localhost:3000/graphql
on a dev environment). When accessed with a web browser, this endpoint offers an interactive query
editor and documentation.

## Environment Variables

Variable | Description | Default value (Docker) | Default value (dev)
-------- | ----------- | ---------------------- | -------------------
PORT | Port for accessing the relay via HTTP | 80 | 3001
POSTGRES_SOMETHING | Some information postgres might need | bar | foo