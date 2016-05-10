const React = require('react');

const CollegeModal = React.createClass({
  getInitialState: function () {
    return { name: "" }
  },

  componentDidMount: function () {
    var self = this;

    if (this.state.name.length < this.props.college.name.length) {
      var nextLetter = this.props.college.name[this.state.name.length];
      var nextName = this.state.name + nextLetter;
      this.setState({name: nextName});
    }

    setTimeout(function () {
      self.componentDidMount();
    }, 1000);
  },

  render: function () {
    return (
      <div className="college-modal">
        <h2 id="collegeName">{this.state.name}</h2>
        <br  />
        <a>{this.props.college.state}</a>
        <br  />
        <button type="button" onClick={this.closeModal} className="btn btn-sm btn-white"> <i className="fa fa-plus"></i>Close</button>
      </div>
    )
  }
});

module.exports = CollegeModal;
