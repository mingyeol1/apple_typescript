function 가능하냐(x : number, y : boolean , z : string) :string | void {

    let jum : number = 0;

    x += jum;
    if(y === true ){
        jum += 500;
    }
    
    if(z == '상'){
        jum += 100;
    }

    if(jum >= 600){
        return console.log('가능')
    }

}

가능하냐(500, true, '상');


