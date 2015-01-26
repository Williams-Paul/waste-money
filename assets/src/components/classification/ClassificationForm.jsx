var React = require('react'),
  jQuery = require('../../config/jquery-extends'),
  Bootstrap = require('react-bootstrap'),
  {Grid, Row, Col, PageHeader, Button, Input} = Bootstrap;

var ClassificationActions = require('../../actions/ClassificationActions');

var ClassificationForm = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          label="Nombre"
          name="name"/>
        <Input
          type='submit'
          value='Submit button'/>
      </form>
    );
  },
  handleSubmit: function(e) {
    e.preventDefault();

    var $form = jQuery('form');
    var data = $form.serializeObject();

    ClassificationActions.create(data);
    $form[0].reset();
  }
});

module.exports = ClassificationForm;
