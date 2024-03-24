import React from "react";
import "./PropertyDetailsView.css";

const PropertyDetailsView = ({ PropertyDetailsById, onClose, scheme }) => {
  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <div className="mainDivForView">
          <div className="BasicInfoView">
            <div className="container">
              <form>
                <div className="details">
                  <div className="input">
                    <label>Property Type</label>
                    <select
                      name="PropertyType"
                      value={PropertyDetailsById.PropertyType}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="">Select Property Type</option>
                      <option value="plot">Plot</option>
                      <option value="flat">Flat</option>
                      <option value="house">House</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Negotiable</label>
                    <select
                      name="Negotiable"
                      value={PropertyDetailsById.Negotiable}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="">Select Negotiable</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Price</label>
                    <input
                      name="Price"
                      value={PropertyDetailsById.Price}
                      type="Number"
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Ownership</label>
                    <select
                      name="Ownership"
                      value={PropertyDetailsById.Ownership}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="">Select Ownership</option>
                      <option value="first">first</option>
                      <option value="second">second</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Property Age</label>
                    <select
                      name="PropertyAge"
                      placeholder="Select Property Age"
                      value={PropertyDetailsById.PropertyAge}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="">Select Property Age</option>
                      <option value="first]">first</option>
                      <option value="second">second</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Property Approved</label>
                    <select
                      name="PropertyApproved"
                      placeholder="Select Property Approved"
                      value={PropertyDetailsById.PropertyApproved}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="">Select Property Approved</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Property Description</label>
                    <input
                      name="PropertyDescription"
                      value={PropertyDetailsById.PropertyDescription}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Bank Loan</label>
                    <select
                      name="BankLoan"
                      value={PropertyDetailsById.BankLoan}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="">Select Bank Loan</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="PropertInfoView">
            <div className="container">
              <form>
                <div className="details">
                  <div className="input">
                    <label>Length</label>
                    <input
                      name="Length"
                      placeholder="Example : 1000"
                      value={PropertyDetailsById.Length}
                      type="Number"
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Breath</label>
                    <input
                      name="Breadth"
                      placeholder="Example : 1000"
                      value={PropertyDetailsById.Breadth}
                      type="Number"
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Total Area</label>
                    <input
                      name="Area"
                      placeholder="Example : 7500"
                      value={PropertyDetailsById.Area}
                      type="Number"
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Area Unit</label>
                    <select
                      name="AreaUnit"
                      placeholder="Area Unit"
                      value={PropertyDetailsById.AreaUnit}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="">--Select Area Unit--</option>
                      <option value="sq.m">sq.m</option>
                      <option value="sq.ft">sq.ft</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>No of BHK</label>
                    <select
                      name="NoOfBHK"
                      placeholder="Select No of BHK"
                      value={PropertyDetailsById.NoOfBHK}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="">--Select No of BHK--</option>
                      <option value="1">1BHK</option>
                      <option value="2">2BHK</option>
                      <option value="3">3BHK</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>No of Floor</label>
                    <select
                      name="NoOfFloor"
                      placeholder="Select No of Floor"
                      value={PropertyDetailsById.NoOfFloor}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="">--Select No of Floor--</option>
                      <option value="1">Ground</option>
                      <option value="2">G+1</option>
                      <option value="3">G+2</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Ownership</label>
                    <select
                      name="PropertyOwnership"
                      placeholder="Select Ownership"
                      value={PropertyDetailsById.Ownership}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="">--Select Ownership--</option>
                      <option value="first">first</option>
                      <option value="second">second</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Attached</label>
                    <select
                      name="Attached"
                      placeholder="Select Attached"
                      value={PropertyDetailsById.Attached}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="">--Select Attached--</option>
                      <option value="first">first</option>
                      <option value="second">second</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Western Toilet</label>
                    <select
                      name="WesternToilet"
                      placeholder="Select Western Toilet"
                      value={PropertyDetailsById.WesternToilet}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="">--Select Western Toilet--</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Furnished</label>
                    <select
                      name="Furnished"
                      placeholder="Select Furnished"
                      value={PropertyDetailsById.Furnished}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="">--Select Furnished--</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Car Parking</label>
                    <select
                      name="CarParking"
                      placeholder="Select Car Parking"
                      value={PropertyDetailsById.CarParking}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="">--Select Car Parking--</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Lift</label>
                    <select
                      name="Lift"
                      placeholder="Select Lift"
                      value={PropertyDetailsById.Lift}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="">--Select Lift--</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Electricity</label>
                    <input
                      name="Electricity"
                      placeholder="Example : 1phase"
                      value={PropertyDetailsById.Electricity}
                      type="Number"
                      min="1"
                      max="3"
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Facing</label>
                    <select
                      name="Facing"
                      placeholder="Select Facing"
                      value={PropertyDetailsById.Facing}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="">--Select Facing--</option>
                      <option value="East">East</option>
                      <option value="West">West</option>
                      <option value="North">North</option>
                      <option value="South">South</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="LocationInfoView">
            <div className="conatiner">
              <form>
                <div className="details">
                  <div className="input">
                    <label>Email</label>
                    <input
                      name="Email"
                      placeholder="Email"
                      value={PropertyDetailsById.Email}
                      type="text"
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    ></input>
                  </div>
                  <div className="input">
                    <label>City</label>
                    <select
                      name="City"
                      placeholder="Select City"
                      value={PropertyDetailsById.City}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Banglore">Banglore</option>
                      <option value="Kolkata">Kolkata</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Area</label>
                    <select
                      name="AreaType"
                      placeholder="Select Area"
                      value={PropertyDetailsById.AreaType}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="City Center">City Center</option>
                      <option value="Downtown">Downtown</option>
                      <option value="Suburb">Suburb</option>
                      <option value="Outskirts">Outskirts</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Pincode</label>
                    <input
                      name="Pincode"
                      placeholder="Pincode"
                      value={PropertyDetailsById.Pincode}
                      type="Number"
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Address</label>
                    <input
                      name="Address"
                      placeholder="Address"
                      value={PropertyDetailsById.Address}
                      type="text"
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Landmark</label>
                    <input
                      name="Landmark"
                      placeholder="Landmark"
                      value={PropertyDetailsById.Landmark}
                      type="text"
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Latitude</label>
                    <input
                      name="Latitude"
                      placeholder="Latitude"
                      value={PropertyDetailsById.Latitude}
                      type="number"
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Longitude</label>
                    <input
                      name="Longitude"
                      placeholder="Longitude"
                      value={PropertyDetailsById.Longitude}
                      type="number"
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    ></input>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="GeneralInfoView">
            <div className="conatiner">
              <form>
                <div className="details">
                  <div className="input">
                    <label>Name</label>
                    <select
                      name="Name"
                      placeholder="Owner"
                      value={PropertyDetailsById.Name}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="Owner">Plot</option>
                      <option value="flat">Flat</option>
                      <option value="house">House</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Mobile</label>
                    <input
                      name="Mobile"
                      placeholder="Enter Mobile Number"
                      value={PropertyDetailsById.Mobile}
                      type="Number"
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    ></input>
                  </div>
                  <div className="input">
                    <label>Posted by</label>
                    <select
                      name="PostedBy"
                      value={PropertyDetailsById.PostedBy}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Sales Type</label>
                    <select
                      name="SalesType"
                      value={PropertyDetailsById.SalesType}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="first">first</option>
                      <option value="second">second</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>Featured Package</label>
                    <select
                      name="FeaturedPackage"
                      placeholder="Please Select "
                      value={PropertyDetailsById.FeaturedPackage}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="first">first</option>
                      <option value="second">second</option>
                    </select>
                  </div>
                  <div className="input">
                    <label>PPD Package</label>
                    <select
                      name="PPD_Package"
                      placeholder="Please Select"
                      value={PropertyDetailsById.PPD_Package}
                      onChange={(e) => { 
                        // Handle the change event here
                        console.log("Selected value:", e.target.value);
                        // You can also update the PropertyDetailsById state here if needed
                      }}
                      {...(scheme === "views" ? { readOnly: true } : { required: true })}
                    >
                      <option value="first">first</option>
                      <option value="second">second</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {scheme === "views" ? <button type="button" onClick={(e) => onClose(e)}>Close</button>
        : <button type="button">Update</button>}
        
      </div>
    </div>
  );
};

export default PropertyDetailsView;
