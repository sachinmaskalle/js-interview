let arr = [1,2,3,4,5];

let iterator = arr[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// genera function

function *gen() {
    let i =0;
    while(true) {
        yield i;
        i++;
    }
}

// let g1 = gen();
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());

// generators in Async 

function fetchData(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            success: function(result) {
                resolve(result);
            },
            error: function(err) {
                if(err) reject(err);
            }
        });
    });
}

function *generators() {
    yield fetchData('someUrl');
    yield fetchData('anotherUrl');
}
