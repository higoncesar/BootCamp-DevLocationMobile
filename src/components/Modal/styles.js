import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  contentContainer: {
    backgroundColor: '#212121',
    borderRadius: metrics.baseRadius,
    marginHorizontal: metrics.baseMargin,
    padding: metrics.basePadding * 2,
  },

  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: metrics.baseMargin,
    textAlign: 'center',
  },

  input: {
    backgroundColor: colors.white,
    alignSelf: 'stretch',
    borderRadius: metrics.baseRadius,
    color: colors.regular,
    fontSize: 16,
    marginBottom: metrics.baseMargin,
    padding: metrics.basePadding,
  },

  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  button: {
    flexGrow: 1,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    alignItems: 'center',
  },

  buttonCancel: {
    backgroundColor: colors.danger,
    marginRight: metrics.baseMargin,
  },

  buttonSave: {
    backgroundColor: colors.success,
    marginLeft: metrics.baseMargin,
  },

  textButton: {
    fontSize: 16,
    color: colors.white,
  },
});

export default styles;
