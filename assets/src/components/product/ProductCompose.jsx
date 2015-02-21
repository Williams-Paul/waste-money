var React = require('react'),
  {
    Row,
    Col,
    PageHeader
  } = require('react-bootstrap');

var ProductForm = require('./ProductForm.jsx');
var ProductList = require('./ProductList.jsx');
var StatisticCompose = require('../statistic/StatisticCompose.jsx');

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
        <Col lg={3} xs={3}>
          <PageHeader>Formulario</PageHeader>
          <ProductForm id="product-form"/>
        </Col>

        <Col lg={3} xs={3}>
          <PageHeader>Compras</PageHeader>
          <ProductList
            allProducts={this.state.allProducts}/>
        </Col>

        <Col lg={6} xs={6}>
          <PageHeader>Estadísticas</PageHeader>
          <Row>
            <StatisticCompose/>
          </Row>
        </Col>
      </Row>
    );
  },

  _onChange: function() {
    this.setState(getProductState());
  }
});

module.exports = ProductCompass;
