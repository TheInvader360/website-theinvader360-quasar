# Website TheInvader360 Quasar (website-theinvader360-quasar)

APIs can be set to either 'local-json' or 'mock-server' mode. The option is set in the relevant API class constructor (e.g. /src/api/projects/index.ts).

local-json:

* retrieves data from local json files (e.g. /public/data.json)
* does not require the server back end to be running

mock-server:

* retrieves data from the mock go server (which in turn pulls data from local json files)
* does require the server back end to be running
* useful for demonstrating communications with a back end and simulating delayed responses

A real server backed by a traditional database could easily be added.

## Start the mock back end server

This step is required if any APIs are running in 'mock-server' mode.

```bash
go run main.go
```

## Install the dependencies

```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn run lint
```

### Build the app for production

```bash
quasar build
```

### Build and deploy to github pages

```bash
./build-and-deploy.sh
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
