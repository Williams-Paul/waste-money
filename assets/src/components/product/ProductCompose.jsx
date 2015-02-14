var React = require('react'),
  {
    Row,
    Col,
    PageHeader
  } = require('react-bootstrap');

var ProductForm = require('./ProductForm.jsx');
var ProductList = require('./ProductList.jsx');

var ProductStore = require('../../stores/ProductStore'),
  ClassificationStore = require('../../stores/ClassificationStore');

var ProductActions = require('../../actions/ProductActions'),
  ClassificationActions = require('../../actions/ClassificationActions');

/**
 * Retrive the current PRODUCT
 */
function getProductState() {
  return {
    allProducts: ProductStore.getAsJS('products')
  }
};

var ProductCompass = React.createClass({

  getInitialState: function() {
    return getProductState();
  },

  componentDidMount: function() {
    ProductActions.list();
    ProductStore.addWatch(this._onChange);
  },

  componentWillUnmount: function() {
    ProductStore.removeWatch(this._onChange);
  },

  render: function () {
    return (
      <Row>
        <Col lg={4} xs={4}>
          <PageHeader>Formulario</PageHeader>
          <ProductForm id="product-form"/>
        </Col>

        <Col lg={4} xs={4}>
          <PageHeader>Compras</PageHeader>
          <ProductList
            allProducts={this.state.allProducts}/>
        </Col>

        <Col lg={4} xs={4}>
          <PageHeader>Estadísticas</PageHeader>
        </Col>
      </Row>
    );
  },

  _onChange: function() {
    this.setState(getProductState());
  }
});

module.exports = ProductCompass;