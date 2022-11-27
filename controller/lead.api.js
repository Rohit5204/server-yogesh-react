const express = require('express')
const router = express.Router()
const LeadService = require("../service/lead.service")

router.get("/", (req, res) => {
    LeadService.getLeads().then(data => {
        res.status(200).json(data)
    }).catch(error => {
        res.status(400).json(error)
    })
})

router.post("/", async (req, res) => {
    try {
        let data = await LeadService.addLead(req.body)
        res.status(201).json(data)
    }
    catch (error) {
        res.status(400).json(error)
    }
})

router.put("/:id", async (req, res) => {
    try {
        let data = await LeadService.updateLead(req.params.id,req.body)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        let data = await LeadService.deleteLead(req.params.id)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router