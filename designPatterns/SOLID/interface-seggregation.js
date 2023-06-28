/**
 * Interface Segregation Principle (ISP)
JavaScript doesn't have interfaces so this principle doesn't apply as strictly as others. However, it's important and relevant even with JavaScript's lack of type system.

ISP states that "Clients should not be forced to depend upon interfaces that they do not use." Interfaces are implicit contracts in JavaScript because of duck typing.

A good example to look at that demonstrates this principle in JavaScript is for classes that require large settings objects. Not requiring clients to setup huge amounts of options is beneficial, because most of the time they won't need all of the settings. Making them optional helps prevent having a "fat interface".
 */


class Document{
    constructor(name){
        this.name=name
    }
    save(){
        console.log("saved to database");
    }
    print(){
        console.log("pint to console");
    }
}
class Invoice extends Document{
    constructor(name){
        super(name)
    }
    calculateTotal(){
        console.log("calculated the total");
    }
}

const invoice = new Invoice()
invoice.save();
invoice.print()
invoice.calculateTotal()
/**
 * In this scenario, the Invoice class inherits the save() and print() methods from the Document interface, even though it doesn't need them for its specific purpose.

To adhere to the Interface Segregation Principle, we can create separate interfaces for different document functionalities. For example, we can create an Printable interface for printable documents:
 */

class Printable{
    constructor(){}
    print(){
        console.log("printed to console");
    }
}

class Saveable{
    constructor(){}
    save(){
        console.log("saved to db");
    }
}

class Invoice1 extends Printable{
    constructor(){}
    calculateTotal(){
        console.log("calculated invoice");
    }
    print(){
        console.log("print the invoice");
    }
}
