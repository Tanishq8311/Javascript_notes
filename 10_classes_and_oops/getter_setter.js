class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value //setters ko return nhi krte
    }
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}tanishq`
    }

    set password(value){
        this._password=value
    }
}

const tanishq= new User("tanishq@gmail.com","abc")
// console.log(tanishq.password);
// console.log(tanishq.email);
