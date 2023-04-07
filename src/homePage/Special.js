import React from "react";
import Photo1 from '../asset/special1.jpg'
import Photo2 from '../asset/special2.jpg'
import Photo3 from '../asset/special3.jpg'

const Special = () => {
  return (
    <div className="SpecialContainer ">
      
    <div>
        <div className="specialTitleText">
          <h2>Special</h2>
          <button>Online Menu</button>
        </div>
        <div className="specialMain">
            <div>
                <img src={Photo1} className="specialImg"/>
                <h4>Product 1</h4>
                <p>Taste good</p>
            </div>
            <div>
                <img src={Photo2} className="specialImg"/>
                <h4>Product 2</h4>
                <p>Taste good</p>
            </div>
            <div>
                <img src={Photo3} className="specialImg"/>
                <h4>Product 3</h4>
                <p>Taste good</p>
            </div>
            
        </div>
     </div>
    </div>
  );
};

export default Special;
