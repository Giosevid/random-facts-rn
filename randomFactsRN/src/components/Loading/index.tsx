import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#F5FCFF'," />
    </View>
  );
};

export default Loading;
