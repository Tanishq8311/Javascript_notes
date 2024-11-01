function setUsername(username){
    this.username=username
}

function createUser(username,email,password){
    setUsername.call(this, username)
    // this.username=username
    this.email=email,
    this.password=password
}

const chai = new createUser("tanishq","tanishq@google.com","123")
console.log(chai);
