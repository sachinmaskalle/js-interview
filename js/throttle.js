const DEFAULT_DELAY = 5000;

const throttleFunc = (fn, delay) => {
  let flag = true;

  return function() {
    let context = this;
    let args = arguments;

    if(flag) {
      fn.apply(context,args);
      flag = false;

      setTimeout(() => {
        flag = true;
      },delay);
    }
  }
}

document.querySelector('#btn').addEventListener('click', throttleFunc((e) => {
  console.log('clicked');
},DEFAULT_DELAY));
