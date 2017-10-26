import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigator, addNavigationHelpers, StackNavigator } from 'react-navigation';

import Home from '../components/scenes/Home';
import Chat from '../components/scenes/Chat';

const tabScenes = {
  Home: { screen: Home },
  Chat: { screen: Chat }
};

const tabOptions = {
  headerMode: 'none',
  transitionConfig: () => ({
    screenInterpolator: (sceneProps) => {
      const {position, scene} = sceneProps;
      const {index} = scene;

      return fadeTransition(index, position);
    }
  })
};

const fadeTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [.8, 1, 1],
  });

  return {
    opacity
  };
};

export const RootNavigator = StackNavigator(tabScenes, tabOptions);

const StackRouter = ({ dispatch, nav }) => (
  <RootNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })} />
);

StackRouter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

export default connect(state => ({
  nav: state.nav
}))(StackRouter);
