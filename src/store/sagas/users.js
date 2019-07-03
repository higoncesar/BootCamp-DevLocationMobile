import { call, put, select } from 'redux-saga/effects';
import { showMessage } from 'react-native-flash-message';
import api from '~/services/api';

import { Creators as UserActions } from '~/store/ducks/users';
import { Creators as ModalActions } from '~/store/ducks/modal';

export function* addUser(action) {
  const { username, coordinate } = action.payload;

  try {
    const { data } = yield call(api.get, `/users/${username}`);

    const isDuplicated = yield select(state => state.users.data.find(user => user.id === data.id));

    if (isDuplicated) {
      yield put(UserActions.addUserFailure());
      showMessage({
        message: 'Usuário duplicado',
        type: 'warning',
        icon: 'warning',
        floating: 1,
      });
    } else {
      data.coordinate = coordinate;
      yield put(UserActions.addUserSuccess(data));
      showMessage({
        message: 'Usuário adicionado com sucesso',
        type: 'success',
        icon: 'success',
        floating: 1,
      });

      yield put(ModalActions.closeModal());
    }
  } catch (error) {
    yield put(UserActions.addUserFailure());
    showMessage({
      message: 'Usuário não existe',
      type: 'danger',
      icon: 'danger',
      floating: 1,
    });
  }
}
