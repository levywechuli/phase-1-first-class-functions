function receivesAFunction(callback) {
    if (typeof callback === 'function') {
        callback(); 
    } else {
        console.error("The argument is not a function");
    }
}


function myCallback() {
    console.log("Callback function called!");
}


receivesAFunction(myCallback);

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("Named function called!");
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Anonymous function called!");
    };
}