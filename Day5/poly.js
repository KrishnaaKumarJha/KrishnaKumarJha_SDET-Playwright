class shape{
    draw(){
        console.log("Drawing a shape");
    };
};

class circle extends shape{
    draw(){
    console.log("Drawing a circle");
    };
}


class square extends shape{
    draw(){
    console.log("Drawing a square");
    };
}


class rectangle extends shape{
    draw(){
    console.log("Drawing a rectangle");
    };
}

const shapes = [new circle(), new square(), new rectangle()];
shapes.forEach(shape => shape.draw());
