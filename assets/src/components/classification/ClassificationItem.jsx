var React = require('react');

var ClassificationItem = React.createClass({
  render: function() {
    var classification = this.props.classification;
    var iconClass = "fa fa-star-o";

    return (
      <div className="box">
        <span className="glyphicon glyphicon-remove delete" aria-hidden="true"></span>
        <i className={iconClass}></i>
        <span className="title">
          {classification.name}
        </span>
        <span className="phrase">Damos sdas asdasd asas </span>
      </div>
    );
  }
});

module.exports = ClassificationItem;
