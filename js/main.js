// find if member provided is in the list provided in config.js
function find_member(memberStr) {
  for (var i = 0; i < memberList.length; i++) {
    if (memberList[i][0] == memberStr) {
      return true;
    } else if (memberList[i][1] == memberStr && enableID) {
      return true;
    }
  }
}

// main check function
function memberCheck() {
  document.getElementById("output").style.backgroundColor = "";
  document.getElementById("output").innerHTML = "";
  var input = document.getElementById("userInput").value;

  if (input.length === 0) {
    document.getElementById("output").innerHTML = "";
  } else if (!isNaN(input) && enableID) {
    if (input.length > ID_length) {
      document.getElementById("output").innerHTML = "Student ID too big.";
      document.getElementById("output").style.backgroundColor = "fc686c";
    } else if (input.length === ID_length) {
      if (find_member(input.toLowerCase())) {
        document.getElementById("output").innerHTML = "Good";
        document.getElementById("output").style.backgroundColor = "88f2a4";
      } else {
        document.getElementById("output").innerHTML = "Not Found...";
        document.getElementById("output").style.backgroundColor = "fcc168";
      }
    }
  } else {
    if (find_member(input.toLowerCase())) {
      document.getElementById("output").innerHTML = "Good";
      document.getElementById("output").style.backgroundColor = "88f2a4";
    } else {
      document.getElementById("output").innerHTML = "Not Found...";
      document.getElementById("output").style.backgroundColor = "fcc168";
    }
  }
}

function help() {
  var help = document.getElementById("help");
  if (help.style.display === "none") {
    help.style.display = "block";
  } else {
    help.style.display = "none";
  }
}

// function to edit placeholder
function changePlaceholder() {
  var input = document.getElementById("userInput");

  if (enableID) {
    input.placeholder = "Name or ID";
    input.ariaLabel = "Name or ID";
  } else {
    input.placeholder = "Name";
    input.ariaLabel = "Name";
  }
}

// init
changePlaceholder();
help();

if (!enableHelp) {
  document.getElementById("helpButton").style.display = "none";
} else {
  document.getElementById("help").innerHTML = helpMessage;
}

document.getElementsByTagName("title").innerHTML = pageTitle;
document.getElementById("title").innerHTML = pageTitle;
