const React = require('react'),
      CollegeList = require('./collegelist.jsx'),
      EditProfile = require('./editProfile.jsx'),
      SessionStore = require('../stores/session.js'),
      LinkedStateMixin = require('react-addons-linked-state-mixin'),
      ApiUtil = require('../util/apiUtil.js');

const Dashboard = React.createClass({
  contextTypes: {router: React.PropTypes.object.isRequired},

  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return { newCollegeName: "", session: { applications: [] } }
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  _onChange: function () {
    const session = SessionStore.getSession();
    if (!session.username) {
      this.context.router.push('/');
    } else {
      this.setState({session: session});
    }
  },

  addCollege: function (e) {
    e.preventDefault();

    const collegeApplication = {
      applicant_id: this.state.session.id,
      college_name: this.state.newCollegeName
    }

    ApiUtil.createCollegeApplication(collegeApplication);

    this.setState({newCollegeName: ""});
  },

  render: function () {
    return (
      <div className="wrapper wrapper-content animated fadeInRight">
              <div className="row">
                  <div className="col-md-9">


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
                                                  Add a college
                                              </a>
                                              </h3>

                                              <dl className="small m-b-none">
                                                  <input type="text" className="form-control" placeholder="College Name" valueLink={this.linkState('newCollegeName')}/>
                                                  <button type="button" onClick={this.addCollege} className="btn btn-sm btn-white"> <i className="fa fa-plus"></i>Add College</button>
                                              </dl>
                                          </td>
                                          <td>
                                          </td>
                                      </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>

                            {
                              this.state.session.applications.map(function (application, idx) {
                                return (
                                  <div className="ibox-content" key={idx}>
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
                                                          {application.college_name}
                                                      </a>
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
                              })
                            }


                        </div>
                      </div>
                    </div>
    )
  }
});

module.exports = Dashboard;
