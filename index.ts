function 함수(...x : (string | number)[]) : [string[],number[]]{
  
  let str : string[] = [];
  let num : number[] = []; 


  x.forEach((a)=>{
    if(typeof a === 'string'){
      str.push(a)
    }else{
      num.push(a)
    }
  })

  
  
  return  [str,num];
}

console.log( 함수('123',1,3,'2'));