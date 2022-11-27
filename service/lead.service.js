const Lead=require("../model/lead.model")

async function getLeads(){
    try{
        let LeadData=await Lead.find({})
        return LeadData
    }catch(error){
        console.log(error)
    }
}

async function addLead(lead){
    try{
        let LeadModel=new Lead(lead)
        let LeadData=await LeadModel.save(lead)
        return LeadData
    }catch(error){
        console.log(error)
    }
}

async function updateLead(LeadId,lead){
    try{
        let response=await Lead.updateOne({_id:LeadId},lead)
        return response
    }catch(error){
        console.log(error)
    }
}

async function deleteLead(LeadId){
    try{
        let response=await Lead.remove({_id:LeadId})
        return response
    }catch(error){
        console.log(error)
    }
}

module.exports={
    getLeads,
    addLead,
    updateLead,
    deleteLead
}