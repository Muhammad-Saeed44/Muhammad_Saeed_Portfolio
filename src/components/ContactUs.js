import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>WhatsApp  :
                <a style={{ cursor: "pointer",fontSize:"1.5rem" }} href="https://api.whatsapp.com/send?phone=3423154012&amp;text=Hi there! I have a question :)"
                  target="_blank"
                  rel="noreferrer"> {resumeData.contact}</a>
              </h4>
            </div>
          </aside>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Email  :
                <a style={{ cursor: "pointer",fontSize:"1.5rem" }} href="mailto:saeedgondal.a@gmail.com"
                      target="_blank"
                      rel="noreferrer"> {resumeData.email}</a>
              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}