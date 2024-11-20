type FirstItem<T> = T extends [string] ? string[] : any;

let age1 :FirstItem<string[]>;
let age2 :FirstItem<number>; 