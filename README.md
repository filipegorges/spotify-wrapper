# Spotify Wrapper

[![Build Status](https://travis-ci.org/filipegorges/spotify-wrapper.svg?branch=master)](https://travis-ci.org/filipegorges/spotify-wrapper)

[![Coverage Status](https://coveralls.io/repos/github/filipegorges/spotify-wrapper/badge.svg?branch=master)](https://coveralls.io/github/filipegorges/spotify-wrapper?branch=master)

Based on Udemy course: https://www.udemy.com/js-com-tdd-na-pratica/

A wrapper to work with the [Spotify Web API](https://developer.spotify.com/web-api/).

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Spotify Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

## Installation

```sh
$ npm install reuwsaat-spotify-wrapper --save
```

## How to use

### ES6

```js
// to import everything
import SpotifyWrapper from 'reuwsaat-spotify-wrapper';

const spotify = new SpotifyWrapper({
  token: 'YOUR_SPOTIFY_TOKEN_HERE',
});
```
You can get a token from [Spotify for Developers](https://developer.spotify.com/console/get-several-albums/).

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="spotify-wrapper.umd.js"></script>

<!-- to import minified version -->
<script src="spotify-wrapper.umd.min.js"></script>
```

After that the library will be available to the Global as `SpotifyWrapper`. Follow an example:

```js
const albums = spotify.search.albums('Choosen Artist');
```

## Methods

> Follow the methods that the library provides.

### search.albums(query)

> Search for informations about Albums with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *album*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
search.albums('Incubus')
  .then(data => {
    // do what you want with the data
  })
```

### search.artists(query)

> Search for informations about Artists with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *artist*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
search.artists('Incubus')
  .then(data => {
    // do what you want with the data
  })
```

### search.tracks(query)

> Search for informations about Tracks with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *track*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
search.tracks('Drive')
  .then(data => {
    // do what you want with the data
  })
```

### search.playlists(query)

> Search for informations about Playlist with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *playlist*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
search.playlists('Happy Day')
  .then(data => {
    // do what you want with the data
  })
```

### album.getAlbum(id)

> Search for informations about a specific Album with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|


**Example**

```js
album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

### album.getAlbums(ids)

> Search for informations about some Albums with all id's. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-several-albums/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`ids`   |*Array of strings* | ['id1', 'id2']|

**Example**

```js
album.getAlbum(['4aawyAB9vmqN3uQ7FjRGTy', '1A2GTWGtFfWp7KSQTwWOyo'])
  .then(data => {
    // do what you want with the data
  })
```

### album.getTracks(id)

> Search for all tracks in a specific Album with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album-tracks/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|

**Example**

```js
album.getTracks('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

| ![Filipe Gorges Reuwsaat](https://avatars3.githubusercontent.com/u/7244233?s=150&v=3)|
|:---------------------:|
|  [Filipe Gorges Reuwsaat](https://github.com/filipegorges/)   |

See also the list of [contributors](https://github.com/filipegorges/spotify-wrapper/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
