import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class ChatFlow extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7909923.js"></script>
        </Helmet>
      </div>
    );
  }
}

export default ChatFlow;
