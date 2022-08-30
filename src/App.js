import { useState } from "react";

const questions = [
  {
    title: "O'zbekiston poytaxti - ...",
    variants: ['Toshkent','Samarqand','Buxoro'],
    correct: 0
  },
  {
    title: "Toshkent shahridagi tumanni toping",
    variants: ['Urgut','Uchtepa','Kitob'],
    correct: 1
  },
  {
    title: "Registon maydoni qayerda joylashgan?",
    variants: ['Toshkent','Xiva','Samarqand'],
    correct: 2
  }
]

function Result({correct}) {
  return (
    <>
      <div className="game_result">Natija 🎉</div>
      <div className="game_score">Siz {questions.length}ta savoldan {correct}ta to'g'ri topdingiz</div>
      <div className="game_restart">
        <a href="/">
          <button className="restart_btn">Qayta o'ynash</button>
        </a>
      </div>
    </>
  )
}

function Game() {
  let [step, setStep] = useState(0);
  const question = questions[step];
  let progress = Math.round(step / questions.length * 100);
  let [correct, setCorrect] = useState(0);

  const variantOnClick = (index) => {
    setStep(step += 1);
    if (index == question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="game">
      { 
        step !== questions.length 
        ? 
        <>
          <div className="game_progress">
            <div style={{width: `${progress}%`}} className="game_progress__bar"></div>
          </div>
          <div className="game_question">{question.correct + 1}. {question.title}</div>
          <div className="game_variants">
            <ul>
              {question.variants.map((variant, index) => (
                <li onClick={() => variantOnClick(index)} key={variant}>
                  {variant}
                </li>
              ))}
            </ul>
          </div>
        </>
        : <Result correct={correct} />
      }
    </div>
  )
}

function App() {
  return (
    <Game />
  );
}

export default App;
