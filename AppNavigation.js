import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigationStack from './src/features/authentication/NavigationStack';
import {useDispatch, useSelector} from 'react-redux';
import {authenticationService} from './src/lib/dependencies.js';
import actions from './src/redux/actions';

export default function AppNavigation() {
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector(state => state.authentication);

  useEffect(() => {
    // async function init() {
    //   const isAuthenticatedStatus = await authenticationService.isAuthenticated();
    //   if (isAuthenticatedStatus) {
    //     dispatch(actions.authentcationActions.login());
    //     const profile = await authenticationService.getUserProfile();
    //     const {email, id, cardId, ...selectedProfile} = profile;
    //     dispatch(actions.userActions.updateProfile(selectedProfile));
    //   }
    // }
    // init();
  }, [isAuthenticated]);

  return (
    <NavigationContainer>
      {!isAuthenticated && <AuthNavigationStack />}
    </NavigationContainer>
  );
}