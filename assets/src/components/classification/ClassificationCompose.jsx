var React = require('react'),
  {Row, Col, PageHeader} = require('react-bootstrap'),
  ClassificationForm = require('./ClassificationForm.jsx'),
  ClassificationList = require('./ClassificationList.jsx');

var ClassificationActions = require('../../actions/ClassificationActions'),
  ClassificationStore = require('../../stores/ClassificationStore');

function getClassificationState () {
  return {
    allClassifications: ClassificationStore.getAsJS('classifications')
  };
}

var ClassificationCompose = React.createClass({

  getInitialState: function () {
    return getClassificationState();
  },

  componentDidMount: function() {
    ClassificationActions.list();
    ClassificationStore.addWatch(this._onChange);
  },

  componentWillUnmount: function() {
    ClassificationStore.removeWatch(this._onChange);
  },

  // shouldComponentUpdate: function (nextProps, nextState) {
    // return !ClassificationStore.equals(this.state.allClassifications, nextState.allClassifications);
  // },

  render: function () {
    return (
      <Row>
        <Col lg={6}>
          <PageHeader>Clasificaciones</PageHeader>
          <ClassificationForm/>
        </Col>
        <Col lg={6}>
          <ClassificationList allClassifications={this.state.allClassifications}/>
        </Col>
      </Row>
    );
  },

  _onChange: function() {
    this.setState(getClassificationState());
  }

});

module.exports = ClassificationCompose;