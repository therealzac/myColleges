const React = require('react'),
      EditProfile = require('./editProfile.jsx'),
      SessionStore = require('../stores/session.js'),
      LinkedStateMixin = require('react-addons-linked-state-mixin'),
      ApiUtil = require('../util/apiUtil.js');
      CollegeListItem = require('./collegelistitem.jsx'),
      CollegeModal = require("./collegeModal.jsx");

const Dashboard = React.createClass({
  contextTypes: {router: React.PropTypes.object.isRequired},

  mixins: [LinkedStateMixin],

  getInitialState: function () {
    const session = SessionStore.getSession();
    return {
      newCollegeName: "",
      session: session,
      appSearch: "",
      modalOpen: false,
      college: {}
    }
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  _onChange: function () {
    const session = SessionStore.getSession();
    if (!session.user) {
      this.context.router.push('/');
    } else {
      this.setState({session: session});
    }
  },

  openCollegeModal: function (college, e) {
    e.preventDefault();
    this.setState({modalOpen: true, college: college});
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

  modal: function () {
    if (this.state.modalOpen) {
      return (
        <CollegeModal college={this.state.college}/>
      )
    }
  },

  closeModal: function (e) {
    e.preventDefault();
    this.setState({modalOpen: false, college: {}});
  },

  render: function () {
    var self = this;
    return (
      <div className="wrapper wrapper-content animated fadeInRight">
        { this.modal() }
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
                                    <input type="text" className="form-control" placeholder="Search Colleges" valueLink={this.linkState('appSearch')}/>
                                </dl>
                            </td>
                            <td>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
              <br />
              {
                this.state.session.colleges.map(function (college, idx) {
                  var collegeName = college.name;
                  var appSearchLength = self.state.appSearch.length;
                  var partialCollegeName = collegeName.slice(0, appSearchLength);

                  if (partialCollegeName === self.state.appSearch) {
                    return (
                      <div onClick={self.openCollegeModal.bind(self, college)} key={idx}>
                        <CollegeListItem college={college} user={self.state.session.user} key={idx}/>
                      </div>
                    )
                  }
                })
              }
              <h3>Colleges Ive Applied to</h3>
              {
                this.state.session.user.colleges.map(function (college, idx) {
                    return (
                      <CollegeListItem college={college} user={self.state.session.user} key={idx}/>
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
