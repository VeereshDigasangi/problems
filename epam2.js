// q1. Evnet loops

console.log("Hello");
setTimeout(() => {
    console.log("World")
}, 0);
Promise.resolve("Bye").then(data => console.log(data));
// Hello, Bye, World


// q2.
const Person = {

    "name": "",
    "age": "",
    "setName": (name) => {
        this.name = name;
    },
    "setAge": function (age) {
        this.age = age
    }
}
Person.setName("Rahul");
Person.setAge(23);
console.log(Person.name); // ""
console.log(Person.age); // 23


// Design patterns
 // nullable
 // singleton
 // 
 
 class Connection{
     constructor(){
         if(Connection.instance==null){
             Connection.instance=this;
         }
         return Connection.instance;
     }
 }
 
 let connection=new Connection();
 Object.freeze(connection);
 export connection;
 
 
 //Nullable deign patter
 
 class Person{
     constructor(id,name){
         this.id=id;
         this.name=name;
     }
     hasAccess(){
         return this.name=='Veeresh'
     }
 }
 
class NullablePerson(){
    constructor(){
        this.id=-1;
        this.name="Gues"
    }
} 
 function getUser(id){
     const user=new Person(id);
     if(user==null)
     return new NullabePerson()
 }
 
 function Printeruser(id){
     const user= getUser(id)
     console.log("Hi ",user.name)
     if(user.hasAccess()){
         console.log("Hey You have access")
     }
 }
 
 
 printUser(10)
 
 
 
 
 
 