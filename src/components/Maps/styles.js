import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },

  avatar: {
    borderRadius: metrics.screenWidth * 0.075,
    height: metrics.screenWidth * 0.15,
    width: metrics.screenWidth * 0.15,
  },

  calloutContainer: {
    width: metrics.screenWidth - metrics.baseMargin * 2,
    alignItems: 'center',
    padding: metrics.padding,
  },

  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
  },
  userLogin: {
    fontSize: 14,
    color: colors.regular,
  },
  userBio: {
    marginTop: metrics.baseMargin,
  },
});

export default styles;
