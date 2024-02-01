import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/saeed.jpeg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br />
                  <span>{resumeData.address}</span>
                  <br />
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=3423154012&amp;text=Hi there! I have a question :)"
                  >
                    {resumeData.contact}
                  </a>
                  <br />
                 <a target="_blank" href="https://www.fiverr.com/m_saeed44?up_rollout=true"> <button style={{marginTop:"2rem"}}>Fiver Account</button></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
