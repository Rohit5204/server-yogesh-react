const Role=require("../model/role.model")

async function getRoles(){
    try{
        let RoleData=await Role.find({})
        return RoleData
    }catch(error){
        console.log(error)
    }
}

async function addRole(role){
    try{
        let RoleModel=new Role(role)
        let RoleData=await RoleModel.save(role)
        return RoleData
    }catch(error){
        console.log(error)
    }
}

async function updateRole(RoleId,role){
    try{
        let response=await Role.updateOne({_id:RoleId},role)
        return response
    }catch(error){
        console.log(error)
    }
}

async function deleteRole(RoleId){
    try{
        let response=await Role.remove({_id:RoleId})
        return response
    }catch(error){
        console.log(error)
    }
}

module.exports={
    getRoles,
    addRole,
    updateRole,
    deleteRole
}