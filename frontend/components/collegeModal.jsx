const React = require('react');

const CollegeModal = React.createClass({
  componentDidMount: function () {
    setTimeout(function () {
      this.asyncName();
    }.bind(this), 1000);
  },

  asyncName: function () {
    var currentText = $("#collegeName").text() || "";
    if (currentText.length < this.props.college.name.length) {
      var nextLetter = this.props.college.name[currentText.length];
      var nextName = currentText + nextLetter;
      $("#collegeName").text(nextName);
      setTimeout(function () {
        this.asyncName();
      }.bind(this), 1000);
    }
  },

  render: function () {
    return (
      <div className="college-modal">
        <h2 id="collegeName"></h2>
        <br  />
        <a>{this.props.college.state}</a>
        <br  />
        <button
          type="button"
          onClick={this.props.closeModal}
          className="btn btn-sm btn-white">
          <i className="fa fa-plus"></i>
          Close
        </button>
      </div>
    )
  }
});

module.exports = CollegeModal;
