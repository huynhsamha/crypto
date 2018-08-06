import React, { Component } from 'react';

export default class Adsense extends Component {

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div style={{ marginTop: '35px', marginBottom: '35px' }}>
        {/* huynhsamha.github.io/crypto/algorithm/ads-footer */}
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-2949659900148168"
          data-ad-slot="5289345117"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }
}
