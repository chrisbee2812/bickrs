import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react"
import { clsx } from "clsx"
import { languages } from "../../components/hangman/languages"
import { getFarewellText, getRandomWord } from "../../components/hangman/utils"
import Confetti from "react-confetti"
import '../../styles/projects/hangman/hangman.css'

export const Route = createFileRoute('/projects/hangman')({
  component: RouteComponent,
})

function RouteComponent() {
    // State values
    const [currentWord, setCurrentWord] = useState(() => getRandomWord())
    const [guessedLetters, setGuessedLetters] = useState([])

    // Derived values
    const numGuessesLeft = languages.length - 1
    const wrongGuessCount =
        guessedLetters.filter(letter => !currentWord.includes(letter)).length
    const isGameWon =
        currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= numGuessesLeft
    const isGameOver = isGameWon || isGameLost
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

    // Static values
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter]
        )
    }

    function startNewGame() {
        setCurrentWord(getRandomWord())
        setGuessedLetters([])
    }

    const languageElements = languages.map((lang, index) => {
        const isLanguageLost = index < wrongGuessCount
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        const className = clsx("chip", isLanguageLost && "lost")
        return (
            <span
                className={className}
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )
    })

    const letterElements = currentWord.split("").map((letter, index) => {
        const shouldRevealLetter = isGameLost || guessedLetters.includes(letter)
        const letterClassName = clsx(
            isGameLost && !guessedLetters.includes(letter) && "missed-letter"
        )
        return (
            <span key={index} className={letterClassName}>
                {shouldRevealLetter ? letter.toUpperCase() : ""}
            </span>
        )
    })

    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        return (
            <button
                className={className}
                key={letter}
                disabled={isGameOver}
                aria-disabled={guessedLetters.includes(letter)}
                aria-label={`Letter ${letter}`}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    const gameStatusClass = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessIncorrect
    })

    function renderGameStatus() {
        if (!isGameOver && isLastGuessIncorrect) {
            return (
                <p className="farewell-message">
                    {getFarewellText(languages[wrongGuessCount - 1].name)}
                </p>
            )
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        }
        if (isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }

        return null
    }

    return (
        <div className="screen-layout">
            <div className="hangman-info">
                <h2>Game Info:</h2>
                <p>This game was created during the <a href="https://scrimba.com" target="blank"><strong>Scrimba</strong></a></p>
                <p>front end developer course.</p>
                <h2>Still to implement:</h2>
                <p>These are personal desires, not requested on the course!</p>
                <ul>
                    <li>re-style to suit this site a bit better</li>
                    <li>implement a back-end database for the word list</li>
                    <li>implement a word hint option</li>
                </ul>
            </div>
            <div className="hangman">
                {
                    isGameWon && 
                        <Confetti
                            recycle={false}
                            numberOfPieces={1000}
                        />
                }
                <div className="head-section">
                    <h1>Assembly: Endgame</h1>
                    <p>Guess the word within 8 attempts to keep the
                    programming world safe from Assembly!</p>
                </div>

                <section
                    aria-live="polite"
                    role="status"
                    className={gameStatusClass}
                >
                    {renderGameStatus()}
                </section>

                <section className="language-chips">
                    {languageElements}
                </section>

                <section className="word">
                    {letterElements}
                </section>

                {/* Combined visually-hidden aria-live region for status updates */}
                <section
                    className="sr-only"
                    aria-live="polite"
                    role="status"
                >
                    <p>
                        {currentWord.includes(lastGuessedLetter) ?
                            `Correct! The letter ${lastGuessedLetter} is in the word.` :
                            `Sorry, the letter ${lastGuessedLetter} is not in the word.`
                        }
                        You have {numGuessesLeft} attempts left.
                    </p>
                    <p>Current word: {currentWord.split("").map(letter =>
                        guessedLetters.includes(letter) ? letter + "." : "blank.")
                        .join(" ")}</p>

                </section>

                <section className="keyboard">
                    {keyboardElements}
                </section>

                {isGameOver &&
                    <button
                        className="new-game"
                        onClick={startNewGame}
                    >New Game</button>}
            </div>
        </div>
    )
}
