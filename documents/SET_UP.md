# Project setup

## Local setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Production setup
Enter the project root directory. Then execute the blow commands:
```
docker build . -t my-app
docker run -d -p 8080:80 my-app
```
