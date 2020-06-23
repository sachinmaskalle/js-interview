let array = ['apple','mango','apple','pineapple','kiwi','jack','apple'];

function findFreqElement(input) {
    let obj = {};
    let maxElement = input[0];
    let maxCount = 1;

    for(let i=0; i<input.length; i++) {
        var currentEl = input[i];

        if(obj[currentEl] == null) {
            obj[currentEl] = 1;
        } else {
            obj[currentEl]++;
        }

        if(obj[currentEl] > maxCount) {
            maxElement = currentEl;
            maxCount = obj[currentEl];
        }
    }
    return maxElement;
}