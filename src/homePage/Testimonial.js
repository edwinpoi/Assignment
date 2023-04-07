import React from "react";
import Photo1 from '../asset/human1.jpg'
import Photo2 from '../asset/human2.jpg'
import Photo3 from '../asset/human3.jpg'
import Photo4 from '../asset/human4.jpg'

const Testimonial = () => {
  return (
    <div className="TestContainer ">
     <div>
        <div className="testTitle">
          <h2>Testimonials</h2>

        </div>
        <div className="testMain">
            <div>
                <img src={Photo1} className="testImg"/>
                <div>
                <h4>Sara</h4>
                <p>Rating : 5/5</p>
                </div>
            </div>
            <div>
                <img src={Photo2} className="testImg"/>
                <h4>Peter</h4>
                <p>Rating: 4.5/5</p>
            </div>
            <div>
                <img src={Photo3} className="testImg"/>
                <h4>Tom</h4>
                <p>Rating: 4.75/5</p>
            </div>
            <div>
                <img src={Photo4} className="testImg"/>
                <h4>Matthew</h4>
                <p>Rating: 4/5</p>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Testimonial;
