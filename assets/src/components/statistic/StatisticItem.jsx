var React = require('react');
var ClassificationActions = require('../../actions/ClassificationActions');

var StatisticItem = React.createClass({
  render: function() {
    var classification = this.props.classification;
    var iconClass = "fa fa-star-o";

    return (
      <div className="box">
        <span
          className="glyphicon glyphicon-remove delete"
          aria-hidden="true"
          onClick={this._onDestroyClick}></span>

        <i className={iconClass}></i>


        <span className="title">
          <span class="prefix">s/.</span>
          130.00
        </span>


        <span className="phrase">{classification.description}</span>
      </div>
    );
  },

  _onDestroyClick: function () {
    ClassificationActions.destroy(this.props.classification.id);
  }
});

module.exports = StatisticItem;
