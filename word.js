// word.js

// Actions
const WORD = "word/WORD"; /* 1 */
/* 2 */
const initialState = {
    word: []

}

// Action Creators

export function createWord(wordword) {
    console.log("Word을 생성할거야!");
    return { type: WORD, wordword: wordword }; /* 액션 3 */
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "word/WORD": {
            console.log("WORD REDUCER");
            const new_word = [...state.word, action.wordword];
            console.log(action.wordword)
            return { word: new_word };

        } /* 4 새로운 상태값 */


        default:
            return state;
    }
}