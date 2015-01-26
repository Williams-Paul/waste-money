var React = require('react');
var ReactPropTypes = React.PropTypes;
var ClassificationItem = require('./ClassificationItem.jsx');

var ClassificationList = React.createClass({
  propTypes: {
    allClassifications: ReactPropTypes.object.isRequired
  },
  render: function() {

    if (this.props.allClassifications && Object.keys(this.props.allClassifications).length < 1) {
      return null;
    }

    var allClassifications = this.props.allClassifications;
    var classifications = [];

    for (var key in allClassifications) {
      classifications.push(<ClassificationItem key={key} classification={allClassifications[key]} />);
    }

    return (
      <ul id="classification-list">{classifications}</ul>
    );
  }
});

module.exports = ClassificationList;