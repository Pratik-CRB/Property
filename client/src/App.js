import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { Body } from "./components/Body";
import { SignIn } from "./components/SignIn.js";
import { Image } from "./components/Image";
import AddProperty from "./components/AddProperty";
import { BasicInfo } from "./components/InputForm/BasicInfo.js";
import { PropertyDetails } from "./components/InputForm/PropertyDetails.js";
import { GeneralInfo } from "./components/InputForm/GeneralInfo.js";
import { LocationInfo } from "./components/InputForm/LocationInfo.js";
import { Header } from "./components/Header";
import { Stepper } from "./components/Stepper.js";
import { Table } from "./components/Table.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Body" element={<Body />} />
        <Route path="/" element={<Table/>} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        {/* <Route path="/AddProperty" element={<AddProperty />} />
        <Route path="/BasicInfo" element={<BasicInfo />} />
        <Route path="/PropertyDetails" element={<PropertyDetails />} />
        <Route path="/GeneralInfo" element={<GeneralInfo />} />
        <Route path="/LocationInfo" element={<LocationInfo />} /> */}
        <Route path="/Image" element={<Image />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
