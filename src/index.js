import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<div id="myDiv"></div>
`;

document.getElementById("myDiv").innerHTML = "jojo";
console.log("this is amazing");
console.log("00000");
console.log("0   0");
console.log("0   0");
console.log("0   0");
console.log("00000");

function dollarCounter(singles, fives, tens, twnties) {
  var total = singles + fives + tens + twnties;
  console.log("you have " + total + " bills");
  if (total > 150) {
    console.log("your rich");
  }
}
dollarCounter(50, 10, 5, 4);
