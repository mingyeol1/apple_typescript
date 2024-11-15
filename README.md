타입스크립트 사용이유

타입을 명확하게 써야함.

ex

5 -3 = 2; 이건 됨
5 - '3' = 2;  이건 안됨

어떻게 숫자랑 문자열을 뺌.

타입을 명확하게 적어야해서 에러코드도 더 정확하게 출력해줌

====================================================================

타입스크립트 설치는 

node.js 최신버전 설치 후

vs코드에서 npm install -g typescript 타이핑.
Q
설치 완료 되면 확장자 ts로 한번 만들어보면됨

ex)
index.ts

그리고 설치가 다 되었으면

{
    "compilerOptions": {
        "target": "ES5",
        "module": "CommonJS"
    }
}

tsconfig.json 파일 만들고 위에 코드 복붙

이걸 왜 쓰는데?

ts파일을 js파일로 컴파일할 때 바꿔주는 옵션임.

==============================================================

ts로 짠 코드는 브라우저가 못읽어서 js파일로 바꿔줘여함(컴파일)

어케 바꾸는데 ? 

터미널창에 tsc -w 하면 알아서 바꿔줌 

tsc -w 가 안되면?

Set-ExecutionPolicy RemoteSigned  넣으면 됨

근데 gpt는 사용하고나서 안쓰면 Set-ExecutionPolicy Restricted 이걸로 다시 바꾸라고 말함.


================================================================

사용법

변수명 : 타입     을 적어주면 됨.

let 이름 :string = 'kim';


타입에는 여러가지가 올 수 있음 string, number, boolean, null, undefined, bigint, [ ] ,{ } 등등 간단한 변수타입을 지정 가능

근데 array문 같은거는

let 이름 : string[ ] = [ 'kim' , ' park ' ]    	[ ] 에 뭐가 들어올 수 있는지 타입을 지정해야함.

opject타입은?

let 이름 : { name : string }  = { name : 'kim' } 		{ } 에 key값은 똑같이 value값은 무슨 타입이 들어가는지 지정

let 이름 : { name? : string }  = {  }		?를 넣어서  속성이 들어올 수 있고 안들어올 수 있다고 지정이 가능함.

=================================================================

다양한 타입이 들어올 수 있게 하려면Union type

let 이름 : string | number = 'kim'	으로 하면 문자열 및 숫자가 들어올 수 있음



타입이 너무 길어서 저장하면서 사용하려면

type 타입명 = string | number; 로 지정하면

let 이름 : 타입명 = 123;			타입명은 보통 첫문자를 대문자로 넣음 ex) Name

타입명을 불러올 때마다 내가 지정을 안해도됨.

==================================================================

함수에 타입지정가능

function 함수 (x : number) : number {			오른쪽 number는 리턴값이 무슨 타입을 배출할건지.
  return x * 2
}


===================================================================

개꿀팁

보통 타입스크립트 개초보는 변수에 타입을 하나하나 다 넣으려고 하는데 굳이 그럴 필요가 없이
그냥 평소처럼 변수 만들면 알아서 지가 타입을 설정함.

중요한거에만 타입을 설정해주면 좋을듯.


==================================================================

타입을 지정하기 애매할 떼?


문자열 숫자 둘다 필요할 땐 유니온 타입을 넣으면됨

유니온 타입이 뭔데?
타입 2개를 합친거임 

ex)
let 변수명 : (number | string) = 123;   하면 숫자 및 문자열이 들어갈 수 있음.


any 타입 : 모든 자료형을 허용해줌

그냥 자바스크립트 쓰는거랑 다를게 없음 오류도 이상하게 해줌

이거랑 비슷한게


unkown 타입임

용도는 any랑 같음.

근데 any보다 안전함. 

왜? 이새끼는 그냥 타입을 조금 보는데 any는 타입을 아예 안봄.

==============================================================

함수에 유니온 타입을 넣고 숫자를 더하려고하면 에러가 나옴

왜? 함수가 number인지 string인지 정해지지 않음 타입 자체가 둘중 뭐뭐인거임.  타입자체가 애매모호함.

그래서 이걸 함수에서 사용하고 싶으면 네로잉연산자을 써야함

if(typeof x === 'string' ){
   return x + 1
} else{

}

하면 타입을 확정해줄 수 있음

typeof를 사용시 비교자는 문자로 들어가야함.

ex)
typeof x === 'number'

그리고 else 문이 없으면 타입이 이상하게 나올 수 있으니 else문으로 안전하게 에러까지 잡아주는게 나음

네로잉 으로는 typeof만 사용할 수 있는게 아니라 많이 있음

typeof 변수

속성명 in 오브젝트자료

인스턴스 instanceof 부모가 있음


아니면

assertuin 문법이 있음 (타입을 덮어씌움)

function 함수(x : number | string){

  let array : number[] = [];
  array[ 0 ] = x as number;

}

이렇게 하면 굳이 if문을 안써도 됨. 근데 이거 함수로 쓰면 큰일남 왜쓰는지 알아야함

그럼 어떻게 사용하는데?

1. 네로잉 할 때 쓰는건 맞음

2. 무슨 타입이 들어올지 100% 확실할 때 사용하는거임.

as문법은 타입에러는 잡아주지 않아서 함수('123') 문자열로 불러와도 버그 추적을 안해줌.

그래서 평소에는 안쓰는데 남이 짠 코드를 수정할 때 왜 타입에러가 나는지 모르겠을 때 사용함.


==================================================

readonly 쓰면 object 자료 수정을 막을 수 있음

type ing = {
   readonly name : string
}

const nn : ing = {
    name : '잉여'
}

이러면 자료수정을 막을 수 있음. 근데 타입스크립트에러일뿐 자바스크립트에서는 안됨..ㅠ


===================================================

type 변수 합치기

1.
type Name = string;
type Age = number;
type Person = Name | Age; 

이걸로 union type으로 합칠 수 도 있음.

2. & 연산자로 object 타입 합치기.
type PositionX = { x : number }
type PositionY = { x : number }

type NewType = PositionX & PositionY; 으로 합칠 수 있음

let position :NewType = {x : 10, y : 20}; 으로 사용가능


주의

같은 이름의 type 변수는 재정의 불가능.


===================================================

Literal Types로 만드는 const 변수 유사품 더 엄격한 타입지정.


Literal types - 변수에 뭐가 들어올지 더 엄격하게 관리가능.

let 이름 :'kim'  이러면 이름이란 변수에는 'kim' 이라는 문자만 입력가능함.

함수도 리터럴타입이 됨..


function 함수(a : 'hello'){

}

함수('hello')

이러면 파라미터값에는 hello란 문자만 들어갈 수 있음


=====================================================

리터럴 타입의 문제점

8장 다시보기.

======================================================


함수와 methods에 type alias 지정하는 법


9장 다시보기

===========================================================

타입스크립트로 HTML 변경과 조작할 때 주의점

html에서 let 제목 = document.qureySelector()를 사용시

제목.innerHTML = '반가워요'; 를 사용시

제목에 에러가 나오는데

왜 에러가 나오냐면 이게 유니온 타입이라 에러가나옴 이걸 해결하기 위해서는 네로잉을 사용해야함

if( 제목 != null ){
  제목.innerHTML = '반가워요'; 
}

이렇게 바꿔주면 에러가 안나옴

=============================================================

HTML 조작시 narrowiong 하는방법 5가지

1, 위에있는거 쓰면됨

2. instanceof 연산자 사용 (가장 많이 사용함)

let 제목 = document.querySelector('#title');

if(제목 instanceof Element){		왜 사용하냐면 이건 캡쳐보셈.
   제목.innerHTML = '반가워요'
}

3. as 키워드 사용하기 (웬만하면 사용x)

let 제목 = document.querySelector('#title') as Element;		오타가 나도 취급해줌

   제목.innerHTML = '반가워요'


4. 오브젝트에 붙이는 ?.

let 제목 = document.querySelector('#title');

if( 제목?.innerHTML != undefinend){
   제목.innerHTML = '반가워요'
}


5. tsconfig로 가서 strict모드 false하기.


====================================================

class 키워드 알아보기


코딩애플 객체지향class 문법 10분만에 이해시켜줌(자바스크립트) 유튜브에서 보기



=====================================================

prototype 문법 짚어보기

코딩애플 이거보고 prototype 이해 못하면 강의접음  유튜브에서 보기.




=====================================================

class 만들 때 타입지정 가능.


class Person{
    
    name : string;
    
    constructor(){
        this.name = 'kim'
    }
}

타입스크립트의 생성자는 필드값에 멤버가 있어야 this.멤버 사용이 가능 안그럼 에러남.



=======================================================


Object에 타입지정하려면 interface 이것도 있음


타입변수 선언시

type 타입명 = string; 이것도 있지만

interface도 있음 


인터페이스는 type과 유사함

interface 타입명 { 자료 : string, 자료2 : number} 형식으로 선언이 가능

근데 콤마 말고 세미콜론으로도 가능함

interface 타입명 
{ 자료 : string;
 자료2 : number;}

 근데 타입 키워드 사용하면 되는데 왜 인터페이스를 사용함??

 interface장점 : extends로 복사가 가능함

 ex

 interface Student {
    name : string

 }

 interface Teadcher extends Student {
    agg : number
 }

 let 학생 :Student = {name : 'kim'}
 let 선생 :Teacher = {name : 'kim' , age : 20}

 위에 선생변수처럼 사용이 가능.

 

 근데 타입도 & 기호로 사용이 가능한데 왜??

 ex

 type Animal = { name : string}
 type Cat = {age : number} & Animal
 
 이건 살짝 다른게

 복사가 아님. 그냥 둘다 만족하는 걸 뽑아내라는 뜻

 
 type vs interface

 인터페이스는 중복이 선언 가능하지만
 타입은 중복선언이 불가능함.


 ex

 interface Student{
    name : string
 }
 interface Student{
    score : number
 }

 이렇게 선언이 가능하며 자동으로 extends가 됨.

 근데 타입은 엄격해서 이렇게 안됨.


 인터페이스는 언제 쓰냐?

 추후에 타입에 뭐 추가를 하는게 쉬움.

 타입 키워드는 유연하지 못해서 사용이 힘듦.





