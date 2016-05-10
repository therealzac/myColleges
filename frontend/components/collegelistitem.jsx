const React = require('react'),
      ApiUtil = require('../util/apiUtil.js');

const CollegeListItem = React.createClass({
  getInitialState: function () {
      return { buttonValue: "Add College" }
  },

  addCollege: function (e) {
    e.preventDefault();
    ApiUtil.addApplication(this.props.user.id, this.props.college.id);
    this.setState({buttonValue: "College Added"})
  },

  render: function () {
    return (
      <div className="ibox-content">
        <div className="table-responsive">
          <table className="table shoping-cart-table">
            <tbody>
              <tr>
                <td width="90">
                  <div className="cart-product-imitation">
                  </div>
                </td>
                <td className="desc">
                  <h3>
                    <a className="text-navy">
                      {this.props.college.name}
                    </a>
                    <button type="button" onClick={this.addCollege} className="btn btn-sm btn-white"> <i className="fa fa-plus"></i>{this.state.buttonValue}</button>
                  </h3>
                </td>
                <td>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
});

module.exports = CollegeListItem;
