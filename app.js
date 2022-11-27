const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const LeadApi=require("./controller/lead.api")
const EmployeeApi=require("./controller/employee.api")
const RoleApi=require("./controller/role.api")

app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

app.use("/leads",LeadApi)
app.use("/employees",EmployeeApi)
app.use("/roles",RoleApi)

app.listen(3001, function () {
    mongoose.connect("mongodb+srv://yogesh12:yogesh123@cluster0.okpmpbx.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Server started on port 3001");
    
  });