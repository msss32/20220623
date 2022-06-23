//만들어보기
//프로토타입 객체로 ul li태그를 만들어보기
//자신의 li 갯수 반환해주는 함수 작성해보기

let Gnb = (function () {
  function Gnb(li) {
    this.listBlock(li);
  }

  Gnb.prototype.listBlock = function (li) {
    if (gnb === "" || gnb === null) {
      return;
    }
    let ul = document.createElement("ul");
    gnb.appendChild(ul);
    for (let i = 0; i < li; i++) {
      document
        .querySelector("#gnb ul")
        .appendChild(document.createElement("li"));
    }
    console.log(li);
  };
  return Gnb;
})();
