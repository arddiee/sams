import React, { Component } from 'react'

// import './Style.css'
import "../Sass/main.scss"

//icon MUI
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import NotificationsIcon from '@material-ui/icons/Notifications';



class componentName extends Component {
  render() {
    return (
      <div className= "container">
            <header className= "header">
                    <div className="header__logo-box">
                        <img src={require('../../ToolBox/logo.png')} alt="logo" className="header__logo"/>
                    </div> 
                    <div className="header__text-box">
                      <h2 className="heading-primary">
                        <span className="heading-primary--main">WORKFORCE MANAGEMENT SOLUTIONS</span>
                        <span className="heading-primary--sub"> maximizing employees productivity and business profitability!</span>
                      </h2>
                      <a href="#" className="btn btn--blue btn--animated"> About Sams </a>
                    </div>
            </header>

            <main>
              <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                  About SAMS
                </h2>
                </div>

            <div className="row">
                <div className="col-1-of-2">
                  <h3 className="heading-tetiary u-margin-bottom-small">
                  Welcome to the SMART ATTENDANCE MANAGEMENT SOLUTION-SAMS
                  </h3> 
                    <p className="paragraph">
                A unique attendance management and Human Resources solution 
                designed by SAMS to integrate key HR operations digital attendance 
                record keeping, leave management, structured reporting and periodic individual
                 productivity evaluations into one functional unit. With SAMS, business owners, 
                 HR executives on small and large scale basis can automate their staff attendance 
                 management operations to run smoothly, with little human effort, with the option of 
                 manipulation foreclosed.
                    </p>
                    <a href="#" className="href btn-text">Learn more &rarr;</a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                      <img src={require("../../ToolBox/attendance.png")} alt="pic 1" className="composition__photo composition__photo--p1"/>
                      <img src={require("../../ToolBox/dashboard.jpg" )} alt="pic 2" className="composition__photo composition__photo--p2"/>
                      <img src={require("../../ToolBox/realtime.jpg")} alt="pic 3" className="composition__photo composition__photo--p3"/>
                    </div>

                </div>
            </div>

              </section>
              
              <section className="section-features">
              <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                  FEATURES
                </h2>
                </div>
                <div className="row">
                  <div className="col-1-of-3">
                   <div className="feature-box">
                     <AccessTimeIcon className="icon"/>
                      <h3 className="heading-tetiary u-margin-bottom-small"> Time Attendance </h3>
                       <p className="paragraph">
                         SAMS offers proven time and attendance software system 
                         and the best workforce management hardware technology.
                       </p>
                    </div>
                  </div>

                  <div className="col-1-of-3">
                   <div className="feature-box">
                     <EqualizerIcon className="icon"/>
                      <h3 className="heading-tetiary u-margin-bottom-small"> Real Time Reporting </h3>
                       <p className="paragraph">
                       Receive accurate timely employee work attendance information & 
                       make informed decisions & act with precision
                       </p>
                    </div>
                  </div>

                  <div className="col-1-of-3">
                   <div className="feature-box">
                     <NotificationsIcon className="icon"/>
                      <h3 className="heading-tetiary u-margin-bottom-small"> Scheduling </h3>
                       <p className="paragraph">
                       With just a few clicks of a button you can develop and manage entire 
                       schedules for your team
                       </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-1-of-3">
                   <div className="feature-box">
                     <AccessTimeIcon className="icon"/>
                      <h3 className="heading-tetiary u-margin-bottom-small"> Payroll integration </h3>
                       <p className="paragraph">
                       Keep track of your employees working hours and accurately process their payroll.
                       </p>
                    </div>
                  </div>

                  <div className="col-1-of-3">
                   <div className="feature-box">
                     <EqualizerIcon className="icon"/>
                      <h3 className="heading-tetiary u-margin-bottom-small"> Mobile Compatibility </h3>
                       <p className="paragraph">
                       Seamlessly monitor employees work attendance behavioural pattern while on the go with SAMS mobile app.
                       </p>
                    </div>
                  </div>

                  <div className="col-1-of-3">
                   <div className="feature-box">
                     <NotificationsIcon className="icon"/>
                      <h3 className="heading-tetiary u-margin-bottom-small"> Ease of Use </h3>
                       <p className="paragraph">
                       Smart, easy-to use interface giving HR managers the flexibility they need to manage scores of staff.
                       </p>
                    </div>
                  </div>
                </div>

              </section>

                <section className="section-why-use-sams">
                <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                  Make SAMS work for you
                </h2>
                </div>

                <div class="row">
                <div class="col-1-of-3">
                    <div className="card">
                        
                    </div>
                </div>
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
            </div>
            

                </section>

            </main>

      
        {/* <section class="grid-test">
            <div class="row">
                <div class="col-1-of-2">
                    Col 1 of 2
                </div>
                <div class="col-1-of-2">
                    Col 1 of 2
                </div>
            </div>

            <div class="row">
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
            </div>

            <div class="row">
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-2-of-3">
                    Col 2 of 3
                </div>
            </div>

            <div class="row">
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
            </div>

            <div class="row">
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-2-of-3">
                    Col 2 of 3
                </div>
            </div> 

            <div class="row">
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-3-of-3">
                    Col 3 of 3
                </div>
            </div>
        </section> */}
    


      </div>
    )
  }
}

export default componentName
