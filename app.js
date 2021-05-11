const pads = document.querySelectorAll(".keyPad");
const deletePad = document.querySelector(".deletePad");
const numPad = document.querySelector("#numPad");
const savedName = localStorage.getItem("name");

let username;

if (savedName) {
  username = savedName;
} else {
  //ask for username and save in storage for later use as "username"
  username = window.prompt("היי, מי אתה בעצם?");
  localStorage.setItem("name", username);
}

//set name in title
document.querySelector("#name").innerText = "היי, " + username;

//buttons listeners
for (let pad of pads) {
  pad.addEventListener("click", () => {
    const text = pad.innerText;
    numPad.value += text;
  });
}

//delete button
deletePad.addEventListener("click", () => {
  numPad.value = numPad.value.slice(0, -1);
});
