import React, { Component } from 'react';

// Create Import File
import './index.scss';

import HomeParticles from './home/HomeParticles';
import ServiceDetails from "./elements/ServiceDetails";

import { BrowserRouter, Switch, Route  } from 'react-router-dom';

class Root extends Component{
  render(){
      return(
          <BrowserRouter basename={'/'}>
              <Switch>
                  <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeParticles}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/service-details`} component={ServiceDetails}/>

                  {/* Element Layot
                  <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service}/>
                  
                  <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails}/>


                  <Route exact path={`${process.env.PUBLIC_URL}/team`} component={Team}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/counters`} component={Counters}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/testimonial`} component={Testimonial}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/video-popup`} component={VideoPopup}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={Gallery}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/clint-logo`} component={Brand}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/progressbar`} component={ProgressBar}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/contact-form`} component={ContactForm}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/google-map`} component={GoogleMap}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/columns`} component={Columns}/>


                  
                  <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                  <Route component={error404}/> */}

              </Switch>
          </BrowserRouter>
      )
  }
}
export default Root