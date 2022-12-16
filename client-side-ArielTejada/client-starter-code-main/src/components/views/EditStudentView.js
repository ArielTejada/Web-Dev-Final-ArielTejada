import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
    textDecoration: 'none',
    fontFamily: 'Arial',
    fontSize: '3rem',
    backgroundColor: '#00A6ED',
    marginRight: '10%'
  }, 
  appBar: {
    backgroundColor: "#00A6ED",
    shadows: ["none"],
  },
  greeting: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  },
  links: {
    textDecoration: "none",
    display: 'flex',
    flexDirection: 'row',
  },
  formContainer:{  
    width: '45%',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: '5% auto 10% auto',
  },
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
  navButton: {
    width: '100%',
    height: '50%',
    margin: '0 10% 0 10%'
  }
}));

const EditStudentView = (props) => {
  // console.log(props)
  const { handleChange, handleSubmit } = props;
  const classes = styles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} color="#9ebe35">
            Campus Manager
          </Typography>

          <Link className={classes.links} to={"/"}>
            <Button
              variant="contained"
              color="white"
              className={classes.navButton}
            >
              Home
            </Button>
          </Link>

          <Link className={classes.links} to={"/campuses"}>
            <Button
              variant="contained"
              color="white"
              className={classes.navButton}
            >
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={"/students"}>
            <Button
              variant="contained"
              color="white"
              className={classes.navButton}
            >
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography
            style={{
              fontWeight: "bold",
              fontFamily: "Courier, sans-serif",
              fontSize: "20px",
              color: "#11153e",
            }}
          >
            Edit Student
          </Typography>
        </div>
        <form style={{ textAlign: "center" }} onSubmit={(e) => handleSubmit(e)}>
          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            First Name:{" "}
          </label>
          <input
            type="text"
            name="firstname"
            onChange={(e) => handleChange(e)}
            defaultValue={props.student.firstname}
            required
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Last Name:{" "}
          </label>
          <input
            type="text"
            name="lastname"
            onChange={(e) => handleChange(e)}
            defaultValue={props.student.lastname}
            required
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            campusId:{" "}
          </label>
          <input
            type="text"
            name="campusId"
            onChange={(e) => handleChange(e)}
            defaultValue={props.student.campusId}
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Email:{" "}
          </label>
          <input
            type="text"
            name="email"
            onChange={(e) => handleChange(e)}
            defaultValue={props.student.email}
            required
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>GPA: </label>
          <input
            type="double"
            name="gpa"
            onChange={(e) => handleChange(e)}
            defaultValue={props.student.gpa}
            required
          />
          <br />
          <br />

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default EditStudentView;
