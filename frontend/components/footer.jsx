const React = require('react');

const Footer = React.createClass({
  render: function () {
    return (
      <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-center m-t-lg m-b-lg">
              <p><strong>&copy; 2016 myCOLLEGES</strong><br/></p>
          </div>
      </div>
    )
  }
});

module.exports = Footer;
