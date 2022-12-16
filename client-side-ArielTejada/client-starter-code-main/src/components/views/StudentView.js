/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  return (
    <div>
      <img 
        src="https://st.depositphotos.com/1915171/5078/v/600/depositphotos_50782941-stock-illustration-user-sign-icon-person-symbol.jpg" 
        alt="default student" 
        width="100" 
        height="100"
      ></img>
      <h1>Name: {student.firstname + " " + student.lastname}</h1>
      <h3>Campus: {student.campus.name}</h3>
      <h3>Email: {student.email}</h3>
      <h3>GPA: {student.gpa}</h3>
    </div>
  );
};

export default StudentView;