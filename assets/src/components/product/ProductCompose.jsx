var React = require('react'),
  {
    Row,
    Col,
    PageHeader
  } = require('react-bootstrap');

var ProductForm = require('./ProductForm.jsx');
var Product = require('./Product.jsx');
var StatisticCompose = require('../statistic/StatisticCompose.jsx');

var ProductCompass = React.createClass({
  render: function () {
    return (
      <Row>
        <Col lg={3} xs={3}>
          <PageHeader>Formulario</PageHeader>
          <ProductForm id="product-form"/>
        </Col>

        <Col lg={3} xs={3}>
          <PageHeader>Compras</PageHeader>
          <Product/>
        </Col>

        <Col lg={6} xs={6}>
          <PageHeader>Estadísticas</PageHeader>
          <Row>
            <StatisticCompose/>
          </Row>
        </Col>
      </Row>
    );
  }
});

module.exports = ProductCompass;
