let factList = document.querySelector(".factList");
console.log(factList);
let btn = document.querySelector(".factsSecondaryHeading");
console.log(btn);

let facts = JSON.parse(localStorage.getItem("fact")) || [];

btn.addEventListener("click", function () {
  getData();
});

function getData() {
  fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      factList.innerHTML += `
  <div class="factItem">
      <div class="factDesription" id="fact1">${data.fact}</div>
  </div>
  `;
      facts.push(data.fact);
      localStorage.setItem("fact", JSON.stringify(facts));
    });
}

function showFact() {
  facts.forEach((item) => {
    console.log(item);
    factList.innerHTML += `
    <div class="factItem">
        <div class="factDesription" id="fact1">${item}</div>
    </div>
    `;
  });
}
showFact();
