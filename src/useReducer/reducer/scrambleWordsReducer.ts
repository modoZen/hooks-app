export interface ScrambleWordsState {
  currentWord: string;
  errorCounter: number;
  guess: string;
  isGameOver: boolean;
  maxAllowErrors: number;
  maxSkips: number;
  points: number;
  scrambledWord: string;
  skipCounter: number;
  words: string[];
  totalWords: number;
}

export type ScrambleWordsActions =
  | { type: "SET_GUESS"; payload: string }
  | { type: "CHECK_ANSWER" }
  | { type: "START_NEW_GAME"; payload: ScrambleWordsState }
  | { type: "SKIP_WORD" };

export const GAME_WORDS = [
  "REACT",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "HTML",
  "ANGULAR",
  "SOLID",
  "NODE",
  "VUEJS",
  "SVELTE",
  "EXPRESS",
  "MONGODB",
  "POSTGRES",
  "DOCKER",
  "KUBERNETES",
  "WEBPACK",
  "VITE",
  "TAILWIND",
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
export const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
export const scrambleWord = (word: string = "") => {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

export const getInitialState = () => {
  const shuffleWords = shuffleArray([...GAME_WORDS]);

  return {
    currentWord: shuffleWords[0],
    errorCounter: 0,
    guess: "",
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(shuffleWords[0]),
    skipCounter: 0,
    words: GAME_WORDS,
    totalWords: shuffleWords.length,
  };
};

export const scrambleWordsReducer = (
  state: ScrambleWordsState,
  action: ScrambleWordsActions
): ScrambleWordsState => {
  switch (action.type) {
    case "SET_GUESS":
      return {
        ...state,
        guess: action.payload.trim().toUpperCase(),
      };
    case "CHECK_ANSWER": {
      const newWords = state.words.slice(1);

      if (state.currentWord === state.guess) {
        return {
          ...state,
          guess: "",
          points: state.points + 1,
          words: newWords,
          currentWord: newWords[0],
          scrambledWord: scrambleWord(newWords[0]),
        };
      }

      return {
        ...state,
        guess: "",
        errorCounter: state.errorCounter + 1,
        isGameOver: state.errorCounter + 1 >= state.maxAllowErrors,
      };
    }

    case "SKIP_WORD": {
      if (state.skipCounter >= state.maxSkips) {
        return state;
      }

      const newWords = state.words.slice(1);

      return {
        ...state,
        skipCounter: state.skipCounter + 1,
        words: newWords,
        currentWord: newWords[0],
        scrambledWord: scrambleWord(newWords[0]),
        guess: "",
      };
    }

    case "START_NEW_GAME": {
      return action.payload;
    }

    default:
      return state;
  }
};
