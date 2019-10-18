// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2{
    constructor(data){
        this.length = data.length;
        this.width = data.width;
        this.height = data.height;
    }

    volume(){
        return this.length * this.width * this.height;
    }

    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

class CubeMaker extends CuboidMaker2{
    constructor(data){
    super(data)
}
volume(){
    this.length**3;
}

surface(){
    6*(this.length)**2
}
}

let cuboid2 = new CuboidMaker2(4, 5, 5)

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.

console.log(CuboidMaker2.CubeMaker.surface());
