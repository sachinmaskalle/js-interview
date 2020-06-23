let SingleTonPattern = (function (){
    let instance;

    let createInstance = function() {
        let obj = new Object('New object');
        return obj;
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };

})();

let i1 = SingleTonPattern.getInstance();
let i2 = SingleTonPattern.getInstance();
let i3 = SingleTonPattern.getInstance();
console.log(i1 === i3);