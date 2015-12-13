'use strict';

import React from 'react';

var Header = React.createClass({
  render: function() {
    return (
      <div className='page-header'>
        <div className='container header'>
          <h1>Stocks!</h1>
          <p>Add and remove stocks below by their symbol names, they're live-updated across browsers!
          </p>
        </div>
      </div>
    );
  }
});

export default Header;