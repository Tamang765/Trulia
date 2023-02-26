import React from "react";
import "./Footerlast.scss";
import footerimg from "../../media/footer.JPG"
const Footerlast = () => {
  return (
    <div className="container footerlast">
      <div className="licence">
        <p>
          Trulia is a registered Trademark of Zillow, Inc. Zillow, Inc. holds
          real estate brokerage licenses in all 50 states and D.C. and Zillow
          (Canada) Inc. holds real estate brokerage licenses in multiple
          provinces.
        </p>

      </div>
      <div className="trulia-links">
          <a href="">
            § 442-H New York Standard Operating Procedures New York Fair Housing
            Notice
          </a>

          <span>TREC:<a href="">
             Information about brokerage services, Consumer
            protection notice California DRE #1522444
          </a>
          </span>
          <a href="">Contact Zillow, Inc Brokerage</a>
        </div>
      <div className="zillow-group d-flex">
<span>Zillow Group ® Other Brands:</span> 

          <li>Zillow</li>
          <li>Zillow</li>
          <li>Zillow</li>
          <li>Zillow</li>
      </div>
      <div className="zillow-group">
        <p>
          Trulia is a registered Trademark of Zillow, Inc. Zillow, Inc. holds
          real estate brokerage licenses in all 50 states and D.C. and Zillow
          (Canada) Inc. holds real estate brokerage licenses in multiple
          provinces.
        </p>
        <span>Copyright © 2023 Trulia, LLC. All rights reserved. Equal Housing Opportunity. Have a Question? Visit our Help Center to find the answer.</span>
        <div><img src={footerimg} alt="" /></div>
      </div>
    </div>
  );
};

export default Footerlast;
