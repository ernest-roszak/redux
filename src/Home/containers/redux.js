const USER_LOAD = 'USER_LOAD'
const USER_RESET = 'USER_RESET'
const USER_REMOVE = 'USER_REMOVE'
const USER_INIT = []

export function load() {
    return {
        type: USER_LOAD,
    }
}
export function reset() {
    return {
        type: USER_RESET,
    }
}
export const remove = () => ({ type: USER_REMOVE });
//to samo co wyżej tylko w funkcji strzałkowej, w przypadku jednego argumentu

export function reducer(state = USER_INIT, action) {
    switch (action.type) {
        case action.type === USER_LOAD:
            //akcja co ma sie wydarzyć

        break;
        case action.type === USER_RESET:
            //akcja co ma sie wydarzyć

        break;
        case action.type === USER_REMOVE:
            //akcja co ma sie wydarzyć

        break;
    
        default:
            break;
    }
}