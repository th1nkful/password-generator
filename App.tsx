import React from 'react';
import { SafeAreaView } from 'react-native';

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';

import { Navigation } from './components';
import { HomeScreen } from './views';

// https://akveo.github.io/react-native-ui-kitten/docs/guides/branding#fonts
const theme = { ...darkTheme };

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={theme}>
        <Layout style={{ height: '100%' }}>
          <SafeAreaView>
            <Navigation />
            <HomeScreen />
          </SafeAreaView>
        </Layout> 
    </ApplicationProvider>
  </>
);
