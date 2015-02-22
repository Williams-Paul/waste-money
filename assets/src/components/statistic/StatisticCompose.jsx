var React = require('react')
  , StatisticList = require('./StatisticList.jsx')
  , StatisticActions = require('../../actions/Statistic')
  , StatisticStore = require('../../stores/Statistic')
  , ProductStore = require('../../stores/ProductStore');

function getStatisticState() {
  return {
    statistics: StatisticStore.getAsJS('statistics')
  };
}

var StatisticCompose = React.createClass({

  getInitialState: function() {
    return getStatisticState();
  },

  componentDidMount: function() {
    StatisticStore.addWatch(this._onChange);
    ProductStore.addWatch(this._onChangeProduct);
  },

  componentWillUnmount: function() {
    StatisticStore.removeWatch(this._onChange);
    ProductStore.removeWatch(this._onChangeProduct);
  },

  render: function() {
    return(
      <StatisticList items={this.state.statistics}/>
    );
  },

  _onChange: function() {
    this.setState(getStatisticState());
  },

  _onChangeProduct: function() {
    StatisticActions.list();
  }

});

module.exports = StatisticCompose;
