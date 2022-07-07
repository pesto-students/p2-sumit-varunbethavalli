function isValidBST(root, min=null, max=null){
    if(root === null){
      return true; //when [] or when dealing with last node
    }
    if(min && root.val <= min.val){
      return false;
    }
    if(max && root.val >= max.val){
      return false;
    }
  
    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
  }