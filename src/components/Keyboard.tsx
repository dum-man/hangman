import { KEYS } from "../const";

interface KeyboardProps {
  disabled?: boolean;
  activeLetter: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({
  disabled = false,
  activeLetter,
  inactiveLetters,
  addGuessedLetter,
}) => {
  return (
    <div className="keyboard">
      {KEYS.map((key) => {
        const isActive = activeLetter.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            key={key}
            className={`button ${isActive ? "button-active" : ""} ${
              isInactive ? "button-inactive" : ""
            }`}
            disabled={isInactive || isActive || disabled}
            onClick={() => addGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
