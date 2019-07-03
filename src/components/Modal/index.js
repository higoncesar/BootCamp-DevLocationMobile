import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Modal as ModalComponent,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { Creators as ModalActions } from '~/store/ducks/modal';
import { Creators as UsersActions } from '~/store/ducks/users';

import styles from './styles';

class Modal extends Component {
  static propTypes = {
    modal: PropTypes.shape({
      visible: PropTypes.bool.isRequired,
      coordinate: PropTypes.shape.isRequired,
    }).isRequired,
    addUserRequest: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    userLoading: PropTypes.bool.isRequired,
  };

  state = {
    username: '',
  };

  handleSubmit = () => {
    const { username } = this.state;
    const { addUserRequest, modal } = this.props;
    addUserRequest(username, modal.coordinate);
  };

  render() {
    const { username } = this.state;
    const { modal, closeModal, userLoading } = this.props;
    return (
      <ModalComponent
        visible={modal.visible}
        transparent
        animationType="slide"
        onShow={() => this.setState({ username: '' })}
      >
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Adicionar novo local</Text>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={text => this.setState({ username: text })}
              placeholder="Usuário Github"
              autoCapitalize="none"
            />
            {userLoading ? (
              <ActivityIndicator size="large" />
            ) : (
              <View style={styles.containerButtons}>
                <TouchableOpacity
                  style={[styles.buttonCancel, styles.button]}
                  onPress={() => closeModal()}
                >
                  <Text style={styles.textButton}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.buttonSave, styles.button]}
                  onPress={() => {
                    this.handleSubmit();
                  }}
                >
                  <Text style={styles.textButton}>Salvar</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ModalComponent>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  userLoading: state.users.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...UsersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
