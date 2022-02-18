import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentUser } from "../../actions/authActions";
import {Link} from 'react-router-dom';


// const clean = require("../../img/cleaning.jpg");
const student = require("../../img/student.jpg");
const staff = require("../../img/staff.jpeg");
const bedRoom = require("../../img/bedroom.jpeg");
class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div className="mid container">
        <div className="text-center" style={{ fontSize: "25px" }}>
          Welcome {user.name}!
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>

          <div className="card hoverable" style={{ width: "18rem", hover: '', height: '22rem' }}>
            <img src={student} className="card-img-top" alt="Cleaning" />
            <div className="card-body" style={{ height: '10rem' }}>
              <h5 className="card-title">Student</h5>
              <Link to="/student" className="card-text">
                Add new Student and allot Room or Check Info
              </Link>
            </div>
          </div>

          <div className="card" style={{ width: "18rem", hover: '', height: '22rem' }}>
            <img src={bedRoom} className="card-img-top" alt="Cleaning" />
            <div className="card-body">
              <h5 className="card-title">Room Repair/Cleaning Status</h5>
              <Link to="/block">
                Add Room Repair/Cleaning or Check Info
                </Link>
            </div>
          </div>

          <div className="card" style={{ width: "18rem", hover: '', height: '22rem' }}>
            <img src={staff} className="card-img-top" alt="Cleaning" />
            <div className="card-body">
              <h5 className="card-title">Staff Info</h5>
              <Link to="/staff">
                Add more Staff or Check their info
              </Link>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  // getCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
  ,
  { getCurrentUser }
)(Dashboard);
