var levelOrder = function(root) {
    
    let queue = [], traversal = [];
    if(root){
        queue.push(root);
        // traversal.push([root.val]);
    }
    while(queue.length !== 0){
        let currQlength = queue.length;
        let currLevel = [];
        
        for (let i=0; i< currQlength; ++i){
            let node = queue.shift();
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
            currLevel.push(node.val)
        }
        traversal.push(currLevel)
    }
    return traversal;
};