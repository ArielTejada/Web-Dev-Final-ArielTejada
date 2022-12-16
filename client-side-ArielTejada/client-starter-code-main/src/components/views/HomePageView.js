/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
const HomePageView = () => {
  // Render Home page view
  return (
    <div>
      <h1>Welcome To The Campus Manager Home Page!</h1>
      <img 
        src="https://media.cntraveler.com/photos/631b4fe1f2f54501e692c5d3/master/pass/University%20of%20Michigan_GettyImages-470656298.jpg" 
        alt="campus image" 
        width="70%" 
        height="70%"
      ></img>
    </div>
  );    
}

export default HomePageView;