var React = require('react'),
  {Grid, Row, Col, PageHeader, Button, Input} = require('react-bootstrap');

var DynamicDate = React.createClass({

  getInitialState: function() {
    return {
      isChecked: false
    };
  },

  render: function() {

    var isChecked = this.state.isChecked;

    return(
      <Input
        label="Fecha de Registro"
        help="Elige auto para la fecha actual." wrapperClassName="wrapper">
        <Row>
          <Col xs={4}>
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"/> Auto
              </label>
            </div>
          </Col>
          <Col xs={8}>
            <div className="form-group">
              <input
                type="date"
                className="form-control"
                disabled={isChecked}/>
            </div>
          </Col>
        </Row>
      </Input>
    );
  }
});

module.exports = DynamicDate;