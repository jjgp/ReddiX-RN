/**
 * @prettier
 */

const initialState = {
  children: [],
  isErrored: false,
  error: null,
  isFetching: false,
  subreddit: '',
};

const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APPEND_CHILDREN':
      return {...state, children: [...state.children, ...action.children]};
    case 'FETCH_CHILDREN':
      return {...state, error: null, isErrored: false, isFetching: true};
    case 'FETCH_CHILDREN_ERRORED':
      return {...state, error: null, isErrored: true, isFetching: false};
    case 'FETCH_CHILDREN_SUCCEEDED':
      return {...state, error: null, isErrored: false, isFetching: false};
    case 'REPLACE_CHILDREN':
      return {...state, children: [...action.children]};
    case 'SET_SUBREDDIT':
      return {...state, subreddit: action.subreddit};
    default:
      return state;
  }
};

export default listingsReducer;
