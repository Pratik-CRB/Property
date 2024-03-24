import React, { useState } from "react";
import "./Body.css";
import { SideMenu } from "./SideMenu";
import { Header } from "./Header";
import AddProperty from "./AddProperty";
import { BasicInfo } from "./InputForm/BasicInfo";
import { Table } from "./Table";

export const Body = () => {
  return (
    <div className="mainPageContent">
      <SideMenu />
      <div className="rightSideContents">
        <Header />
        <div className="Form-Content">
          <AddProperty /> 
        </div> 
      </div>
    </div>
  );
};
