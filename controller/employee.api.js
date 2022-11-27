const express = require('express')
const router = express.Router()
const EmployeeService = require("../service/employee.service")

router.get("/", (req, res) => {
    EmployeeService.getEmployees().then(data => {
        res.status(200).json(data)
    }).catch(error => {
        res.status(400).json(error)
    })
})

router.post("/", async (req, res) => {
    try {
        let data = await EmployeeService.addEmployee(req.body)
        res.status(201).json(data)
    }
    catch (error) {
        res.status(400).json(error)
    }
})

router.put("/:id", async (req, res) => {
    try {
        let data = await EmployeeService.updateEmployee(req.params.id,req.body)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        let data = await EmployeeService.deleteEmployee(req.params.id)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router