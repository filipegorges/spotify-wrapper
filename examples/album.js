/* to run: babel-node albums.js */

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQBM8B0Cn-wVVZjXcXXA0lMGheT4KsxTqFJ8HnCB6Vzqk4AJs1XMndgOv2zDhuoL02sbu6jMj2WVuLAuFO9HEodtCErGyxi5iXBEGydQC8cvbIFw4ohXQwGbmm5LL8JEYeNH8JMrq4Cqy3PS'
});

const albums = spotify.search.albums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
