import React from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { MatchScreen } from './project/matchScreens/matchScreen';
import { PointScreen } from './project/pointTable/pointTable';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTE } from './project/utilties/utils';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Point Screen">
          <Stack.Screen name={ROUTE.POINT_TABLE} component={PointScreen} />
          <Stack.Screen name={ROUTE.MATCHES} component={MatchScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;