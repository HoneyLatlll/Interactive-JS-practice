console.log("=== DOM 선택 연습 시작 ===\n");

// ==========================================
// 레벨 1: getElementById
// ==========================================

function test1() {
  console.log("\n=== 테스트 1: ID 선택 ===");

  // TODO: main-title을 선택하여 텍스트를 "제목 변경됨!"으로 변경
  // const title =
  const title = document.querySelector("#main-title");
  title.textContent = "제목 변경됨!";
  title.style.color = "red";

  // TODO: intro를 선택하여 배경색을 노란색으로 변경
  // const intro =
  const intro = document.querySelector("#intro");
  intro.style.backgroundColor = "yellow";

  // TODO: btn1을 선택하여 텍스트를 "클릭됨!"으로 변경
  // const btn1 =
  const btn1 = document.querySelector("#btn1");
  btn1.textContent = "클릭됨!";

  console.log("ID 선택 테스트 완료");
}
//모르고 querySelector 썼는데 getElementById
//를 썼을 때는 ("intro");이런식으로 #생략

// ==========================================
// 레벨 2: getElementsByClassName
// ==========================================

function test2() {
  console.log("\n=== 테스트 2: 클래스 선택 ===");

  // TODO: 모든 box를 선택하여 개수 출력
  // const boxes = document.
  const boxes = document.getElementsByClassName("box");
  console.log("박스 개수:", boxes.length);

  // TODO: 모든 box의 배경색을 lightgreen으로 변경
  // boxes 를 순회하면서 배경색을 lightgreen으로 변경하세요

  for (const box of boxes) {
    box.style.backgroundColor = "lightgreen";
  }
  // TODO: highlight 클래스를 가진 요소만 선택하여 테두리 추가
  // const highlighted =
  const highlighted = document.getElementsByClassName("box highlight");
  for (const highlight of highlighted) {
    highlight.style.border = "3px solid red";
  }
  // highlighted 를 순회하면서 테두리(border)를 3px solid red로 변경하세요

  console.log("클래스 선택 테스트 완료");
}

// ==========================================
// 레벨 3: getElementsByTagName
// ==========================================

function test3() {
  console.log("\n=== 테스트 3: 태그 선택 ===");

  // TODO: 모든 p 태그를 선택하여 개수 출력
  // const paragraphs = document.
  // console.log(`문단 개수: ${}`); // 문단 개수: 6
  const paragraphs = document.getElementsByTagName("p");
  console.log(`문단 개수: ${paragraphs.length}`);

  // TODO: 모든 button 태그를 선택하여 배경색 변경
  // const buttons =
  const buttons = document.getElementsByTagName("button");
  Array.from(buttons).forEach((btn) => {
    btn.style.backgroundColor = "coral";
  });

  console.log("태그 선택 테스트 완료");
}

// ==========================================
// 레벨 4: querySelector
// ==========================================

function test4() {
  console.log("\n=== 테스트 4: querySelector ===");

  // TODO: #complex-section 안의 첫 번째 li 선택
  // const firstLi =
  const firstLi = document.querySelector("li:first-child");
  firstLi.style.backgroundColor = "lightblue";
  console.log("첫 번째 li:", firstLi.textContent);

  // TODO: .active 클래스를 가진 첫 번째 요소 선택
  // const firstActive =
  const firstActive = document.querySelector("li.active");
  firstActive.style.fontWeight = "bold";
  console.log("첫 번째 active:", firstActive.textContent);

  // TODO: .section 안의 h2 선택 (첫 번째)
  // const sectionTitle =
  const sectionTitle = document.querySelector("#complex-section h2");
  sectionTitle.style.color = "blue";

  console.log("querySelector 테스트 완료");
}

// ==========================================
// 레벨 5: querySelectorAll
// ==========================================

function test5() {
  console.log("\n=== 테스트 5: querySelectorAll ===");

  // TODO: 모든 .box 선택하여 forEach로 순회
  // const boxes =
  // 아래 코드가 반복실행되도록 forEach 로 순회하도록 코드를 완성하세요.
  // box.textContent = `뉴박스 ${index + 1}`;
  // console.log(`박스 ${index + 1}:`, box.textContent);
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box, index) => {
    box.textContent = `뉴박스 ${index + 1}`;
    return console.log(`박스 ${index + 1}:`, box.textContent);
  });
  // 예상 출력:
  // 박스 1: 뉴박스 1
  // 박스 2: 뉴박스 2
  // 박스 3: 뉴박스 3
  // 박스 4: 뉴박스 4
  // 박스 5: 뉴박스 5

  // TODO: 모든 .active 선택하여 배열로 변환 후 map 사용
  // const activeItems =
  // const activeTexts = Array.from(activeItems).map();
  const activeItems = document.querySelectorAll(".active");
  const activeTexts = [...activeItems].map(
    (activeItem) => activeItem.textContent,
  );
  console.log("Active 항목들:", activeTexts);
  // Active 항목들: ['항목 2', '항목 4']

  // TODO: #item-list 안의 모든 li 선택
  // const listItems =
  const listItems = document.querySelectorAll("#item-list li");
  console.log("리스트 항목 개수:", listItems.length);

  // 첫 번째와 마지막 스타일 변경
  listItems[0].style.color = "red";
  listItems[listItems.length - 1].style.color = "blue";

  console.log("querySelectorAll 테스트 완료");
}

// ==========================================
// 추가 연습
// ==========================================

// 초기 정보 출력
console.log("전체 섹션 개수:", document.querySelectorAll(".section").length);
console.log("전체 버튼 개수:", document.getElementsByTagName("button").length);
console.log("전체 박스 개수:", document.querySelectorAll(".box").length);
