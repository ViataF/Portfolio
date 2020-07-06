import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }
  render() {
    const { status } = this.state;
    return (
      <div className="contact">
        <h2 className="contact">Contact me</h2>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/mgennzln"
          method="POST"
        >
          <label>Email:</label>
          <input type="email" name="email" />
          <label>Message:</label>
          <input type="text" name="message" />
          {status === "SUCCESS" ? (
            <p>Thanks!, Please reload to submit another response</p>
          ) : (
            <button>Submit</button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
        <div class="col s12">
          <div class="card black">
            <div class="card-content white-text">
              <span class="card-title">Contact details</span>
              <div class="card-action">
                <a
                  href="https://github.com/ViataF"
                  className="waves-effect waves-light btn-large  grey darken-3"
                >
                  <i className="fa fa-github" /> Github account
                </a>
                <a
                  href="https://za.linkedin.com/in/viata-fredericks-2580151ab"
                  className="waves-effect waves-light btn-large  light-blue darken-4 "
                >
                  <i className="fa fa-linkedin" /> Linkedin account
                </a>
                <a
                  href="https://gmail.com"
                  className="waves-effect waves-light btn-large  deep-orange darken-3"
                >
                  <i className="fa fa-google" /> Gmail account
                </a>
                <a
                  href="/#"
                  className="waves-effect waves-light btn-large  red darken-3"
                >
                  Phone: 0812379785
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
export default Contact;
