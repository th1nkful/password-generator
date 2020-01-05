import React from 'react';
import { SafeAreaView } from 'react-native';

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import {
  ApplicationProvider, IconRegistry, Layout, Tab, TabView, Icon,
} from '@ui-kitten/components';

import { Navigation } from './components';
import { HomeScreen, OptionsScreen, HistoryScreen } from './views';
import { AppProvider } from './lib/context';

// https://akveo.github.io/react-native-ui-kitten/docs/guides/branding#fonts
const theme = { ...darkTheme };

const App = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <TabView
      selectedIndex={selectedTab}
      onSelect={setSelectedTab}
    >
      <Tab title="HOME" icon={(style) => (<Icon {...style} name='home-outline'/>)}>
        <HomeScreen />
      </Tab>
      <Tab title="HISTORY" icon={(style) => (<Icon {...style} name='clock-outline'/>)}>
        <HistoryScreen />
      </Tab>
      <Tab title="OPTIONS" icon={(style) => (<Icon {...style} name='options-2-outline'/>)}>
        <OptionsScreen />
      </Tab>
    </TabView>
  );
};

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={theme}>
      <AppProvider>
      <Layout style={{ height: '100%' }}>
          <SafeAreaView>
            <Navigation />
            <App />
          </SafeAreaView>
        </Layout>
      </AppProvider>
    </ApplicationProvider>
  </>
);
