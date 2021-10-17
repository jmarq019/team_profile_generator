// TODO: Write code to define and export the Employee class

class Employee {

    constructor(name, id, email){

        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }

    getName(){   
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return this.role;
    }

    setName(name){
        this.name = name;
    }

    setId(id){
        this.id = id;
    }

    setEmail(email){
        this.email = email;
    }

    setRole(role){
        this.role = role;
    }

}

module.exports = Employee;