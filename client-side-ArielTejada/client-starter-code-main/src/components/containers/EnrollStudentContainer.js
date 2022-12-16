import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";

import EnrollStudentView from '../views/EnrollStudentView';
import { addStudentThunk } from '../../store/thunks';
import { fetchAllStudentsThunk, fetchStudentThunk, editStudentThunk } from '../../store/thunks';

class EnrollStudentContainer extends Component {
  // Initialize state
  constructor(props){
    super(props);
    this.state = {
      firstname: "", 
      lastname: "", 
      email: "",
      gpa: 0,
      gpaError: "",
      campusId: this.props.match.params.id, 
      redirect: false, 
      redirectId: null
    };
  }

  componentDidMount() {
    this.props.fetchAllStudents();
  }

  // Capture input data when it is entered
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Take action after user click the submit button
  handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.

    let student = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        campusId: this.props.match.params.id,
        email: this.state.email,
        gpa: this.state.gpa
    };

    // Add new student in back-end database
    let newStudent = await this.props.addStudent(student);

    // Update state, and trigger redirect to show the new student
    this.setState({
        firstname: "", 
        lastname: "", 
        campusId: null, 
        redirect: true, 
        redirectId: newStudent.id,
        email: "",
        gpa: 0.0
      });
} 


  // Unmount when the component is being removed from the DOM:
  componentWillUnmount() {
      this.setState({
        id: null,
        redirect: false, redirectId: null});
  }

  // Render new student input form
  render() {
    // Redirect to new student's page after submit
    if(this.state.redirect) {
      return (<Redirect to={`/campus/${this.props.match.params.id}`}/>)
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        <EnrollStudentView 
          campusId={this.props.match.params.id}
          handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit} 
               
        />
      </div>          
    );
  }
}

const mapState = (state) => {
    return {
      student: state.student,  // Get the State object from Reducer "student"
      allStudents: state.allStudents
    };
  };

const mapDispatch = (dispatch) => {
    return({
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
        editStudent: (id, student) => dispatch(editStudentThunk(id, student)),
        addStudent: (student) => dispatch(addStudentThunk(student)),
    })
}

export default withRouter(connect(mapState, mapDispatch)(EnrollStudentContainer));