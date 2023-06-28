/**
 * The Dependency Inversion Principle (DIP) is one of the five principles of the SOLID design principles in object-oriented programming. It states that high-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details, and details should depend on abstractions.
 */

class EmailNotification{
    send(message){
        console.log("sent notification ",message);
    }
}
class NotificationService{
    constructor(){
        this.emailNotification= new EmailNotification()
    }
    sendNotification(message){
        this.emailNotification.send(message);
    }
}
/**
 * In this example, the NotificationService class directly depends on the concrete EmailNotification class. This violates the Dependency Inversion Principle because the high-level module (NotificationService) is tightly coupled to the low-level module (EmailNotification).

To apply the Dependency Inversion Principle, we can introduce an abstraction and invert the dependency. Let's create an interface called Notification:
 */
class Notification{
    send(){
        throw new Error("must be implemented")
    }
}

class EmailNotification1 extends Notification{
    send(msg){
        console.log("message sent",msg);
    }
}
// Next, we update the NotificationService class to depend on the abstraction (Notification) instead of the concrete implementation:

class NotificationService1 {
    constructor(notification){
        this.notification=notification;
    }
    sendNotification(message){
        this.notification.send(message)
    }
}

/**
 * Now, when creating an instance of NotificationService, we can pass an instance of EmailNotification or any other class that implements the Notification interface. This way, the NotificationService class depends on the abstraction (Notification), and the specific notification implementation can be easily swapped without modifying the high-level module.

 */

const emailNotification = new EmailNotification1();
const notificationService = new NotificationService1(emailNotification);
notificationService.sendNotification("Hello, world!");
