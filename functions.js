// Function Declaration
function evenOdd(param1, param2) {
    console.log(param1);
    console.log(param2);
}

evenOdd();         // Output: undefined, undefined
evenOdd(1);        // Output: 1, undefined
evenOdd(1, 2);     // Output: 1, 2

// Function Expression
const F1 = function(a1, a2) {
    console.log(a1);
    console.log(a2);
};

F1(1, 2);          // Output: 1, 2

// Default Parameters
function role(para1="student") {
    console.log(para1);
}
role(); 