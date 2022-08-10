const baseLink = 'http://localhost:3000/api/greetings.json';

const FETCH_GREETINGS = 'FETCH_GREETINGS';
const initialState = { message: '...' };

const getGreetings = async () => {
  const response = await fetch(baseLink);
  const data = await response.json();
  return data;
};

export const fetchGreetings = () => async (dispatch) => {
  const data = await getGreetings();
  dispatch({ type: FETCH_GREETINGS, payload: data });
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
