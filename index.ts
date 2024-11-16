function 함수(...a : number[]){
    let 정답 : number = 0;
    a.forEach(function(e){
        if(정답 < e){
            정답 = e;
        }
    })
    
    return console.log(정답);
}


함수(1,2,3,4,5,6);


function 함수2({user, comment, admin} : {user:string, comment: number[], admin:boolean}){
    
    
    return console.log(user, comment, admin) 
}


함수2({ user : 'kim', comment : [3,5,4], admin : false })



function 함수3({...a}){
    console.log(a)
}

함수3([1,'123',true])