function product(c,d) {
    return this.a * this.b + c + d ; 
   }

// console.log(product.call({a:1,b:2}));
// funcb = product.bind({a:1,b:5})
// console.log(funcb());
console.log(product.apply({a:10,b:10},[1,2]))
console.log(product.call({a:10,b:10},1,2))