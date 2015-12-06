# Yeobara Desktop Meet-up Manager

> Yeobara(`여봐라` in Korea), which mean is almost the same meaning of `Excuse me. I'm here` in English

![](https://cloud.githubusercontent.com/assets/124117/11326132/13954860-91a4-11e5-9300-92565cb8f6f6.png)

## Dev

```
$ FB_APIKEY=YOURKEY FB_APPNAME=https://YOURAPP.firebaseio.com/ GCM_KEY=YOUR_GCM_KEY npm install
```

### Configuration

This app requires `env` file at root location with information of connecting Firebase and GCM. It will be loaded as environment value on starting application. here are kinds of requirement value.

```
FB_APIKEY=YOUR_FB_KEY
FB_APPNAME=YOUR_FB_APPNAME
GCM_KEY=YOUR_GCM_KEY
```

There are two way of making env file. one way is that pass environment values when it called npm commands, `npm install` or `npm run env`. like this.

```
// after install
$ FB_APIKEY=YOURKEY FB_APPNAME=https://YOURAPP.firebaseio.com/ GCM_KEY=YOUR_GCM_KEY npm install

// update env file when it is needed
$ FB_APIKEY=YOURKEY FB_APPNAME=https://YOURAPP.firebaseio.com/ GCM_KEY=YOUR_GCM_KEY npm run env
```

The other hand is creating `env` file manually by yourself.

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

MIT © [Yeobara](http://github.com/yeobara)
