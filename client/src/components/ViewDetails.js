import React from 'react'

export const ViewDetails = () => {
 
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
    
}
