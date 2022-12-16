/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  return (
    <div>
      <h1>Name: {student.firstname + " " + student.lastname}</h1>
      <img 
        src={student.imageUrl}
        alt="student image" 
        width="15%" 
        height="15%"
      ></img>
      <h3>Campus: {student.campus.name}</h3>
      <h3>Email: {student.email}</h3>
      <h3>GPA: {student.gpa}</h3>

      <Link to={`/editstudent/${student.id}`}>
          <button>Edit Student</button>
      </Link>

    </div>
  );
};

export default StudentView;