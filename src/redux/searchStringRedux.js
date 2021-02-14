
// selectors
export const getSearchString = state =>  state.searchString;
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
// actions types
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;
export const CHANGE = createActionName('CHANGE');

// action creators
export const createAction_changeSearchString = payload => ({
  payload: payload,
  type: CHANGE,
});

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}