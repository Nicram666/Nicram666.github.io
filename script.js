const menuToggler = document.querySelector(".burger");
const hamMenu = document.querySelector(".nav-menu");
const mainpart = document.querySelector("main");
const navitem = document.querySelectorAll(".link-item")
// navitem.forEach(
//   addEventListener("click", () => {
//     hamMenu.classList.toggle("active");
//     menuToggler.style.animation = "none";
//     setTimeout(function () {
//       menuToggler.style.animation = "";
//     }, 10);
// }));

menuToggler.addEventListener("click", function toggleClass() {
  hamMenu.classList.toggle("active");
  menuToggler.style.animation = "none";
  setTimeout(function () {
    menuToggler.style.animation = "";
  }, 10);
});

mainpart.addEventListener("click", () => {
  if (hamMenu.classList.contains("active")) {
    hamMenu.classList.remove("active");
  }
});

// Co Wolisz
let tropical = 0;
let fresh = 0;
let smoky = 0;
let creamy = 0;

const resultspan = document.querySelector(".result")
const result = document.querySelector(".smak");
const recipeanchor = document.querySelector(".dynamicprzepis")
const resultbad = document.querySelector(".resultbad");
const smakbad = document.querySelector(".smakbad")
const checkdrink = document.querySelector(".checkdrink")
const firstradio = document.getElementsByName("first");
const secondradio = document.getElementsByName("second");
const thirdradio = document.getElementsByName("third");
const forthradio = document.getElementsByName("forth");
const fifthradio = document.getElementsByName("fifth");
const fog = document.querySelector(".fog");
let wybranyDrink = "";
let tempresult = 0;
let numOfFalseRadios = 0;
let stopF = false;

fog.addEventListener('click', () => {
  fog.classList.toggle("hidden")
  // console.log(resultspan.classList.contains("hidden"));
  if (resultbad.classList.contains("hidden") === false) {
    resultbad.classList.toggle("hidden")
  }
  if (resultspan.classList.contains("hidden") === false) {
      resultspan.classList.toggle("hidden");
    }
})

checkdrink.addEventListener("click", () => {

  wybranyDrink = "";
  tropical = 0;
  fresh = 0;
  smoky = 0;
  creamy = 0;

  firstradio.forEach(radio => {
    if (radio.checked === false) {
      numOfFalseRadios += 1
    }

    if (numOfFalseRadios == 2) {
      stopF = true
    } 
      if (radio.checked && radio.id === "1") {
        tropical += 1;
        fresh += 1;
      }

      if (radio.checked && radio.id === "2") {
        smoky += 1;
        creamy += 1;
      }
    
    
  })

  numOfFalseRadios = 0;

  secondradio.forEach((radio) => {
    if (radio.checked === false) {
      numOfFalseRadios += 1
    }

     if (numOfFalseRadios == 2) {
      stopF = true
    } 

    
      if (radio.checked && radio.id === "3") {
        tropical += 1;
        fresh += 1;
      }

      if (radio.checked && radio.id === "4") {
        smoky += 1;
        creamy += 1;
      }
    }
  );

  numOfFalseRadios = 0;

  thirdradio.forEach((radio) => {
      if (radio.checked === false) {
        numOfFalseRadios += 1;
      }

      if (numOfFalseRadios == 2) {
        stopF = true;
      } 


     if (radio.checked && radio.id === "5") {
       tropical += 1;
       fresh += 1;
     }

     if (radio.checked && radio.id === "6") {
       smoky += 1;
       creamy += 1;
     }
  });
  
  numOfFalseRadios = 0;
  
  forthradio.forEach((radio) => {
      if (radio.checked === false) {
        numOfFalseRadios += 1;
      }

      if (numOfFalseRadios == 2) {
        stopF = true;
      } 


    if (radio.checked && radio.id === "7") {
      fresh += 1;
    }

    if (radio.checked && radio.id === "8") {
      tropical += 1;
    }
  });

  numOfFalseRadios = 0;

  fifthradio.forEach((radio) => {
  if (radio.checked === false) {
    numOfFalseRadios += 1;
  }

  if (numOfFalseRadios == 2) {
    stopF = true;
  } 

    if (radio.checked && radio.id === "9") {
      smoky += 1;
    }

    if (radio.checked && radio.id === "10") {
      creamy += 1;
    }
  });

  numOfFalseRadios = 0;
  
  let resarr = [tropical, fresh, creamy, smoky];

  tempresult = 0;
  resarr.forEach((drink) => {
    if (drink > tempresult) {
        tempresult = drink
      }
  })

  console.log(tempresult)
  console.log(resarr)
  
  wybranyDrink = resarr.findIndex(x => x === tempresult)
  console.log(wybranyDrink)

  if (stopF) {
    // alert('stop')
    smakbad.textContent = `ODPOWIEDZ PROSZĘ NA WSZYSTKIE PYTANIA`;
    fog.classList.toggle("hidden");
    resultbad.classList.toggle("hidden");
  } else {
if (wybranyDrink === 0) {
  result.textContent = `TWÓJ SMAK TO TROPICAL`;
  const newAnchor = document.createElement('a');
  const text = document.createTextNode("SPRAWDŹ PRZEPIS!");
  newAnchor.appendChild(text)
  newAnchor.href = "tropical.html";
  resultspan.appendChild(newAnchor)
}
if (wybranyDrink === 1) {
  result.textContent = `TWÓJ SMAK TO FRESH`;
  const newAnchor = document.createElement("a");
   const text = document.createTextNode("SPRAWDŹ PRZEPIS!");
   newAnchor.appendChild(text);
  newAnchor.href = "fresh.html";
  resultspan.appendChild(newAnchor);
}
if (wybranyDrink === 2) {
  result.textContent = `TWÓJ SMAK TO CREAMY`;
  const newAnchor = document.createElement("a");
    const text = document.createTextNode("SPRAWDŹ PRZEPIS!");
    newAnchor.appendChild(text);
  newAnchor.href = "creamy.html";
  resultspan.appendChild(newAnchor);
}
if (wybranyDrink === 3) {
  result.textContent = `TWÓJ SMAK TO SMOKY`;
  const newAnchor = document.createElement("a");
  const text = document.createTextNode("SPRAWDŹ PRZEPIS!");
  newAnchor.appendChild(text);
  newAnchor.href = "smoky.html";
  resultspan.appendChild(newAnchor);
}
  fog.classList.toggle("hidden");
  resultspan.classList.toggle("hidden");
  }

  stopF = false;
  
  
})

// const checkers = document.querySelector(".checker")
// console.log(checkers)
// checkers.addEventListener("click", ()=> {console.log('e')})

// checkers.forEach((checker) => {
//   if (checker.checked) {
//     checker.classList.toggle()
//   }
// })

