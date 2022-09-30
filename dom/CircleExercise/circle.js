class Circle{
    constructor(radius){
        this.radius=radius;
    }
   getArea(){
       return 3.14*this.radius*this.radius
   }
    getPerimeter(){
        return 2*3.14*this.radius
    }
}

let circle = new Circle(11)
console.log(circle.getArea())
let circle1=new Circle(4.44)
console.log(circle.getPerimeter())
