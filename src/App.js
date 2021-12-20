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
          // curl https://canvas.ubc.ca/api/v1/users/self -H “Authorization: Bearer $token”
          fetch(`https://canvas.instructure.com/api/v1/courses?access_token=${token}`, {
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
