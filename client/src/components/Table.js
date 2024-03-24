import React, { useEffect, useState } from "react";
import "./Table.css";


export const Table = () => {
  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/Property/all", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((response) => setPropertyList(response));
  }, []);
  const getPropertDetails = (e)=>{
    let tr = e.target.closest('tr');
    let td = tr.querySelector('#propertyId');
    let propertyId = td.textContent;
  
    console.log(propertyId);
  };
  return (
    <>
      <div className="table">
        <table className="table-head">
          <thead className="head">
            <tr>
              <th>PPD ID</th>
              <th>Image</th>
              <th>Property</th>
              <th>Contact</th>
              <th>Area</th>
              <th>Views</th>
              <th>Status</th>
              <th>Days Left</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
          {propertyList.map((val, key) => {
            return (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>
                        <img src="../../public/img/property1.jpg" alt="img" />
                      </td>
                      <td style={{display: "none"}} id="propertyId">{val._id}</td>
                      <td>{val.PropertyType}</td>
                      <td>{val.Mobile}</td>
                      <td>{val.Area}</td>
                      <td>02</td>
                      <td>Sold</td>
                      <td>03</td>
                      <td>
                        <span><i className="fa-regular fa-eye" id="viewPropertyDetails" onClick={getPropertDetails}></i></span>
                        <span><i className="fa-solid fa-pencil"></i></span>
                      </td>
                    </tr>
            );
          })}

          </tbody>
        </table>
      </div>
      
    </>
  );
};
