var React = require('react');
var ReactPropTypes = React.PropTypes;
var ProductList = require('./ProductList.jsx');

var ProductCustomList = React.createClass({

  propTypes: {
    items: ReactPropTypes.object.isRequired
  },

  render: function() {
    var list = [];
    var items = this.props.items;

    if (!items) return null;

    Object.keys(items).forEach(function(name) {
      if(items[name] && items[name].length > 0) {
        list.push(
            <h5 key={name} className="page-header">
              <i className="fa fa-calendar"></i> {name}
            </h5>
        );

        list.push(<ProductList items={items[name]}/>);
      }
    });

    return (
      <div>
        {list}
      </div>
    );
  }
});

module.exports = ProductCustomList;
