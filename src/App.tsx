import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import fish from "./bluefish2.png";
import fisher from "./fisher.png";
import fisher2 from "./fisher2.png";
import fisher3 from "./fisher3.png";
import fisher4 from "./fisher4.png";
import ocean from "./ocean.png";
import thing from "./GREEN THING.png";
import UIfx from 'uifx'; 
const clickAudio = new Audio('click.wav');
clickAudio.load()

const bgmAudio = new Audio('bgm.mp3');
bgmAudio.load()

const dropAudio = new Audio('drop.wav');
dropAudio.load();
const kickAudio = new Audio('kick.wav');
kickAudio.load();
const rockAudio = new Audio('rock.wav');
rockAudio.load();
const seduceAudio = new Audio('seduce.wav');
seduceAudio.load();

function App() {
  const [currentScreen, _setScreen] = useState("ocean");
  const [score, setScore] = useState(0);
  const [playMusic, setPlay] = useState(false);
  const setScreen = (type: string) => {
    switch(type) {
      case "fish":
        _setScreen(type);
        clickAudio.play();
        break;
      case "ocean":
        _setScreen(type);
        dropAudio.play();
        setScore(score + 1000);
        break;
      case "bite":
        kickAudio.play();
        setScore(20);
        break;
      case "growl":
        rockAudio.play();
        setScore(score+1);
        break;
      case "water":
        dropAudio.play();
        setScore(score+300)
        break;
      case "seduce":
        seduceAudio.play();
        setScore(score-500);
        break;
      default:
        return;
    }
  }
  const hitPlay = () => {
    if (!playMusic) {

      setPlay(true);
      bgmAudio.play();
      bgmAudio.loop = true;
    } else {
      setPlay(false);
      bgmAudio.pause();
    }
  }
  return (
    <div className="App">
      <div className="fishers">
        {/* // top bar  */}
  { currentScreen !== "fish" && <img className="thing" src={thing} alt="thing" /> }
        <img className="fisher" src={fisher} alt="fisher"/>
        <img className="fisher" src={fisher2} alt="fisher2"/>
        <img className="fisher" src={fisher3} alt="fisher3"/>
        <img className="fisher" src={fisher4} alt="fisher4"/>
        <div>
          <span>
            score: {score} { " " }
          </span>
          <button onClick={hitPlay}>
            { playMusic ? "stop music" : "play music" }
          </button>
        </div>
      </div>
      <hr />
      <div  className="pond">
        <div className="cast-button">
          {
            currentScreen === "fish" && (
              <>
              
          <button
            className="buttonnnn2"
            onClick={() => setScreen("seduce")}>
              seduce
          </button>
          <button
            className="buttonnnn3"
            onClick={() => setScreen("growl")}>
              growl
          </button>
          <button
            className="buttonnnn4"
            onClick={() => setScreen("bite")}>
              bite
          </button>
          <button
            className="buttonnnn5"
            onClick={() => setScreen("water")}>
              water
          </button>
          </>
            )
          }
          <button
            className="buttonnnn"
            onClick={() => { currentScreen === "fish" ? setScreen("ocean") : setScreen("fish")}}>
              { currentScreen === "fish" ? "back" : "cast" }
          </button>
        </div>
        {
          currentScreen === "fish" ? (
            
            <div>
            <img className="thing2" src={thing} alt="thing" />
              <img className="fish2" src={fish} alt="fish" />
            </div>
          ) : (
            
            <div>
            <span  className="fish" onClick={() => setScreen("fish")}>
            <img src={fish} alt="fish" />
            </span>
          </div>
          )
        }
        <img className="ocean" src={ocean} alt="ocean" />
      </div>
      <hr />
    </div>
  );
}

export default App;
