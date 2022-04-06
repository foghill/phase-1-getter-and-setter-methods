// Add your Circle class here

//PI is constant, so set it as a variable
const PI = Math.PI
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius*2
    }

    get circumference() {
        return (this.radius*2) * PI
    }

    get area(){
        return PI*(this.radius*this.radius)
    }

// calculate diameter: Divide the circumference by π, or 3.14 for an estimation. The result is the circle's diameter. 
//Divide the diameter by 2. There you go, you found the circle's radius.

    set diameter(diameter){
    this.radius = diameter/2
    }

/*

To calculate the circumference, you need the radius of the circle:
Multiply the radius by 2 to get the diameter.
Multiply the result by π, or 3.14 for an estimation.
That's it; you found the circumference of the circle.

*/

    set circumference(circumference){
        this.radius = circumference /(PI*2)
    }


/*
The area of a circle is pi times the radius squared (A = π r²). 
Learn how to use this formula to find the area of a circle when given the diameter.
*/

    set area(area){
        this.radius=Math.sqrt(area/PI)
    }


}