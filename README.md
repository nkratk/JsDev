# Introduction

# Setup

1. Install all dependencies`npm install`

2. To run in dev mode `npm run start-dev-server`. Access app via localhost:8080

    Note :

      1. In Dev mode, the bundles are virtual loaded into memory. (Physical files are not generated in the disk)

      2. Live reload is enabled using Webpack's hot reload module.

      3. Enabling source-map for debug

3. To run unit tests `npm test`. Code coverage and test cases report will be available in */test-reports*.

3. For production build `npm run build`. Prod build will be available in */dist*.

      Note : Minified bundles are created on disk with all optimizations
