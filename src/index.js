import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Terms from './Terms/Terms';
import Tips from './Tips/Tips';
import {colors } from './theme';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

const TermsNav = createStackNavigator({

    Terms: {screen:Terms},
 
});

const Tabs = createBottomTabNavigator({
    Terms: {screen: TermsNav},
    Tips: {screen: Tips}
});