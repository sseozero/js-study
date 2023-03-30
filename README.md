# js-study
javascript study


바로보기 : https://sseozero.github.io/js-study/


> 설명
 
1. 회원가입(sign up)
    - 항목별로 모두 조건에 맞게 입력해야 회원가입 완료 버튼 활성화
      - 아이디/비밀번호 => localstorage에 저장됨


( 확인 방법 : `f12` ->  `application` ->  `Stroage` -> `Local Storage` )


2. 로그인(login)
    - 아이디/비밀번호 입력 
      - 로그인 성공 시 : loginmain.html로 화면 이동
      - 로그인 실패 시 : 로그인 실패 알림


3. 회원정보 전체삭제
    - 해당 버튼 클릭시 local Storage 에 저장되어 있던 모든 정보 삭제됨


-----


##### :computer: 작업



<details>
<summary>index.html</summary>
: test 기능 모아보기
    

</details>


<details>
<summary>template.css</summary>
: bootstrap 무료 템플릿 가져와서 부분 수정 (https://bootsnipp.com/snippets/dldxB)

</details>


<details>
<summary>form-origin.html</summary>
 : 참고자료 (https://velog.io/@bcdy19/JS-DOM%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%9C-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC)

</details>


<details>
<summary>form-test.html</summary>


- css는 bootstrap 혼합 사용
      

- id, tel, email 입력양식 정규식 사용하여 유효성 검사 
     

- 모든 입력창이 채워져야 완료버튼 활성화  => 모든 조건문이 일치해야 완료버튼 활성화 될 수 있도록 수정 완료
      

</details>


<details>
<summary>login-test.html</summary>


- localstorage를 이용하여 아이디와 비밀번호 저장
      

- 로그인 기능 가능  
    

</details>

<details>
<summary>loginmain.html</summary>


- 로그인 성공 시 보여지는 페이지
      
    

</details>


------------

### :calendar: PLAN


##### :computer: 작업
- ~~ form 유효성 검사 ~~
- ~~ html5 웹스토리지 ~~



##### :book: 공부
- string 객체 메소드 , Array 메소드, mouse 관련 이벤트 정리
 

