import './App.css';
const axios = require('axios');

const App = () => {
  const token = process.env.REACT_APP_CANVAS_INFRASTRUCTURE_API_KEY;
  console.log("token: ", token)
  return (

    <div className="App">
      <a href={"https://canvas.instructure.com/api/v1/courses?access_token=" + token}>GO here</a>
      <button
        style={{ marginTop: "100px" }}
        onClick={() => {
          console.log("Api button clicked");
          const config = {
            headers: { Authorization: `Bearer ${token}` }
          };
          const bodyParameters = {
            key: "value"
          };
          // axios.post(
          //   `https://canvas.instructure.com/api/v1/courses?access_token=${token}`,
          //   config,
          //   bodyParameters
          // )
          //   .then(function (res) {
          //     console.log(res);
          //   })
          //   .catch(function (err) {
          //     console.log("error in canvas api request", err);
          //   }).then(function () {
          //   })
          // curl https://canvas.ubc.ca/api/v1/users/self -H “Authorization: Bearer $token”
          fetch(`https://canvas.instructure.com/api/v1/courses?access_token=${token}`, {
            // body: "{\"id\":\"3970a1b0-6e27-448a-adfc-0083db15b2fb\", \"tokens\":{\"design_token1\":\"Hi\",\"design_token2\":\"Hello\",\"design_token3\":\"World\",\"subject_token1\":\"XYZ\"}, \"recipient\":\"james@sample.com\"}",
            // headers: {
              // Accept: "application/json",
              // "Content-Type": "application/json",
              // Token: "sfg999666t673t7t82"
            // },
            method: "GET"
          }).catch(e => {
            console.log(e);
        });
        }}
      >Call to canvas</button>
      {/* out indent Shift + Option + F. */}
      <header className="k">Site Header</header>
    </div>
  );
}

export default App;
