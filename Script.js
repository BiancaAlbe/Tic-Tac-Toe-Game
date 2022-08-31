window.onload = function gridGenerate() {                 // create the table
  for (var i = 0; i < 3; ++i) {
    for (var j = 0; j < 3; ++j) {
      document.getElementById("create_table").innerHTML +=
        "<div id ='table" + i + " " + j + "' onclick = table_clicks(" + i + "," + j + ") class = click ></div>";
    }
    document.getElementById("create_table").innerHTML += "<br>";
  }
};

let verify = 0;
var square = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function table_clicks(i, j) {                            //add x or o in the box
  let z = document.getElementById("table" + i + " " + j).innerHTML;
  if (verify === 0 && z != "O" && z != "X") {
    verify = 1;
    document.getElementById("table" + i + " " + j).innerHTML = "X";
    square[i][j] = "X";
  }
  add_o_to_the_first_emoty_box(square);
  console.log(square);

  let result = array_verify(square);
  console.log(result);
  if (result) {
    document.getElementById("mesage").innerText = result; //shows the winner on the screen
  }
}

function array_verify(square) {                           //check if there is a winner
  let count_row = 0;
  let count_column = 0;

  for (let i = 0; i < 3; ++i) {
    count_row = 0;
    count_column = 0;

    for (let j = 0; j < 3; ++j) {
      if (square[i][j] === "X") {
        ++count_row;
      }
      if (square[j][i] === "X") {
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
      if (square[i][j] === "O") {
        ++count_row;
      }
      if (square[j][i] === "O") {
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
    if (square[i][i] === "X") {
      ++main_diagonal_x;
    }
    if (main_diagonal_x === 3) {
      return "X - you have won";
    }

    if (square[i][i] === "O") {
      ++main_diagonal_o;
    }
    if (main_diagonal_o === 3) {
      return "O - you have won";
    }
  }

  let secondary_diagonal_x = 0;
  let secondary_diagonal_o = 0;

  for (let i = 0, j = 2; i <= 2, j >= 0; ++i, --j) {
    if (square[i][j] === "X") {
      ++secondary_diagonal_x;
    }
    if (secondary_diagonal_x === 3) {
      return "X - you have won";
    }

    if (square[i][j] === "O") {
      ++secondary_diagonal_o;
    }
    if (secondary_diagonal_o === 3) {
      return "O - you have won";
    }
  }
  return false;
}

function add_o_to_the_first_emoty_box(square) {              // add o in the first empty box

  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      if (square[i][j] === "") {
        square[i][j] = "O";
        document.getElementById("table" + i + " " + j).innerHTML = square[i][j];
        verify = 0;
        return;
      }
    }
  }
}
