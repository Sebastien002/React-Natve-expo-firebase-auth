import React, { Component } from 'react';
import ComponentView  from './view';

export default class Main extends Component  {
  static get defaultProps() {
    return {
      
    };
  }

  constructor(props) {
      super(props)
  }
  getSlides(){
    return [
      {
        image : null,
        title : 'Stop Browsing, Start Doing 1',
        description : 'Lorem ipsum dolor sit amet, tempor incididunt ut labore et. '
      },
      {
        image : null,
        title : 'Stop Browsing, Start Doing 2',
        description : 'Lorem ipsum dolor sit amet, tempor incididunt ut labore et. '
      },
      {
        image : null,
        title : 'Stop Browsing, Start Doing 3',
        description : 'Lorem ipsum dolor sit amet, tempor incididunt ut labore et. '
      }
    ]
  }
  render() {
    return (ComponentView.bind(this))();
  }
}
