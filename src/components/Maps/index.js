import React from 'react';
import PropTyes from 'prop-types';
import { Image, Text, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ModalActions } from '~/store/ducks/modal';

import styles from './styles';

const Maps = ({ showModal, users }) => (
  <MapView
    initialRegion={{
      latitude: -20.44333,
      longitude: -44.76583,
      latitudeDelta: 0.0042,
      longitudeDelta: 0.0031,
    }}
    style={styles.container}
    onLongPress={(event) => {
      const { coordinate } = event.nativeEvent;
      showModal(coordinate);
    }}
  >
    {users.data.map(user => (
      <Marker key={String(user.id)} id={user.id} coordinate={user.coordinate} title={user.login}>
        <Image style={styles.avatar} source={{ uri: user.avatar_url }} />
        <Callout title={user.name}>
          <View style={styles.calloutContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userLogin}>{user.login}</Text>
            <Text styles={styles.userBio}>{user.bio}</Text>
          </View>
        </Callout>
      </Marker>
    ))}
  </MapView>
);

Maps.propTypes = {
  showModal: PropTyes.func.isRequired,
  users: PropTyes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maps);
