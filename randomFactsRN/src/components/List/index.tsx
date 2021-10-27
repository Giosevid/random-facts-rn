import React from 'react';
import {View, Text, FlatList, ListRenderItem} from 'react-native';
import styles from './styles';

type ItemProps = {
  title: string;
};

type ListProps = {
  items: Array<ItemProps>;
};

const List = ({items}: ListProps) => {
  const renderItem: ListRenderItem<ItemProps> = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={items} renderItem={renderItem} />
    </View>
  );
};

export default List;
