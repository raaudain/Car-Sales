import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {

  //console.log("addfeature", Object.values(props.additionalFeatures))
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            //console.log("yo",item)
            <AdditionalFeature 
            key={item.id} 
            buyItem={props.buyItem} 
            feature={item} 
            />
      ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
