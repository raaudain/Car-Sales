import React from 'react';
//import {connect} from "react-redux"
//import rootReducer from "../reducers"


const AdditionalFeature = props => {


  
 //console.log("addfeat", props)



  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" 
      onClick={()=>props.buyItem(props.feature)}
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;

