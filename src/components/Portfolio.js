import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of Our Projects.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <a target='_blank' href={`${item.url}`}>
                      <div className="columns portfolio-item"  style={{width:"25rem",height:"22rem"}} >
                        <div className="item-wrap" style={{width:"22rem",height:"22rem"}} >
                          <img src={`${item.imgurl}`} style={{width:"25rem",height:"22rem"}} />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  )
                })
              }
            </div>
            <h1>Check Out Other Projects on this Github account.</h1>
          <center> <a  target="_blank" href='https://github.com/sudo-umair' style={{cursor:"pointer"}}>https://github.com/sudo-umair</a></center>
          </div>
        </div>
      </section>
    );
  }
}