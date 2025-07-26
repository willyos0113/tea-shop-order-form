import "bulma/css/bulma.min.css";

export const App = () => {
  return (
    <>
      <div
        className="container"
        style={{ maxWidth: "600px", margin: "2rem auto", padding: "2rem" }}
      >
        <h1 className="title">Bulma form example</h1>

        <div>
          {/* input button for entering your name */}
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          {/* input button for entering your username */}
          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-success"
                type="text"
                placeholder="Text input"
                defaultValue="bulma"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
            <p className="help is-success">This username is available</p>
          </div>

          {/* input button for entering your Email */}
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-danger"
                type="email"
                placeholder="Email input"
                defaultValue="hello@"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          {/* select-options for indicating a subject */}
          <div className="field">
            <label className="label">Subject</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>

          {/* Textarea for message */}
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          {/* Checkbox for agreements */}
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" />I agree to the{" "}
                <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          {/* yes or no radio buttons */}
          <div className="field">
            <div className="control">
              <label className="radio">
                <input type="radio" name="question" />
                Yes
              </label>{" "}
              <label className="radio">
                <input type="radio" name="question" />
                No
              </label>
            </div>
          </div>

          {/* submit and cancel buttons */}
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-link is-light">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
