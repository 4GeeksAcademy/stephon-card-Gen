/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  // 1.Button;
  button();
  // 2.cardGenerator
  cardGenerator();
};

let button = () => {
  let getNewCard = document.querySelector("#cardChanger");
  console.log("testing");
  getNewCard.addEventListener("click", function() {
    cardGenerator();
  });
};
let cardGenerator = () => {
  // let cardGenerator =document.querySelector()
  // 3. randomSuit =
  let randomSuit = ["♦", "♣", "♥", "♠"];
  // 4. randomNumber =
  let randomNumber = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "A"
  ];

  let suit = randomSuit[Math.floor(Math.random() * randomSuit.length)];
  let number = randomNumber[Math.floor(Math.random() * randomNumber.length)];

  if (suit == "♥" || suit == "♦") {
    document.querySelector("#top-icon").style.color = "red";
    document.querySelector("#bottom-icon").style.color = "red";
  } else {
    document.querySelector("#top-icon").style.color = "black";
    document.querySelector("#bottom-icon").style.color = "black";
  }

  document.querySelector("#top-icon").innerHTML = suit;
  document.querySelector("#number").innerHTML = number;
  document.querySelector("#bottom-icon").innerHTML = suit;
};
