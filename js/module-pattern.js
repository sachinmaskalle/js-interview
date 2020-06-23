let Module = (function () {
    var firsrname = 'sachin';
    var lastname = 'suryakanth';

    return {
        getFullName: function() {
            return `${firsrname} ${lastname}`;
        },
        setName: function(name) {
            firstname = name;
        }
    };
})();

console.log(Module.getFullName());