function product() {
     return this.a * this.b; 
    }

console.log(product.call({a:1,b:2}));
funcb = product.bind({a:1,b:5})
console.log(funcb());
console.log(product.apply({a:10,b:10}))
// console.log(product.call({a:10,b:10},1,2))