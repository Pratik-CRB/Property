const express = require("express");
const router = express.Router();
const Property = require("../models/Property");
const mongoose = require("mongoose");
const path = require("path");
const multer = require("multer");

mongoose.connect("mongodb://127.0.0.1:27017/Property").then(() => {
  console.log("Connected");
});
const localStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./Images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: localStorage });
router.post("/addProperty", async (req, res) => {
    const {
        PropertyType,Negotiable,Price,Ownership,
        PropertyAge,PropertyApproved,PropertyDescription,BankLoan,
        Length,Breadth,Area,AreaUnit,NoOfBHK,NoOfFloor,PropertyOwnership,
        Attached,WesternToilet,Furnished,CarParking,Lift,Electricity,
        Facing,Name,Mobile,PostedBy,SalesType,FeaturedPackage,PPD_Package,
        Email,City,AreaType,Pincode,Address,Landmark,Latitude,Longitude
    } = req.body;
    console.log(req.file, req.body)
    let PropertyImage="abc";
    if (req.file){
        PropertyImage = "/Images/"+ req.file.filename;
    }
  try {
    // const data = JSON.parse(req.body.data);
    // const propertyData = {
    //   ...data,
    //   PropertyImage: req.file.path,
    // };
    const property = await Property.create(req.body);
    res.status(200).json({ message: "success" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
router.get("/all", async (req, res) => {
  try {
    let data = await Property.find();
    res.send(data);
  } catch (e) {
    res.status(500).json({ message: "failed" });
  }
});

module.exports = router;
