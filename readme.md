# yeobara-desktop

> yobara(`여봐라` in Korea), which mean is almost the same meaning of `Excuse me. I'm here` in English


## Dev

```
$ npm install
```

## Config

You should touch your own `.env` file at root of application. It will be loaded as environment value on application starting. here are kind of requirement values.

```
FB_APIKEY=YOUR_FB_KEY
FB_APPNAME=YOUR_FB_APPNAME // https://incandescent-inferno-1111.firebaseio.com/
```

### Run

```
$ npm start
```

### Build

```
$ npm run bundle && npm run build
```

Builds the app for OS X, Linux, and Windows, using [electron-packager](https://github.com/maxogden/electron-packager).


## License

MIT © [ragingwind](http://ragingwind.md)
