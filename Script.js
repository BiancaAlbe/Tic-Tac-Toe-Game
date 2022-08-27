window.onload = function gridGenerate() {
  for (var i = 0; i < 3; ++i) {
    for (var j = 0; j < 3; ++j) {
      document.getElementById("test1").innerHTML +=
        "<div id=table1(" +
        i +
        "," +
        j +
        ") onclick = table_clicks(" +
        i +
        "," +
        j +
        ") class = click ></div>";
    }
    document.getElementById("test1").innerHTML += "<br>";
  }
};

let verify = 0;
var square = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function table_clicks(i, j) {
  let z = document.getElementById("table1(" + i + "," + j + ")").innerText;
  if (verify === 0 && z != "X" && z != "O") {
    verify = 1;
    document.getElementById("table1(" + i + "," + j + ")").innerHTML = "X";
    square[i][j] = "x";
  } else if (verify === 1 && z != "X" && z != "O") {
    document.getElementById("table1(" + i + "," + j + ")").innerHTML = "O";
    verify = 0;
    square[i][j] = "o";
  }
  let result = array_verify(square);
  console.log(result);
  if (result) {
    document.getElementById("mesage").innerText = result;
  }
}

function array_verify(square) {
  let count_row = 0;
  let count_column = 0;

  for (let i = 0; i < 3; ++i) {
    count_row = 0;
    count_column = 0;

    for (let j = 0; j < 3; ++j) {
      if (square[i][j] === "x") {
        ++count_row;
      }
      if (square[j][i] === "x") {
        ++count_column;
      }
    }

    if (count_column === 3 || count_row === 3) {
      return "X - you have won";
    }
  }

  for (let i = 0; i < 3; ++i) {
    count_row = 0;
    count_column = 0;

    for (let j = 0; j < 3; ++j) {
      if (square[i][j] === "o") {
        ++count_row;
      }
      if (square[j][i] === "o") {
        ++count_column;
      }
    }

    if (count_row === 3 || count_column === 3) {
      return "O - you have won";
    }
  }

  let main_diagonal_x = 0;
  let main_diagonal_o = 0;

  for (let i = 0; i < 3; ++i) {
    if (square[i][i] === "x") {
      ++main_diagonal_x;
    }
    if (main_diagonal_x === 3) {
      return "X - you have won";
    }

    if (square[i][i] === "o") {
      ++main_diagonal_o;
    }
    if (main_diagonal_o === 3) {
      return "O - you have won";
    }
  }

  let secondary_diagonal_x = 0;
  let secondary_diagonal_o = 0;

  for (let i = 0, j = 2; i <= 2, j >= 0; ++i, --j) {
    if (square[i][j] === "x") {
      ++secondary_diagonal_x;
    }
    if (secondary_diagonal_x === 3) {
      return "X - you have won";
    }

    if (square[i][j] === "o") {
      ++secondary_diagonal_o;
    }
    if (secondary_diagonal_o === 3) {
      return "O - you have won";
    }
  }
  return false;
}
