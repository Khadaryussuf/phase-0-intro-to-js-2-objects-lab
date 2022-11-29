// Write your solution in this file!
const employee = {};
const updateEmployeeWithKeyAndValue=(employee, key, value)=>{
    let obj = Object.assign({},employee,{[key]:value});
    return obj;
}
const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value)=>{
    employee[key] =value;
    return employee;
}
const deleteFromEmployeeByKey = (employee, key)=>{
    const obj = {...employee};
    delete obj[key];
    return obj;
}
const destructivelyDeleteFromEmployeeByKey = (employee, key)=>{
    delete employee[key];
    return employee;
}