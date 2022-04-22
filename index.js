// const x = prompt("choisisé un nombre ");

// for (let i = 0; i < 10; i++) {
//   let result = [i] * x;
//   console.log(i, "*", x, "=", result);
// }

let root = document.getElementById("root");

let age = prompt("Quel est votre age ?");

if (!isNaN(age)) {
  if (age > 18) {
    root.innerHTML = "vous êtes majeur ";
  } else {
    root.innerHTML = "vous êtes mineur ";
  }
} else {
  root.innerHTML = "ce n'est pas un nombre ";
}
