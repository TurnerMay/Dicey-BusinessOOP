document.addEventListener("DOMContentLoaded", function (event) {
  let divContainer = document.createElement("div");
  document.body.appendChild(divContainer);
  divContainer.classList.add("divContainer");

  let btn1 = document.getElementById("createDie");
 

  let btn2 = document.createElement("button");
  btn2.setAttribute("id", "rollDie");
  let header = document.querySelector("header");
  header.appendChild(btn2);
  btn2.textContent = "Roll Dice";

  let btn3 = document.createElement("button");
  btn3.setAttribute("id", "findSum");
  header.appendChild(btn3);
  btn3.textContent = "Find Sum";



//   let randomNum = function () {
//     return Math.floor(Math.random() * (7 - 1) + 1);
//   };
  let dieArr = [];



  class Die {
    constructor() {
      this.div = document.createElement("div");
      this.roll();
      divContainer.appendChild(this.div);
      this.div.classList.add("newDie");
      dieArr.push(this);
      this.div.addEventListener("click", () => this.roll());
      this.div.addEventListener("dblclick", () => {
        this.div.remove();
        let i = dieArr.indexOf(this);
        dieArr.splice(i, 1);
      });
    }

    roll() {
    //   this.value = randomNum();
    //   this.div.textContent = this.value;
    let dieFace = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"]
        let val = Math.floor(Math.random() * 6);
        this.value = val + 1;
        this.div.textContent = dieFace[val]
        
    }
  }

  btn1.addEventListener("click", () => new Die());
  btn2.addEventListener("click", () => {
    dieArr.forEach((elements) => elements.roll());
  });
  btn3.addEventListener("click", () => {
    let sum = 0;
    dieArr.forEach((total) => {
      sum += total.value;
    });
    alert(sum);
  });
});
