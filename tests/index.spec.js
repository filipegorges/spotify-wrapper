import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('SpotifyWrapper Library', () => {
  it('should create an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceof(SpotifyWrapper);
  });

  it('should receive apiURL as an option', () => {
    const spotify = new SpotifyWrapper({
      apiURL: 'blabla',
    });

    expect(spotify.apiURL).to.be.equal('blabla');
  });

  it('should use the default apiURL if not provided', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive token as an option', () => {
    const spotify = new SpotifyWrapper({
      token: 'foo',
    });

    expect(spotify.token).to.be.equal('foo');
  });

  describe('request method', () => {
    let stubbedFetch;

    beforeEach(() => {
      stubbedFetch = sinon.stub(global, 'fetch');
      stubbedFetch.resolves({ json: () => {} });
    });

    afterEach(() => {
      stubbedFetch.restore();
    });

    it('should have request method', () => {
      const spotify = new SpotifyWrapper({});

      expect(spotify.request).to.exist;
    });

    it('should call fetch when request', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo',
      });

      spotify.request('url');

      expect(stubbedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the right URL passed', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo',
      });

      spotify.request('the right URL');
      expect(stubbedFetch).to.have.been.calledWith('the right URL');
    });

    it('should call fetch with the right headers passed', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo',

      });

      const headers = {
        headers: {
          Authorization: `'Bearer foo'`,
        },
      };

      spotify.request('url');
      expect(stubbedFetch).to.have.been.calledWith('url', headers);
    });
  });

});
