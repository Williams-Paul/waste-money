var React = require('react');
var StatisticActions = require('../../actions/Statistic');

var StatisticItem = React.createClass({
  render: function() {
    var data = this.props.data;
    var iconClass = "fa fa-star-o";

    return (
      <div className="col-xs-6">
        <div className="box">
          <i className={iconClass}></i>

          <span className="title">
            <span className="prefix">s/.</span> {data.total}
          </span>

          <div className="sub-title">{data.name}</div>
        </div>
      </div>
    );
  },
});

module.exports = StatisticItem;
