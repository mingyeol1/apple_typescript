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

=============================================================

함수 rest 파라미터, destructuring 할 때 타입지정

...rest 파라미터란? : 

함수에 몇개의 파라미터가 들어올 지 모를때 쓰는 파라미터 문법

function 함수(...a){

}

함수(1,2,3,4,5,6)

이런식으로 파라미터 값을 지정해 줄 수 있음.

근데 다른 파라미터 뒤에 들어와야함

function 함수(num, ...a){        이런식으로 파라미터의 뒤에 있어야함.

}


그리고 ...rest 파라미터로 들어온 값들은 array로 들어오게됨.



이걸 어떻게 타입지정을 하는데?


그냥 똑같이 들어오는 값을 지정해주면 됨. 근데 array 타입이기 때문에 []같이 붙여주면 끝


### ex

function 함수(...a : number[]){
   console.log(a)
}

함수(1,2,3,4,5,6)


=================================================

... spread operator

... spread란?  : ...rest로 받은 [] 를 벗겨주라는 뜻임.

사용법

let arr = [1,2,3]
let arr2 = [4,5]
let arr3 = [...arr, ...arr2]

이거와 같이 ... 이 괄호 나 오브젝트에 붙으면 그것을 벗겨줌.

그래서 arr3 의 값은 [1,2,3,4,5] 가 나옴.

=====================================================

destructuring 이란? 배열 등 자료을 변수로 빼고싶으면 사용하는 문법.

### ex

let [변수1, 변수2] = ['ㅎㅇ', 123] 이렇게 사용하면

변수1 로 쉽게 사용 할 수 있음




### 오브젝트 자료도 쉽게 사용가능함.

let {student : student, age : age} = { student : ture, age : 20}


서로 이름이 같으면 생략가능.
let {student, age} = { student : ture, age : 20}


함수 파라미터에 destructuring 사용가능

function 함수({student, age}){
   console.log(student, age)
}

함수({ student : ture, age : 20 })

으로 사용가능.


=======================================================

Narrowing 할 수 있는방법 더 알아보기

Narrowing 하면서 코드짜는 것도 힘든데 특히나 

1. undefined 타입일 경우 처리하는거 

2. 복잡한 object자료들 narrowing 하는거

이게 가장 잦고 귀찮습니다. 이걸 쉽게 하는 법을 좀 알아봅시다. 


1. && 연산자로 null & nudefined 타입체크하기

function 함수(a : string | undefined){
   if (a && typeof a === 'string'){

   }
}

위 if문은 a가 언디파인드면 실행자체를 하지 않지만 string이면 실행을 함.

이게 익숙하지 않으면 안쓰는것도 좋음



2. in 키워드로 objext narrowing 가능

속성명 in 오브젝트자료 로 사용가능.

### ex

type Fish = {swim : string}
type Bird = {fly : string}

function 함수(animal :Fish | Bird){
   if( 'swim' in animal)
      animal.Swim
}

으로 타입 네로잉이 가능함.


3. instanceof 연산자로 object narrowing 가능

오브젝트 instanceof 부모class

let 날짜 = new Date();           Date는 부모클래스
if (날짜 instanceof Date){       날짜라는 인스턴스가 Date로부터 파생이 되었나?

}

4. object 타입마다 literal type 만들어두면 narrowing 편해짐.

### ex

type Car = {
  wheel : '4개',
  color : string
}
type Bike = {
  wheel : '2개',
  color : string
}

function 함수(x : Car | Bike){
  if (x.whell === '4개'){        이게 Car이란 타입을 지정.
    console.log('이 차는 ' + x.color)
  } else {
    console.log('이 바이크는 ' + x.color)
  }
}


근데 이런거 다 안쓰고도 논리적으로 이 타입인지 특정지을 수 있으면 네로잉으로 인정해줌 ㅋ



===================================================

함수에 사용하는 never 타입.

function return 값에 붙일 수 있는 never type

function 함수() :never {

}

void랑 비슷한데 다름

조건 1. return 값이 없어야함.
조건 2. endpoint가 없어야함.

근데 둘이 같은소리임 ㅋ

이게 무슨소리냐

함수는 보이지는 않지만 undefined 값을 가지고있음.

그래서 절대 끝나지 않는 함수를 만들 때 사용함,

what is 끝나지 않는 함수 (endpoint가 없는 함수.) 만들기.

1. 에러만들기

function 함수() :never {
   throw new Error()
}

에러가 나면 코드 실행이 중단됨 끝나는게 아니라 도중에 중단되는거라 됨


2. while 반복문 (무한 반복문)

function 함수() :never {
   while( true ){

   }
}

그래서 이걸 어따 쓰는데??

근데 대부분 쓸데없음 ㅋ 대부분 void쓰면 되니까.


but never 타입은 코드 이상하게 짜면 등장함.



never 타입이 등장하는 경우

1. 뭔가 이상한 네로잉

function 함수( 파라미터 : string ) {
   if(typeof 파라미터 == 'string')
} else{        else는 필요가 없는데 있는경우. (이런 경우는 never)

}



2. 어떤 함수표현식은 return 타입이 자동으로 never

let 함수 = function(){
   throw new Error()
}


그래서 굳이 쓸 일은 없고 등장하면 이해 할 수 있으면 됨.
아 코드 잘못 짯구나.


=====================================================

타입스크립트의 장점

객체지향언어같은 문법도 제공함.

public, private, static, protected


class User{

   constructor(){

   }
}


생성자를 만들 때 필드에 만드나 생성자에 만드나 똑같지않음?

ㅇㅇ 같음 근데 생성자에 만들면 파라미터를 넣을 수 있어서 더 좋음

### public 키워드


class User{

   public name = 'kim'
   constructor(a){
      this.name = a
   }
}

let 유저1 = new User('park')
유저1.name = 'ㅎㅇ'

로 name을 변경 할 수 있음.
pubilc이 붙으면 모든 자식들이 이용가능하며 생략이 가능함.

당연히 함수에도 사용가능함.



### private 키워드

class User{

   private name = 'kim'
   constructor(a){
      this.name = a
   }
}

let 유저1 = new User('park')
유저1.name = 'ㅎㅇ'

private이 붙으면 class 안에서만 수정, 이용이 가능함.


### 프라이빗 키워드 사용예시


class User{

   name = 'kim'
   private familyName = 'kim'
   constructor(a){
      this.name = a + this.familyName
   }
}

let 유저1 = new User('민수')
console.log(유저1)

이런식으로 조회는 가능한데 가져다 쓰는걸 불가능하게 해줌.

private은 수정불가가 아님 class{} 안에서만 수정, 사용이 가능함.


근데 갑자기 바꾸고 싶으면?

자식들이 familyName을 바꾸고 싶으면?

1. class 안에 familyName 변경 함수제작.

그리고 유저1.이름변경함수()를 가져다 쓰면 됨.



=======================================================

public 키워드 쓰면 this.어쩌구 생략가능.

class Person{
   name;
   constructor(public name){

   }
}

무슨뜻이냐? 이 자리에 들어온 파라미터는 자식의 name 속성에 기입해주셈.

=========================================================

class에서 사용가능한 protected, static 키워드

간단 복습

private이란? class {} 안에서만 사용가능한 키워드임.

protected란? private이랑 비슷하게 class안에서만 사용이 가능한데 확장성이 약간 더 좋음.

protected를 붙이면 현재 class 안에서 + extends 된 class {} 안에서 사용가능

private은 안됨.


즉 protected는 extends된 class는 사용 가능, 자식들은 사용 불가능
   private는 extends된 class는 사용 불가능, 자식들은 사용 불가능


static 키워드를 붙이면 부모 class에 직접 부여됨.(stitic값은 상속이 안됨.)


======================================================


타입도 import export 해서 씁니다 그리고 namespace


다른 파일에서 export후 
사용할 파일에서 import하면 됨.

### ex

export type Name = string;


사용할 곳에서

import {Name} from './a'

하면 됨.

네임스페이스 사용법

namespace 네임스페이스명 {
   export type Name = string | number;
}

사용할 곳에서
///<reference path=".a.ts" />


let 변수명 : 네임스페이스명.Nmae = 'kim' 으로 사용 할 수 있음.

근데 옛날 문법이라 사용안한 ㅋㅋ 그냥 옛날 코드 뜯어볼 때 사용할듯


====================================================

타입을 파라미터로 입력하는 Generic

사용법

function 함수<작명>(x : 작명[]) : 작명 {
   return x[0]
}

let a = 함수<number>([4,2])

로 작명하는 곳에 타입명을 정해주면 됨.

확장성이 좋음

어떻게 확장성이 좋냐?

let a = 함수<number>([4,2])

let a = 함수<string>(['4','2'])

이런식으로 타입을 바꿀 수 있음.

=============================================

array 자료에 붙일 수 있는 tuple type

유니온타입보다 더 강제적으로 타입지정을 할 수 있음

let 멍멍 : [string, boolean] = ['dog', true]

이렇게 하면 무조건 첫번째 자리는 string 두 번째 자리는 true가 와야함.


let 멍멍 : [string, boolean?] = ['dog']

타입에 ? 를 넣어서 들어올 수도 안들어 올 수도 넣을 수 있음




let 멍멍 : [string, boolean?, number] = ['dog', true]

근데 이건 안됨.

왜? 말이 이상함 2번째 자리에 불리언이 올 수도 안올 수도 있는데

그럼 넘버는? 2번째임 3번째임?

그래서 ?를 넣는건 맨 마지막에만 넣을 수 있음.


====================================================


 rest parameter에 활용가능


 function 함수(...x : [number, string]){
  console.log(x)
}

함수(1,'2')

이런식으로 배열에 넣을 수 있음.

==========================================================

array 합칠 때 점 3개

let arr =[1,2,3];
let arr2 = [4,5 , ...arr];

array 합칠 때 ... spread 연산자 사용함. 이때 타입 지정하는 방법은?

let arr =[1,2,3];
let arr2 : [number, number, ...number[]] = [4,5 , ...arr];

이런식으로 지정해 주면됨.

무슨뜻임? array 가 들어올건데 몇개가 들어올지 모름.


=========================================================


외부 파일 이용시 declare & 이상한 특징인 ambient module


declare 키워드 : 변수 재정의가 가능한 declare 문법

declare let a;  :  어딘가 분명 변수 a가 있음 에러내지 마셈 라는 뜻임.

declare let a : number; 처럼 타입지정도 가능함.


=====================================================

d.ts 파일 이용하기


파일만들기 test.d.ts

그게 뭔데??? : 타입정의 보관용 파일임.

d.ts 파일용도

1. 타입정의 따로 보관할 파일이 필요하면 사용.
2. 타입 레퍼런스 생성하고 싶으면 사용.

d.ts파일은 자동으로 글로벌 모듈이 아님 그래서 사용할 때 export해야함

근데 글로벌 모듈로 만드는 법이 있음

1. types 라는 폴더 하나 생성
2. types 폴더 안에 common 폴더 하나 생성
3. common 폴더 안에 test.d.ts 파일 생성

4. tsconfig.json에서 설정하면됨
"typeRoots": ["./types]


=======================================================

외부 라이브러리 사용할 때 타입정의가 안되어있다면?

### ex

제이쿼리를 사용 할 때.
$().append() 에러가 나오는데 사용은 잘됨

에러를 없애려면 타입정의를 해야함.
근데 귀찮으니까 다른 사람들이 만든 라이브러리를 사용하면 됨

Definitely Typed github  깃 리포지토리에서 다운 받으면 됨

근데 이것도 찾기 힘드니 타입스크립트 홈페이지에서 찾아도 됨.

그래서 찾고 npm i @types/jquery 터미널에 설치.

그러면 에러없이 사용가능

근데 tsconfig.json에 "typeRoots" 가 설정 되어 있으면 추가를 해주던가 지우던가 둘 중 하나 해줘야함. 안그럼 에러 계속 뜸



==========================================================

object index signatures

index signature 사용하면 object 타입지정을 한번에 가능하게 함.

사용법

interface StringOnly {
   [key : string ] : string      모든 문자로 된 속성을 다 string 속성을 가진다.

}

이렇게 쓰면 모든 오브젝트 타입에 string값을 부여함.

ex

let user :StringOnly = {
   name: 'kim'
   age : '20'
   location : 'seoul'
}

이런식으로 하나하나 타입지정을 하지 않아도 모든게 string 값으로 들어감,


============================================================

object 타입 변환기 만들기


let obj = {name : 'kim', age : 20}
Object.keys(obj)

이런식으로 작성을 해주면 Object.keys(obj)는 obj가 가지고 있는 object를 array 자료로 만들어줌.

위와 비슷하게 만드는 것도 타입스크립트에 있음.

keyof

key 값을 전부 가져오는 keyof

interface Person {
  age : number;
  name : string;
}

type PersonKeys = keyof Person;
let a : PersonKeys = 'name';      // 'name'은 리터럴 타입임.

이런식으로 사용이 가능한데 왜 사용하냐?

가끔가다가 오브젝트에 키 값을 이용해서 타입체크를 하려고 근데 보통 잘 안씀.


========================================================

인덱스 시그니쳐에다가 keyof 를 사용하면?

interface Person {
 [key string] : number
}

type PersonKeys = keyof Person;     // 여기 keyof값에 string | number라는 유니온 타입이 들어감.
let a : PersonKeys = 'name';     



=======================================================

타입 변환기 만들기.

interface Person {
 color : boolean,
 model : boolean,
 price : boolean | number
}

이 타입을 string으로 변환하고 싶으면 다 바꿔도 되지만 이 코드가 10줄 100줄이 넘어가면 많이 귀찮을 수 있으니 변환기를 만들자.

type TypeChanger<MyType>= {
  [key in keyof MyType] : string
}

type 새로운타입 = TypeChanger<Car>

이렇게 하면 바뀜

설명은 16강 다시 보셈


==========================================================

조건문으로 타입만들기 & infer

타입 파라미터 3항연산자 만들기

type Age<T extends string> = T extends string ? string : nuknown

T라는 타입에 string이 들어오면 string을 내뱉고 아니면 unknown 타입을 뱉으라는 뜻임.

더 자세하게는
파라미터로 string을 집어넣으면 string 남기고 그게 아니면 nuknown남겨주셈.


let a : Age<String>



