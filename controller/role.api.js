const express = require('express')
const router = express.Router()
const RoleService = require("../service/role.service")

router.get("/", (req, res) => {
    RoleService.getRoles().then(data => {
        res.status(200).json(data)
    }).catch(error => {
        res.status(400).json(error)
    })
})

router.post("/", async (req, res) => {
    try {
        let data = await RoleService.addRole(req.body)
        res.status(201).json(data)
    }
    catch (error) {
        res.status(400).json(error)
    }
})

router.put("/:id", async (req, res) => {
    try {
        let data = await RoleService.updateRole(req.params.id,req.body)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        let data = await RoleService.deleteRole(req.params.id)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router