
/* task 2 */
const multiply = (a,b,c) => a*b*c;
const add = (a,b,c,d,e) => a+b+c+d+e;

const curry = (f) => {
    return function _curry(...args) {
        if (args.length >= f.length) {
            return f(...args);
        } else {
            return (...next) => {
                return _curry(...args, ...next);
            }
        }
    }
}

const res1 = curry(add)(1)(2)(3)(4)(5) == add(1,2,3,4,5) // should be true
const res2 = curry(multiply)(1)(2)(3) == multiply(1,2,3) // should be true

console.log(res1);
console.log(res2);
/*
task 1

const styleKeys = Object.keys(STYLES);

ctx.prototype.__applyStyleState = function(styleState) {
    Object.assign(this, styleState);
};

ctx.prototype.__setDefaultStyles = function() {
    styleKeys.forEach(key => {
        this[key] = STYLES[key].canvas;
    })
};

ctx.prototype.__getStyleState = function() {
    return styleKeys.reduce((state, key) => {
        state[key] = this[key];
        return state;
    }, {});
}; */