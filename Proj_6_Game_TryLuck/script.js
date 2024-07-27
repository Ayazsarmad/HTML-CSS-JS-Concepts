let hit_number = 0;

document.querySelector("#Score").value = hit_number;

function forNo1() {
  let cmp_gen = Math.floor(Math.random() * 10);
  console.log(cmp_gen);
  if (cmp_gen === 1 || cmp_gen === 2 || cmp_gen === 5 || cmp_gen === 7) {
    if (hit_number <= 4) {
      hit_number = hit_number + 1;
      document.querySelector("#Score").value = hit_number;
      result();
    } else {
    }
  }
}
function forNo2() {
  let cmp_gen = Math.floor(Math.random() * 10);
  console.log(cmp_gen);
  if (cmp_gen === 2 || cmp_gen === 1 || cmp_gen === 7 || cmp_gen === 8) {
    if (hit_number <= 4) {
      hit_number = hit_number + 1;
      document.querySelector("#Score").value = hit_number;
      result();
    } else {
    }
  }
}
function forNo3() {
  let cmp_gen = Math.floor(Math.random() * 10);
  console.log(cmp_gen);
  if (cmp_gen === 3 || cmp_gen === 1 || cmp_gen === 9 || cmp_gen === 5) {
    if (hit_number <= 4) {
      hit_number = hit_number + 1;
      document.querySelector("#Score").value = hit_number;
      result();
    } else {
    }
  }
}
function forNo4() {
  let cmp_gen = Math.floor(Math.random() * 10);
  console.log(cmp_gen);
  if (cmp_gen === 4 || cmp_gen === 1 || cmp_gen === 8 || cmp_gen === 9) {
    if (hit_number <= 4) {
      hit_number = hit_number + 1;
      document.querySelector("#Score").value = hit_number;
      result();
    } else {
    }
  }
}
function forNo5() {
  let cmp_gen = Math.floor(Math.random() * 10);
  console.log(cmp_gen);
  if (cmp_gen === 5 || cmp_gen === 1 || cmp_gen === 7 || cmp_gen === 9) {
    if (hit_number <= 4) {
      hit_number = hit_number + 1;
      document.querySelector("#Score").value = hit_number;
      result();
    } else {
    }
  }
}
function forNo6() {
  let cmp_gen = Math.floor(Math.random() * 10);
  console.log(cmp_gen);
  if (cmp_gen === 6 || cmp_gen === 1 || cmp_gen === 3 || cmp_gen === 8) {
    if (hit_number <= 4) {
      hit_number = hit_number + 1;
      document.querySelector("#Score").value = hit_number;
      result();
    } else {
    }
  }
}
function forNo7() {
  let cmp_gen = Math.floor(Math.random() * 10);
  console.log(cmp_gen);
  if (cmp_gen === 7 || cmp_gen === 1 || cmp_gen === 4 || cmp_gen === 5) {
    if (hit_number <= 4) {
      hit_number = hit_number + 1;
      document.querySelector("#Score").value = hit_number;
      result();
    } else {
    }
  }
}
function forNo8() {
  let cmp_gen = Math.floor(Math.random() * 10);
  console.log(cmp_gen);
  if (cmp_gen === 8 || cmp_gen === 1 || cmp_gen === 3 || cmp_gen === 5) {
    if (hit_number <= 4) {
      hit_number = hit_number + 1;
      document.querySelector("#Score").value = hit_number;
      result();
    } else {
    }
  }
}
function forNo9() {
  let cmp_gen = Math.floor(Math.random() * 10);
  console.log(cmp_gen);
  if (cmp_gen === 9 || cmp_gen === 1 || cmp_gen === 5 || cmp_gen === 7) {
    if (hit_number <= 4) {
      hit_number = hit_number + 1;
      document.querySelector("#Score").value = hit_number;
      result();
    } else {
    }
  }
}
function forNo0() {
  let cmp_gen = Math.floor(Math.random() * 10);
  console.log(cmp_gen);
  if (cmp_gen === 0 || cmp_gen === 1 || cmp_gen === 6 || cmp_gen === 9) {
    if (hit_number <= 4) {
      hit_number = hit_number + 1;
      document.querySelector("#Score").value = hit_number;
      result();
    } else {
    }
  }
}

function result() {
  if (hit_number === 5) {
    let p_1Name = document.getElementById("name").value;
    alert(`Congratulations, ${p_1Name} is the Winner!`);
  }
}

// ------------------------------for player 2-----------------------------

let hit_number1 = 0;

document.querySelector("#Score1").value = hit_number1;

function forNo11() {
  let cmp_gen1 = Math.floor(Math.random() * 10);
  console.log(cmp_gen1);
  if (cmp_gen1 === 1 || cmp_gen1 === 2 || cmp_gen1 === 5 || cmp_gen1 === 8) {
    if (hit_number1 <= 4) {
      hit_number1 = hit_number1 + 1;
      document.querySelector("#Score1").value = hit_number1;
      result1();
    } else {
    }
  }
}
function forNo21() {
  let cmp_gen1 = Math.floor(Math.random() * 10);
  console.log(cmp_gen1);
  if (cmp_gen1 === 2 || cmp_gen1 === 1 || cmp_gen1 === 7 || cmp_gen1 === 9) {
    if (hit_number1 <= 4) {
      hit_number1 = hit_number1 + 1;
      document.querySelector("#Score1").value = hit_number1;
      result1();
    } else {
    }
  }
}
function forNo31() {
  let cmp_gen1 = Math.floor(Math.random() * 10);
  console.log(cmp_gen1);
  if (cmp_gen1 === 3 || cmp_gen1 === 1 || cmp_gen1 === 9 || cmp_gen1 === 6) {
    if (hit_number1 <= 4) {
      hit_number1 = hit_number1 + 1;
      document.querySelector("#Score1").value = hit_number1;
      result1();
    } else {
    }
  }
}
function forNo41() {
  let cmp_gen1 = Math.floor(Math.random() * 10);
  console.log(cmp_gen1);
  if (cmp_gen1 === 4 || cmp_gen1 === 1 || cmp_gen1 === 8 || cmp_gen1 === 9) {
    if (hit_number1 <= 4) {
      hit_number1 = hit_number1 + 1;
      document.querySelector("#Score1").value = hit_number1;
      result1();
    } else {
    }
  }
}
function forNo51() {
  let cmp_gen1 = Math.floor(Math.random() * 10);
  console.log(cmp_gen1);
  if (cmp_gen1 === 5 || cmp_gen1 === 1 || cmp_gen1 === 7 || cmp_gen1 === 2) {
    if (hit_number1 <= 4) {
      hit_number1 = hit_number1 + 1;
      document.querySelector("#Score1").value = hit_number1;
      result1();
    } else {
    }
  }
}
function forNo61() {
  let cmp_gen1 = Math.floor(Math.random() * 10);
  console.log(cmp_gen1);
  if (cmp_gen1 === 6 || cmp_gen1 === 1 || cmp_gen1 === 3 || cmp_gen1 === 8) {
    if (hit_number1 <= 4) {
      hit_number1 = hit_number1 + 1;
      document.querySelector("#Score1").value = hit_number;
      result1();
    } else {
    }
  }
}
function forNo71() {
  let cmp_gen1 = Math.floor(Math.random() * 10);
  console.log(cmp_gen1);
  if (cmp_gen1 === 7 || cmp_gen1 === 1 || cmp_gen1 === 4 || cmp_gen1 === 9) {
    if (hit_numbe1r <= 4) {
      hit_number1 = hit_number1 + 1;
      document.querySelector("#Score1").value = hit_number1;
      result1();
    } else {
    }
  }
}
function forNo81() {
  let cmp_gen1 = Math.floor(Math.random() * 10);
  console.log(cmp_gen1);
  if (cmp_gen1 === 8 || cmp_gen1 === 1 || cmp_gen1 === 3 || cmp_gen1 === 5) {
    if (hit_number1 <= 4) {
      hit_number1 = hit_number1 + 1;
      document.querySelector("#Score1").value = hit_number1;
      result1();
    } else {
    }
  }
}
function forNo91() {
  let cmp_gen1 = Math.floor(Math.random() * 10);
  console.log(cmp_gen1);
  if (cmp_gen1 === 9 || cmp_gen1 === 1 || cmp_gen1 === 5 || cmp_gen1 === 3) {
    if (hit_number1 <= 4) {
      hit_number1 = hit_number1 + 1;
      document.querySelector("#Score1").value = hit_number1;
      result1();
    } else {
    }
  }
}
function forNo01() {
  let cmp_gen1 = Math.floor(Math.random() * 10);
  console.log(cmp_gen1);
  if (cmp_gen1 === 0 || cmp_gen1 === 1 || cmp_gen1 === 6 || cmp_gen1 === 8) {
    if (hit_number1 <= 4) {
      hit_number1 = hit_number1 + 1;
      document.querySelector("#Score1").value = hit_number1;
      result1();
    } else {
    }
  }
}

function result1() {
  if (hit_number1 === 5) {
    let p_1Name1 = document.getElementById("name1").value;
    alert(`Congratulations, ${p_1Name1} is the Winner!`);
  }
}
