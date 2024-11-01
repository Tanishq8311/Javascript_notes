class User{
    constructor(username,email,password){
        this.username=username,
        this.email=email,
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("tanishq","tanish1@google.com","123")
console.log(chai.changeUsername());
