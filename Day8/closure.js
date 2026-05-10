let sum = 0; // 2
function f() {
    function increment() {
        sum++;
        
        function inner2() {
            sum++;
            console.log(sum);
        }
        return inner2();
    }
    return increment();
}
f();
console.log(sum);
 



const calc = {
    sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
    sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
    mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
    div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
};
 
 
function calculator(operation, ...operands) {
    return operation(...operands);
}
 
console.log(calculator(calc.sum, 1, 2, 3))