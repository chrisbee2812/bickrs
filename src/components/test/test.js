const texts = ["You are cool", "Well done", "Keep on going!"]
const ul = document.querySelector("ul");
let counter = 0


export default function addAnimation() {
const li = document.createElement("li");
    li.innerText = texts[counter];
    ul.appendChild(li);


  li.classList.add("animated-item");
  li.addEventListener('animationend', (e) => {
    e.target.remove();
    counter++;
    if(counter == texts.length) counter = 0;
    addAnimation();
  });
}

addAnimation();