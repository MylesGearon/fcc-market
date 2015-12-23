'use strict';

import React from 'react';

var StockList = React.createClass({

  deleteStock(name, e) {
    this.props.deleteStock(name);
  },

  render() {

    var createStockItem = function(stock) {
      return (
        <li key={stock.name} className="list-group-item">
          {stock.name}
          <span className="pull-right">
            <button onClick={this.deleteStock.bind(this, stock.name)} className="btn btn-xs btn-danger">
              <span className="glyphicon glyphicon-remove"></span>
            </button>
          </span>
        </li>
      );
    };

    return (
      <div>
        <ul className="list-group">
          {/*bind each StockItem to StockList for access to removeStock*/}
          {this.props.stocks.map(createStockItem.bind(this))}
        </ul>
      </div>
    );

  }
});

export default StockList;
