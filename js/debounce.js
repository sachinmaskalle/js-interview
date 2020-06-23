function getResults() {
    console.log('Getting api data ..');
}

const DEFAULT_DELAY = 2000;

const betterFunction = function(fn,delay) {
    var timer;

    return function() {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=> {
            fn.apply(context, args);
        }, delay);
    }
}

let debounce = betterFunction(getResults, DEFAULT_DELAY);