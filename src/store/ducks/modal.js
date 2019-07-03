/**
 * Types Actions
 */
export const Types = {
  SHOW_MODAL: 'SHOW_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  visible: false,
  coordinate: {},
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL:
      return { ...state, visible: true, coordinate: action.pyload.coordinate };
    case Types.CLOSE_MODAL:
      return { ...state, visible: false };
    default:
      return state;
  }
}

/**
 * Creators Actions
 */
export const Creators = {
  showModal: coordinate => ({
    type: Types.SHOW_MODAL,
    pyload: { coordinate },
  }),
  closeModal: () => ({
    type: Types.CLOSE_MODAL,
  }),
};
