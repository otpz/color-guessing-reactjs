import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Screen from './components/Screen/Screen';

const App:React.FC = () => {

  const [color, setColor] = useState<string>("")
  const [colors, setColors] = useState<string[]>([])
  const [isWin, setIsWin] = useState<boolean>(true)
  const [score, setScore] = useState<number>(0)

  const changeColor = (): void => {
    const mainColor = `#${Math.floor(Math.random()*16777215).toString(16).toUpperCase()}`
    setColor(mainColor)

    setColors([mainColor, generateColor(), generateColor()]) // get colors, 1 real 2 fake
    setColors(prev => shuffleArray(prev)) // shuffle the indexes
  }

  const generateColor = ():string => {
    return `#${Math.floor(Math.random()*16777215).toString(16).toUpperCase()}`
  }

  useEffect(() => {
    const mainColor = `#${Math.floor(Math.random()*16777215).toString(16).toUpperCase()}`
    setColor(mainColor)

    setColors([mainColor, generateColor(), generateColor()])
    setColors(prev => shuffleArray(prev))
  }, [])

  const shuffleArray = (array: string[]): string[] => {
    const arrayCopy = [...array]
    let i = arrayCopy.length - 1
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = arrayCopy[i]
      arrayCopy[i] = arrayCopy[j]
      arrayCopy[j] = temp
    }
    return arrayCopy
  }

  const game = (clickedColor: string): void => {
    if (clickedColor === color){
      setIsWin(true)
      setScore(prev => prev + 1)
      changeColor()
    } else {
      setIsWin(false)
    }
  }

  return (
    <div className="container">
      <span className='title'>Guess the correct color on screen! 💪</span>
      <span className='score'> Score: {score}</span> 
      <div className='content'>
        <Screen bgColor={color} />
        <div className='button-div'>
          {
            colors.map((color, idx) => (
              <Button key={idx} buttonId={idx.toString()} color={color} game={game}/>
            ))
          }
        </div>
      </div>
      <div className='info'>
        {isWin ? (score !== 0 ? <span className='correct'>Correct 😁👌</span> : null) : <span className='uncorrect'>Uncorrect 😕</span>}
      </div>

      <div className='footer'>
        <span className='footer-info'>This project made by <a rel="noreferrer" target='_blank' className='link' href="https://github.com/otpz">Osman TOPUZ</a></span>
      </div>
    </div>
  )
}

export default App;
