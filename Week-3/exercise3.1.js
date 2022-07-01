function memoize(fn){
    const cache = new Map();
    return function (...args) {
        const key =args.toString();
        console.log('fn called with' +key);
        console.log(cache);
         if (cache.has(key)){
            return cache.get(key);
         }
         cache.set(key, fn(...args));
         return cache.get(key);
    };
}

function sum(a,b) {
      return a+b
}
// sum(1,2)

function time(fn) {
    console.time();
    fn();
    console.timeEnd();
}

const sumM = memoize(sum);

time(() => sumM(10,20));
time(() => sumM(10,20));
time(() => sumM(10,20));
time(() => sumM(10,20));
time(() => sumM(10,20));

