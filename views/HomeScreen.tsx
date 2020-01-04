import React from 'react';
import { Clipboard, View } from 'react-native';

import {
  Layout, Text, Button,
} from '@ui-kitten/components';

import { getPassword } from '../lib/password';

const HomeScreen = () => {
    const [pwd, setPwd] = React.useState(null);

    const generate = async () => {
        const password = await getPassword();
        setPwd(password);
    }

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
        <Layout style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h4' style={{ marginBottom: '2%' }}>
                Your generated password:
            </Text>
            <Text category='h3' style={{ marginBottom: '5%' }}>{pwd}</Text>
            <View style={{ width: '45%' }}>
                <Button onPress={setClipboard} style={{ margin: '2%' }}>Copy</Button>
            </View>
            <View style={{ width: '45%' }}>
                <Button onPress={generate}>Reload</Button>
            </View>
        </Layout>
    );
};

export default HomeScreen;
