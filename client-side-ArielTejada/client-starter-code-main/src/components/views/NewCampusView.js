import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  campus: {
    textAlign: "center",
    color: "white",
    backgroundColor: "#45A29E",
    height: "auto",
    width: "400px",
    borderRadius: "40px",
  },
  campusButton: {
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "20px",
    backgroundColor: "#45A29E",
    borderRadius: "40px",
  },
  title: {
    textAlign: "left",
    fontType: "bold",
    fontFamily: "Georgia, serif",
    fontSize: "3rem",
    color: "#66FCF1",
    marginRight: '10%'
  },
  appBar: {
    backgroundColor: "#1F2833",
    shadows: ["none"],
  },
  greeting: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
    fontFamily: "Georgia, serif",
    width: "0%",
    margin: "auto",
  },
  links: {
    textDecoration: "none",
    display: 'flex',
    flexDirection: 'row',
  },
  formContainer: {
    marginTop: "5%",
    width: "45%",
    backgroundColor: "#f0f0f5",
    borderRadius: "5px",
    margin: "auto",
  },
  customizeAppBar: {
    backgroundColor: "#11153e",
    shadows: ["none"],
  },
  formTitle: {
    backgroundColor: "#c5c8d6",
    marginBottom: "15px",
    textAlign: "center",
    borderRadius: "5px 5px 0px 0px",
    padding: "3px",
  },
}));

const NewCampusView = (props) => {
  const { handleChange, handleSubmit } = props;
  const classes = styles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="#9ebe35">
            Campus Manager
          </Typography>

          <Link className={classes.links} to={"/"}>
            <Button
              variant="contained"
              color="white"
              style={{ marginRight: "10px", height: "60px", width: "200px" }}
            >
              Home
            </Button>
          </Link>

          <Link className={classes.links} to={"/campuses"}>
            <Button
              variant="contained"
              color="white"
              style={{ marginRight: "10px", height: "60px", width: "200px" }}
            >
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={"/students"}>
            <Button
              variant="contained"
              color="white"
              style={{ marginRight: "10px", height: "60px", width: "200px" }}
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
            Add Campus
          </Typography>
        </div>

        <form style={{ textAlign: "center" }} onSubmit={(e) => handleSubmit(e)}>
          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Campus Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            required
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Campus Address:{" "}
          </label>
          <input
            type="text"
            name="address"
            onChange={(e) => handleChange(e)}
            required
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Campus Description:{" "}
          </label>
          <input
            type="text"
            name="description"
            onChange={(e) => handleChange(e)}
            required
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Campus Image URL:{" "}
          </label>
          <input
            type="text"
            name="imageUrl"
            onChange={(e) => handleChange(e)}
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

export default NewCampusView;
