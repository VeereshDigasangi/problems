/**
 * Liskov Substitution Principle (LSP)
This is a scary term for a very simple concept. It's formally defined as "If S is a subtype of T, then objects of type T may be replaced with objects of type S (i.e., objects of type S may substitute objects of type T) without altering any of the desirable properties of that program (correctness, task performed, etc.)." That's an even scarier definition.

The best explanation for this is if you have a parent class and a child class, then the base class and child class can be used interchangeably without getting incorrect results. This might still be confusing, so let's take a look at the classic Square-Rectangle example. Mathematically, a square is a rectangle, but if you model it using the "is-a" relationship via inheritance, you quickly get into trouble.
 */
class Rectangle{
    constructor(){
        this.width=0;
        this.height=0
    }
    setColor(color){
        //set color
    }
    render(area){
        //render
    }
    setWidth(width){
        this.width=width
    }
    setHeight(height){
        this.height=height;
    }
    getArea(){
        return this.width*this.height;
    }
}

class Square extends Rectangle{
    setWidth(width){
        this.width=width;
        this.height=width;
    }
    setHeight(height){
        this.height=height;
        this.width=height;
    }
}

function renderLargeRectangles(rectangles){
    rectangles.forEach(rectangle => {
        rectangle.setWidth(4)
        rectangle.setHeight(5)
        const area= rectangle.getArea();
        console.log("area ",area);//BAD: for square it must be 20
    });
}
const rectangles=[new Rectangle(),new Square()];
renderLargeRectangles(rectangles);

// Solution==================================================

class Shape{
    setColor(color){
        //
    }
    render(area){
        //
    }
}

class Rectangle1 extends Shape{
    constructor(width,height){
        super()
        this.height=height;
        this.width=width;
    }
    getArea(){
        return this.height*this.width;
    }
}

class Square1 extends Shape{
    constructor(length){
        super()
        this.length=length;
    }
    getArea(){
        return this.length*this.length;
    }
}

function renderLargeShapes(shapes) {
    shapes.forEach(shape => {
        const area= shape.getArea();
        console.log(area);
    });
}
const shapes=[new Rectangle1(4,5),new Square1(5)]
renderLargeShapes(shapes)