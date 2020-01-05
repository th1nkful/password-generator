import React from 'react';
import { Clipboard, View } from 'react-native';

import {
  Layout, Text, Button, Icon,
} from '@ui-kitten/components';

import { getPassword } from '../lib/password';
import useAppContext from '../lib/context';

const HomeScreen = () => {
  const { updateHistory } = useAppContext();
  const [pwd, setPwd] = React.useState(null);

  const generate = async () => {
    const password = await getPassword();
    setPwd(password);
    updateHistory({ newItem: password });
  };

  React.useEffect(() => {
    generate();
  }, [null]);

  const setClipboard = async () => {
    await Clipboard.setString(pwd);
  };

  if (!pwd) {
    return (
      // <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Layout>
        <Text category='h1'>Password Generator</Text>
        <Text category='h3'>Generating...</Text>
      </Layout>
    )
  }

  return (
    <Layout style={{ height: '100%' }}>
      <Text category='h4' style={{ margin: '5%', textAlign: 'center' }}>
        Your generated password:
      </Text>
      <Text category='h3' style={{ margin: '5%', textAlign: 'center', marginBottom: '15%' }}>{pwd}</Text>
      <View style={{ marginLeft: '10%', marginRight: '10%', marginBottom: '2%' }}>
        <Button
          onPress={setClipboard}
          icon={(style) => (
            <Icon
              style={style}
              name="copy-outline"
            />
          )}
        >
          Copy
        </Button>
      </View>
      <View style={{ marginLeft: '10%', marginRight: '10%' }}>
        <Button
          onPress={generate}
          icon={(style) => (
            <Icon
              style={style}
              name="refresh-outline"
            />
          )}
        >
          Reload
        </Button>
      </View>
    </Layout>
  );
};

export default HomeScreen;
