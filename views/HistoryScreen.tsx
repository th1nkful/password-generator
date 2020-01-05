import React from 'react';
import { Clipboard } from 'react-native';

import {
  Layout, Text, Button, List, ListItem, Icon,
} from '@ui-kitten/components';

import useAppContext from '../lib/context';

const HistoryScreen = () => {
  const { history } = useAppContext();

  const setClipboard = async (pwd) => {
    await Clipboard.setString(pwd);
  };

  const renderAccessory = (style, item) => (
    <Button
      style={style}
      onPress={() => setClipboard(item.password)}
      icon={(style) => (
        <Icon
          style={style}
          name="copy-outline"
        />
      )}
    />
  );

  const renderItem = ({ item }) => (
    <ListItem
      title={item.password}
      description={item.date.toString()}
      accessory={(style) => renderAccessory(style, item)}
    />
  );

  return (
    <Layout>
      <Layout style={{ marginTop: '10%', marginBottom: '3%' }}>
        <Text style={{ textAlign: 'center' }}>
          The last 10 passwords generated will be displayed here.
        </Text>
      </Layout>
      <List
        data={history}
        renderItem={renderItem}
      />
    </Layout>
  );
};

export default HistoryScreen;
