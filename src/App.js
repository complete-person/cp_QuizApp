import { useState } from "react";

const questions = [
  {
    title: "O'zbekiston poytaxti - ...",
    variants: ['Toshkent','Samarqand','Buxoro'],
    correct: 0,
    id: 1
  },
  {
    title: "Toshkent shahridagi tumanni toping",
    variants: ['Urgut','Uchtepa','Kitob'],
    correct: 1,
    id: 2
  },
  {
    title: "Registon maydoni qayerda joylashgan?",
    variants: ['Toshkent','Xiva','Samarqand'],
    correct: 2,
    id: 3
  },
  {
    title: "Qaysi davlat O'zbekistonga qo'shni emas?",
    variants: ['Turkmaniston','Tojikiston','Iroq'],
    correct: 2,
    id: 4
  },
  {
    title: "Qaysi rang O'zbekiston bayrog'ida mavjud emas?",
    variants: ['Oq','Kulrang','Qizil'],
    correct: 1,
    id: 5
  },
  {
    title: "Amir Temur nechanchi yil tavallud topgan?",
    variants: ['1336','1441','1338'],
    correct: 0,
    id: 6
  },
  {
    title: "O'zbekistonda umumiy nechta viloyat bor?",
    variants: ['9','14','12'],
    correct: 2,
    id: 7
  },
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
          <div className="game_question">{question.id}. {question.title}</div>
          <div className="game_variants">
            <ul>
              {question.variants.map((variant, index) => (
                <li onClick={() => variantOnClick(index)} key={variant}>
                  {variant}
                </li>
              ))}
            </ul>
          </div>
          <div className="game_nav" style={{justifyContent: step != 0 && 'space-between'}}>
            { step != 0 && 
              <button onClick={() => setStep(step -= 1)} className="game_nav__btn">
                <ion-icon name="arrow-back-circle-outline"></ion-icon>
              </button>
            }
            <button onClick={() => setStep(step += 1)} className="game_nav__btn">
              <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </button>
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
