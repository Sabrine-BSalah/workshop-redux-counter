
import { INCREMENT, DECREMENT } from '../Actions/ActionsTypes'

const initialState = {
    count: 0
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        // case INCREMENT: return { ...state, count: state.count + 1 };
        // case DECREMENT: return { ...state, count: state.count > 0 ? state.count - 1 : state.count };

        case INCREMENT: return { ...state, count: state.count + action.payload };
        case DECREMENT: return { ...state, count: state.count > 0 ? state.count - action.payload : state.count };
        default: return state
    }
}

export default CounterReducer