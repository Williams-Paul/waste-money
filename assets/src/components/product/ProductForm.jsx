var React = require('react'),
  ReactPropTypes = React.PropTypes,
  jQuery = require('../../config/jquery-extends'),
  Bootstrap = require('react-bootstrap'),
  {Grid, Row, Col, PageHeader, Button, Input} = Bootstrap;

var ClassificationActions = require('../../actions/ClassificationActions'),
  ProductActions = require('../../actions/ProductActions'),
  ClassificationStore = require('../../stores/ClassificationStore');

var DynamicSelect = require('./DynamicSelect.jsx'),
  DynamicDate = require('./DynamicDate.jsx');

function getProductFormState() {
  return {
    classifications: ClassificationStore.getAsJS('classifications'),
    amount: '0',
    price: '0.00'
  };
}

var ProductForm = React.createClass({

  porpTypes: {
    id: ReactPropTypes.string.isRequired
  },

  getInitialState: function () {
    return getProductFormState();
  },

  componentDidMount: function() {
    ClassificationActions.list();
    ClassificationStore.addWatch(this._onChange);
  },

  componentWillUnmount: function() {
    ClassificationStore.removeWatch(this._onChange);
  },

  render: function() {

    var {classifications, ...otherStates}  = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        {...this.props}>
        <Input
          type="text"
          label="Nombre"
          name="name"/>

        <DynamicSelect
          label='Clasificación'
          name="classification"
          items={classifications}/>

        <Input
          type="select"
          label='Unidad'
          defaultValue="unidad"
          name="unit">
          <option value="unidad">Unidad</option>
          <option value="kilo">Kilo</option>
          <option value="litro">Litro</option>
        </Input>

        <Row>
          <Col xs={8}>
            <Input
              type="text"
              addonBefore="s/."
              label="Precio Unitario"
              name="unitPrice"
              onBlur={this._getCost}
              onChange={this._onChangePrice}
              onKeyDown={this._onKeyDown}
              defaultValue={this.state.price}/>
          </Col>
          <Col xs={4}>
            <Input
              type="text"
              label="Cantidad"
              name="amount"
              onBlur={this._getCost}
              onChange={this._onChangeAmount}
              onKeyDown={this._onKeyDown}
              defaultValue={this.state.amount}/>
          </Col>
        </Row>

        <Input
          type="text"
          addonBefore="s/."
          label="Precio Total"
          name="price"/>

        <DynamicDate/>

        <Input
          type='submit'
          value='Guardar'/>
      </form>
    );
  },
  handleSubmit: function(e) {
    e.preventDefault();

    var $form = jQuery('form');
    var data = $form.serializeObject();

    ProductActions.create(data);
    $form[0].reset();
  },

  _onChange: function () {
    this.setState(getProductFormState());
  },

  _onChangePrice: function (event) {
    this.setState({
      price: event.target.value
    });

    console.log(this.state.price);
  },

  _onChangeAmount: function (event) {
    this.setState({
      amount: event.target.value
    });

    console.log(this.state.amount);
  },

  _onKeyDown: function () {
    console.log("key-down: ", this.state);
  },

  _getCost: function () {

    var $form = document.getElementById(this.props.id);
    var amount = parseFloat(this.state.amount);
    var price = parseFloat(this.state.price);
    var totalPrice = amount * price;

    $form.querySelector('[name="price"]').value = totalPrice.toFixed(2);
  }

});

module.exports = ProductForm;
