const randomNumbers = 20;
const button = document.querySelector("button");
const section = document.querySelector(".section1");
const section2 = document.querySelector(".section2");


const checkIsEven = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) % 2 === 0) {
      const evenDiv = document.createElement("div");
      evenDiv.textContent += arr[i];
      evenDiv.classList.add("square");
      section.appendChild(evenDiv);
    } else {
      const oddDiv = document.createElement("div");
      oddDiv.textContent += arr[i];
      oddDiv.classList.add("square");
      section2.appendChild(oddDiv);
    }
  }
}

const numberGenerator = () => {
  const arr = [];
  for (let i = 0; i < randomNumbers; i++) {
    const random = Math.floor(Math.random() * 100) + 1;
    arr.push(random);
  }
  arr.sort((a, b) => a - b);
  checkIsEven(arr)
  
};

button.addEventListener("click", numberGenerator);
