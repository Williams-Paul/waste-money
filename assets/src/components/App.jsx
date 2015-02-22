var React = require('react'),
  Bootstrap = require('react-bootstrap'),
  {
    Grid,
    Row,
    Col,
    Nav,
    Navbar,
    NavItem,
    DropdownButton,
    MenuItem
  } = Bootstrap,
  Router = require('react-router'),
  {
    RouteHandler,
    Route
  } = Router;

var ReactRouterBootstrap = require('react-router-bootstrap')
  , { NavItemLink, ButtonLink } = ReactRouterBootstrap;

var App = React.createClass({

  render: function() {
   return (
     <Grid>
      <Row>
        <Navbar fixedTop={true} fluid={false}>
          <Nav>
            <NavItemLink to="initial">Inicio</NavItemLink>
            <NavItemLink to="classification">Clasificaciones</NavItemLink>
          </Nav>
        </Navbar>
      </Row>
      <Row>
        <Col lg={12} xs={12}>
          <RouteHandler/>
        </Col>
      </Row>
     </Grid>
   );
  }
});

module.exports = App;
