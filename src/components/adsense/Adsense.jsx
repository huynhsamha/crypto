import React, { Component } from 'react';

export default class Adsense extends Component {

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2949659900148168"
        data-ad-slot="2949659900148168"
        data-ad-format="auto"
      />
    );
  }
}
