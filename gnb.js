// 1. 기능 모듈화 - 프로토타입
// 모듈이란? 여러 기능들에 관한 코드가 모여 있는 하나의 파일
// 장점 : 기능 재사용의 편리성

let Gnb = (function () {
  function Gnb(id) {
    this.init(gnb);
    this.id = id;
  }
  //프로토타입 객체란
  //Gnb는 다른 곳에 생성되는 프로토타입의 원형 객체 - 모든 객체는 프로토타입 객체에 접근 가능
  //복사로 생성된 모든 객체는 추가 기능 사용가능

  //프로토 타입은?
  //자바스크립트에서 기본 데이터 타입을 제외한 모든 것.
  //원형 프로토타입 객체를 이용해 객체 생성
  //속성에 자신을 만들어낸 원형을 의미하는 링크 존재
  //링크를 프로토타입이라고 정의
  Gnb.prototype.init = function () {
    // content가 있는지 확인

    if (gnb === "" || gnb === null) {
      return;
    }
    // 태그생성
    // div 태그 생성한 것을 temp선언 후 대입
    let temp = document.createElement("div");
    gnb.appendChild(temp);
  };
  //자신의 아이디를 반환해주는 함수
  Gnb.prototype.setId = function () {
    return this.id;
  };
  return Gnb;
})();

//만들어보기
//프로토타입 객체로 ul li태그를 만들어보기
//자신의 li 갯수 반환해주는 함수 작성해보기
