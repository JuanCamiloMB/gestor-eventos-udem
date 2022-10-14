class User {
  constructor(mail, username, password) {
    this.mail = mail;
    this.username = username;
    this.password = password;
  }
  viewEvent(){

  }
  recoverPassword(){

  }
  LogIn(){
    
  }
  LogOut(){

  }
}

export class Cliente extends User{
  modifyEvent(){

  }
  removeEvent(){

  }
  createEvent(){

  }
  
}

export class Logistico extends User{
  constructor(mail, username, password){
    super(mail,username,password)
    this.salary = 0
  }
  generateBill(){
    
  }
}

export class Administrador extends User{ 
  modifyEvent(){
  
  }
  removeEvent(){
  
  }
  createEvent(){
  
  }
  registerUser(){
  
  }
  removeUser(){

  }
  createResource(){

  }
  modifyResource(){

  }
  removeResource(){

  }
  createSpace(){

  }
  modifySpace(){

  }
  removeSpace(){
    
  }

}


