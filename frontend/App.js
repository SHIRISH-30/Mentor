// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SkillsForm from './Screens/SkillsForm';
import ProjectForm from './Screens/ProjectForm';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SkillsForm'>
        <Stack.Screen name="SkillsForm" component={SkillsForm} />
        <Stack.Screen name="ProjectForm" component={ProjectForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;