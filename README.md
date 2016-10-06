# Specification API Skeleton

Skeleton for design and API [documentation](https://mllrjb.github.io/spec-api-skeleton/).

## Contributing

### Prerequisites

* [mkdocs](http://www.mkdocs.org/) (requires `python`)
  * [mkdocs-cinder](https://github.com/chrissimpkins/cinder)
  * [pyvmdown-extensions](http://facelessuser.github.io/pymdown-extensions/)
* [node 4.x](https://nodejs.org/en/)

## Getting Started

`git clone https://github.com/mllrjb/spec-api-skeleton.git`

```
# download
git clone https://github.com/mllrjb/spec-api-skeleton.git
cd spec-api-skeleton

# install deps
npm install
# run server
npm start
```

You can preview [the documentation](http://localhost:8000/), changes will automatically refresh.

You can also edit [the API definition](http://localhost:8000/swagger), which automatically saves changes to `app/api/spec.yml`. 

You can also preview [the API docs](http://localhost:8000/api).

## Publishing

```
# publish documentation to Github Pages
npm run deploy
```
