import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);

chai.use(sinonChai)

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('Album', () => {
  let spotify;
  let stubbedFetch;
  let promise;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo',
    });

    stubbedFetch = sinon.stub(global, 'fetch');
    promise = stubbedFetch.returnsPromise();
  });

  afterEach(() => {
    stubbedFetch.restore();
  });

  describe('smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it('should have getAlbums method', () => {
      expect(spotify.album.getAlbums).to.exist;
    });

    it('should have getTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = spotify.album.getAlbum();
      expect(stubbedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const album = spotify.album.getAlbum('2BTZIqw0ntH9MvilQ3ewNY');
      expect(stubbedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/2BTZIqw0ntH9MvilQ3ewNY');

      const album2 = spotify.album.getAlbum('2BTZIqw0ntH9MvilQ3ewNK');
      expect(stubbedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/2BTZIqw0ntH9MvilQ3ewNK');
    });

    it('should return the correct data from the Promise', () => {
      promise.resolves({ album: 'name'});
      const album = spotify.album.getAlbum('2BTZIqw0ntH9MvilQ3ewNY');
      expect(album.resolveValue).to.be.eql({ album: 'name'});
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const album = spotify.album.getAlbums();
      expect(stubbedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const album = spotify.album.getAlbums(['2BTZIqw0ntH9MvilQ3ewNY', '2BTZIqw0ntH9MvilQ3ewNk']);
      expect(stubbedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=2BTZIqw0ntH9MvilQ3ewNY,2BTZIqw0ntH9MvilQ3ewNk');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name'});
      const albums = spotify.album.getAlbums(['2BTZIqw0ntH9MvilQ3ewNK', '2BTZIqw0ntH9MvilQ3ewNY']);
      expect(albums.resolveValue).to.be.eql({ album: 'name' });
    });
  });

  describe('getTracks', () => {

    it('should call fetch method', () => {
      const albumTrack = spotify.album.getTracks();
      expect(stubbedFetch).to.have.been.calledOnce;
    });

    it('should call the correct URL', () => {
      const albumTrack = spotify.album.getTracks('6akEvsycLGftJxYudPjmqK')
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK/tracks')
    });

    it('should return the correct data frin Promise', () => {
      promise.resolves({ album: 'name' });
      const tracks = spotify.album.getTracks('6akEvsycLGftJxYudPjmqK');
      expect(tracks.resolveValue).to.be.eql({ album: 'name' });
    });
  });
});