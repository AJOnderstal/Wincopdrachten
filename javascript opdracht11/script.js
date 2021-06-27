// while
/*
let w = 0;
while (w < 5) {
  console.log(`This is while iteration number ${w}`);
  w++;
}

// for
for (let i = 0; i < 5; i++) {
  console.log(`This is for iteration number ${i}`);
}

// Expected output:
// This is while iteration number 0
// This is while iteration number 1
// This is while iteration number 2
// This is while iteration number 3
// This is while iteration number 4
// This is for iteration number 0
// This is for iteration number 1
// This is for iteration number 2
// This is for iteration number 3
// This is for iteration number 4
*/

//nummer 1:

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is oneven");
    }
  }

  console.log ("de nummers t/m 20 zijn nu verdeeld in even en oneven.")

  //nummer 2:
  function assignGrade(score) {
    if (score > 90) {
      return "A";
    } else if (score > 80) {
      return "B";
    } else if (score > 70) {
      return "C";
    } else if (score > 65) {
      return "D";
    } else {
      return "F";
    }
  }
  
  for (let i = 60; i <= 100; i++) {
    console.log("Voor " + i + " punten, krijg je een " + assignGrade(i));
  }

  //nummer 3a:

  const vermenigvuldigen = 9;
for (let i = 0; i <= 10; i++) {
  let result = vermenigvuldigen * i;
  console.log(vermenigvuldigen + " * " + i + " = " + result);
}

//nummer 3b:
for (let vermenigvuldigen = 0; vermenigvuldigen <= 10; vermenigvuldigen++) {
  for (let i = 0; i <= 10; i++) {
    let result = vermenigvuldigen * i;
    console.log(vermenigvuldigen + " * " + i + " = " + result);
  }
}
 