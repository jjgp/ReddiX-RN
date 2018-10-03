/**
 * @prettier
 */

export const appendChildren = children => ({
  type: 'APPEND_CHILDREN',
  children,
});

export const fetchChildrenErrored = {
  type: 'FETCH_CHILDREN_ERRORED',
};

export const fetchChildrenSuccess = {
  type: 'FETCH_CHILDREN_SUCCEEDED',
};

export const fetchChildren = (replacement = false) => ({
  type: 'FETCH_CHILDREN',
  replacement,
});

export const replaceChildren = children => ({
  type: 'REPLACE_CHILDREN',
  children,
});

export const setSubredit = subreddit => ({
  type: 'SET_SUBREDDIT',
  subreddit,
});
