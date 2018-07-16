import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);

chai.use(sinonChai)

global.fetch = require('node-fetch');

import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';

describe('Album', () => {
  let stubbedFetch;
  let promise;
  beforeEach(() => {
    stubbedFetch = sinon.stub(global, 'fetch');
    promise = stubbedFetch.returnsPromise();
  });

  afterEach(() => {
    stubbedFetch.restore();
  });

  describe('smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have getAlbums method', () => {
      expect(getAlbums).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = getAlbum();
      expect(stubbedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const album = getAlbum('2BTZIqw0ntH9MvilQ3ewNY');
      expect(stubbedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/2BTZIqw0ntH9MvilQ3ewNY');

      const album2 = getAlbum('2BTZIqw0ntH9MvilQ3ewNK');
      expect(stubbedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/2BTZIqw0ntH9MvilQ3ewNK');
    });

    it('should return the correct data from the Promise', () => {
      promise.resolves({ album: 'name'});
      const album = getAlbum('2BTZIqw0ntH9MvilQ3ewNY');
      expect(album.resolveValue).to.be.eql({ album: 'name'});
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const album = getAlbums();
      expect(stubbedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const album = getAlbums(['2BTZIqw0ntH9MvilQ3ewNY', '2BTZIqw0ntH9MvilQ3ewNk']);
      expect(stubbedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=2BTZIqw0ntH9MvilQ3ewNY,2BTZIqw0ntH9MvilQ3ewNk');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name'});
      const albums = getAlbums(['2BTZIqw0ntH9MvilQ3ewNK', '2BTZIqw0ntH9MvilQ3ewNY']);
      expect(albums.resolveValue).to.be.eql({ album: 'name' });
    });
  });

  describe('getAlbumTracks', () => {

    it('should call fetch method', () => {
      const albumTrack = getAlbumTracks();
      expect(stubbedFetch).to.have.been.calledOnce;
    });

    it('should call the correct URL', () => {
      const albumTrack = getAlbumTracks('6akEvsycLGftJxYudPjmqK')
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK/tracks')
    });

    it('should return the correct data frin Promise', () => {
      promise.resolves({ album: 'name' });
      const tracks = getAlbumTracks('6akEvsycLGftJxYudPjmqK');
      expect(tracks.resolveValue).to.be.eql({ album: 'name' });
    });
  });
});