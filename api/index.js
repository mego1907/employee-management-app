const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const cors = require("cors");


const app = express();
const port = 8000;



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


mongoose
  .connect("mongodb+srv://mego:mego@cluster0.gj3ypkj.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to MongoDB")
  }).catch((error) => {
    console.log("Error connecting to MongoDB", error)
  })


app.listen(port, () => {
  console.log("Server is running on port 8000")
});

const Employee = require("./models/employee");
const Attendance = require("./models/attendance");


// endpoint to register a employee
app.post("/addEmployee", async (req, res) => {
  try {

    const { 
      employeeName, 
      employeeId, 
      designation, 
      phoneNumber, 
      dateOfBirth, 
      joiningDate, 
      activeEmployee, 
      salary, 
      address 
    } = req.body;


    // create new Employee
    const newEmployee = new Employee({
      employeeName,
      employeeId,
      designation,
      phoneNumber,
      dateOfBirth,
      joiningDate,
      activeEmployee,
      salary,
      address
    });

    await newEmployee.save();

    res
      .status(201)
      .json({ message: "Employee saved successfully", employee: newEmployee})

  } catch (err) {
    console.log("Error creating employee", err);
    res.status(500).json({ message: "Failed to add an employee", err })
  }
})


// endpoint to fetch all the employees
app.get("/employees", async (req, res) => {
  try{

    const employees = await Employee.find({});
    res.status(200).json(employees);

  } catch(err) {
    res.status(500).json({ message: "Failed to get employees", err })
  }
})