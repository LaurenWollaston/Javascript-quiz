const houseScore = [];
const houseName = [];
const submitButton = document.getElementById("submitbutton");
const storedScore = JSON.parse(localStorage.getItem("score"));

function printScore() {
  document.getElementById("storedscore").innerText = "SCORE: " + storedScore;
}

// Same as the modal in the script.js. 
function HSCheck() {
  var tempscore = JSON.parse(localStorage.getItem("HighScores"));
  var tempname = JSON.parse(localStorage.getItem("Players"));
  for (i = 0; i < 10; i++) {
    if (tempscore == null || tempname == null) {
      houseScore[i] = 5000;
      houseName[i] = "AAA";
    } else {
      houseScore[i] = tempscore[i];
      houseName[i] = tempname[i];
    }
  }
  document.getElementById("HSL").innerHTML =
    "<li>1: " +
    houseName[0] +
    " " +
    houseScore[0] +
    "</li><li>2: " +
    houseName[1] +
    " " +
    houseScore[1] +
    "</li><li>3: " +
    houseName[2] +
    " " +
    houseScore[2] +
    "</li><li>4: " +
    houseName[3] +
    " " +
    houseScore[3] +
    "</li><li>5: " +
    houseName[4] +
    " " +
    houseScore[4] +
    "</li><li>6: " +
    houseName[5] +
    " " +
    houseScore[5] +
    "</li><li>7: " +
    houseName[6] +
    " " +
    houseScore[6] +
    "</li><li>8: " +
    houseName[7] +
    " " +
    houseScore[7] +
    "</li><li>9: " +
    houseName[8] +
    " " +
    houseScore[8] +
    "</li><li>10: " +
    houseName[9] +
    " " +
    houseScore[9] +
    "</li>";
}

//Updates the actual high score list in the localstorage when the user submits one. 
function HSUpdate(newscore, newname) {
  let userScore = houseScore.slice();
  let userName = houseName.slice();
  let SCINSERT = false;
  for (let i = 0; i < userScore.length; i++) {
    if (newscore > userScore[i]) {
      userScore.splice(i, 0, newscore);
      userName.splice(i, 0, newname);
      SCINSERT = true;
      break;
    }
  }
  let TEMPCROPNUM = userScore.slice(0, 10);
  let TEMPCROPNAME = userName.slice(0, 10);
  localStorage.setItem("HighScores", JSON.stringify(TEMPCROPNUM));
  localStorage.setItem("Players", JSON.stringify(TEMPCROPNAME));
}

HSCheck();
printScore();

//Accepts submitted user scores if they gave initials that were less than 3 characters. 
submitButton.addEventListener("click", async function (event) {
  event.preventDefault();
  submittedName = document.getElementById("submitinitials").value;
  if (submittedName.length > 3) {
    document.getElementById("submitinitials").value = null;
    document.getElementById("submitinitials").placeholder = "3 letter max";
  }
  else if(submittedName.length < 1){
    document.getElementById("submitinitials").value = null;
    document.getElementById("submitinitials").placeholder = "ENTER INITIALS";
  }
  else {
    HSUpdate(storedScore, submittedName);
    window.location.href = "./index.html";
  }
});
