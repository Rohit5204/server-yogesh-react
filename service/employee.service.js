const Employee=require("../model/employee.model")

async function getEmployees(){
    try{
        let EmployeeData=await Employee.find({})
        return EmployeeData
    }catch(error){
        console.log(error)
    }
}

async function addEmployee(employee){
    try{
        let EmployeeModel=new Employee(employee)
        let EmployeeData=await EmployeeModel.save(employee)
        return EmployeeData
    }catch(error){
        console.log(error)
    }
}

async function updateEmployee(EmployeeId,employee){
    try{
        let response=await Employee.updateOne({_id:EmployeeId},employee)
        return response
    }catch(error){
        console.log(error)
    }
}

async function deleteEmployee(EmployeeId){
    try{
        let response=await Employee.remove({_id:EmployeeId})
        return response
    }catch(error){
        console.log(error)
    }
}

module.exports={
    getEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee
}