import { Reducer } from 'redux';
import { AppTypes, IState } from './types';

const initialState: IState = {
  size: 'default',
};

const reducer: Reducer<IState> = (state = initialState, action) => {
  switch (action.type) {
    case AppTypes.SET_SIZE:
      return { ...state, size: action.payload };
    default:
      return state;
  }
};

export default reducer;
