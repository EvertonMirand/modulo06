import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function User({ navigation }) {
  console.tron.log(navigation.getParam('user'));
  return <View />;
}

User.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
