// Write your solution in this file!
const employee = {
    name: "Craig Ford",
    streetAddress: "1726 Frank St",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(obj, key) {
    const newEmp = {...employee};
    delete newEmp[key];
    return newEmp;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete employee[key];
    return employee;
}