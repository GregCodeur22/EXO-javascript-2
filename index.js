const x = prompt("choisisé un nombre ");

for (let i = 0; i < 10; i++) {
  let result = [i] * x;
  console.log(i, "*", x, "=", result);
}
