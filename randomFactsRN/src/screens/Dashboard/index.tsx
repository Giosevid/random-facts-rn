import React from 'react';
import {View} from 'react-native';
import {useQuery} from '@apollo/client';
import useShake from '../../hook/shakeHook';
import {GET_PLANETS} from '../../../services/graphql/querys';
import Loading from '../../components/Loading/index';
import styles from './styles';
import Header from '../../components/Header/Index';
import List from '../../components/List/index';

const Dashboard = () => {
  const [eventShake, setEventShake] = useShake();
  const numberAleatory = Math.floor(Math.random() * 11);

  const {loading, error, data, refetch} = useQuery(GET_PLANETS, {
    variables: {planetID: numberAleatory},
  });

  React.useEffect(() => {
    if (eventShake) {
      refetch();
    }
  }, [eventShake, refetch]);

  if (loading) return <Loading />;

  if (error) {
    console.log('error', error);
  }

  if (eventShake) {
    setEventShake(false);
  }

  return (
    <View style={styles.container}>
      <Header title={data.planet.name} />
      <List items={data.planet.filmConnection.films} />
    </View>
  );
};

export default Dashboard;
