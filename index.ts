let 변경 = document.querySelectorAll('.naver');

변경.forEach((e)=>{
   if (e instanceof HTMLAnchorElement) {
       e.href = 'https://kakao.com';
   }
})





