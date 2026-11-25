const items = [
    { text: "Why did the computer go to the doctor? It had a virus!", who: "Ahmedin", type: "joke" },
    { text: "Knowledge is power.", who: "Francis Bacon", type: "quote" },
    { text: "Why was the maths book sad? It had too many problems!", who: "Ahmedin", type: "joke" },
    { text: "Believe you can and you're halfway there.", who: "Theodore Roosevelt", type: "quote" },
    { text: "Why did the bicycle fall over? It was two-tired!", who: "Ahmedin", type: "joke" },
    { text: "Never stop learning.", who: "Unknown", type: "quote" },
    { text: "Why did the student eat his homework? It was a piece of cake!", who: "Ahmedin", type: "joke" },
    { text: "Dream big and work hard.", who: "Unknown", type: "quote" },
    { text: "Why did the computer sneeze? It had a bad connection!", who: "Ahmedin", type: "joke" },
    { text: "Great things take time.", who: "Unknown", type: "quote" },
    { text: "Why did the phone wear glasses? It lost its contacts!", who: "Ahmedin", type: "joke" },
    { text: "Every day is a new opportunity.", who: "Unknown", type: "quote" },
    { text: "Why did the keyboard go to school? To improve its skills!", who: "Ahmedin", type: "joke" },
    { text: "Success comes from hard work.", who: "Unknown", type: "quote" },
    { text: "Why was the computer cold? It left its Windows open!", who: "Ahmedin", type: "joke" }
];
const text = document.getElementById("text");
const author = document.getElementById("author");
const type = document.getElementById("type");
const nextBtn = document.getElementById("nextBtn");
const allBtn = document.getElementById("allBtn");
const jokesBtn = document.getElementById("jokesBtn");
const quotesBtn = document.getElementById("quotesBtn");
let lastIndex = -1;
let category = "all";
function showItem() {
    let filteredItems = items;
    if (category === "joke") {
        filteredItems = items.filter(item => item.type === "joke");
    }
    if (category === "quote") {
        filteredItems = items.filter(item => item.type === "quote");
    }
    let randomIndex = Math.floor(Math.random() * filteredItems.length);
    while (filteredItems.length > 1 && randomIndex === lastIndex) {
        randomIndex = Math.floor(Math.random() * filteredItems.length);
    }
    lastIndex = randomIndex;
    let selectedItem = filteredItems[randomIndex];
    text.textContent = selectedItem.text;
    author.textContent = "By: " + selectedItem.who;
    type.textContent = selectedItem.type;
}
nextBtn.addEventListener("click", function() {
    showItem();
});
allBtn.addEventListener("click", function() {
    category = "all";
    lastIndex = -1;
    showItem();
});
jokesBtn.addEventListener("click", function() {
    category = "joke";
    lastIndex = -1;
    showItem();
});
quotesBtn.addEventListener("click", function() {
    category = "quote";
    lastIndex = -1;
    showItem();
});
showItem();