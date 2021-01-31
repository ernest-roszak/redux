
const COUNTER_ADD = 'COUNTER_ADD';
const COUNTER_RESET = 'COUNTER_RESET';
const COUNTER_MINUS = 'COUNTER__MINUS';

export function add() {
    return {
    type: COUNTER_ADD
    }
}
export const reset = () => ({ type: COUNTER_RESET })

export const minus = () => ({ type: COUNTER_MINUS })

const COUNTER_INIT = {
    counter: 0
}

export default function reducer(state = COUNTER_INIT, action) {
    switch (action.type) {
        case COUNTER_ADD:
            return { ...state, counter: state.counter + 1}
            //return Object.assign({}, {counter: state.counter + 1}); => przed ES6
        case COUNTER_MINUS:
            return { ...state, counter: state.counter - 1}
        case COUNTER_RESET:
            return {...state, counter: 0}
        default:
            return state
    }
}