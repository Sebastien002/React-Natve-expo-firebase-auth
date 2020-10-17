import React from "react";
import CustomCard from './custom-card';


/**
 * View
 * @returns {XML}
 */
var view = function () {
  // switch(this.getType()){
  //     case 'list':
  //         return <ListCard {...this.props}/>
  //     case 'image':
  //         return <ImageCard {...this.props}/>
  //     default :
          return <CustomCard {...this.props}/>

  //}
};
module.exports = view;
