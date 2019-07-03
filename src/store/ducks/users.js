/**
 * Types Actions
 */
export const Types = {
  ADD_REQUEST: 'ADD_USERS_REQUEST',
  ADD_SUCCESS: 'ADD_USERS_SUCCESS',
  ADD_FAILURE: 'ADD_USERS_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.data],
        loading: false,
        error: false,
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

/**
 * Creators
 */
export const Creators = {
  addUserRequest: (username, coordinate) => ({
    type: Types.ADD_REQUEST,
    payload: { username, coordinate },
  }),
  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),
  addUserFailure: () => ({
    type: Types.ADD_FAILURE,
  }),
};
