var React = require('react');

var ClassificationItem = React.createClass({
  render: function() {
    var classification = this.props.classification;

    return (
      <li>{classification.name}</li>
    );
  }
});

module.exports = ClassificationItem;
