# yeobara-desktop

> yobara(`여봐라` in Korea), which mean is almost the same meaning of `Excuse me. I'm here` in English


## Dev

```
$ FB_APIKEY=YOURKEY FB_APPNAME=https://YOURAPP.firebaseio.com/ npm install
```

### Config for Firebase

This app need `.env` file at root location which has information of connecting firebase. It will be loaded as environment value on application starting. here are kind of requirement values.

```
FB_APIKEY=YOUR_FB_KEY
FB_APPNAME=YOUR_FB_APPNAME // https://incandescent-inferno-1111.firebaseio.com/
```

There are two way of making env file. one way is that pass environment values when it called npm commands, `npm install` or `npm run env`. like this.

```
// after install
$ FB_APIKEY=YOURKEY FB_APPNAME=https://YOURAPP.firebaseio.com/ npm install

// update env file when it is needed
$ FB_APIKEY=YOURKEY FB_APPNAME=https://YOURAPP.firebaseio.com/ npm run env
```

The other hand is creating `.env` file manually by yourself.

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
