import React, {useState} from 'react';
import Container from '../../components/Container';
import {useDispatch} from 'react-redux';
import {authenticationService} from '../../lib/dependencies';
import actions from '../../redux/actions';
import {Button, TextInput} from 'react-native-paper';
import styled from '@emotion/native';

const StyledTextInput = styled(TextInput)`
  margin-bottom: 20px;
`;

export default function EmployerRegisterPage({navigation}) {
  const dispatch = useDispatch();
  const MARGIN_BETWEEN_INPUT = 20;
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  async function register() {
    dispatch(
      actions.authentcationActions.startRegistering({
        registerMode: 'employer',
        employerName: firstname,
      }),
    );

    try {
      await authenticationService.registerEmployer(
        firstname,
        lastname,
        company,
        position,
        phoneNumber,
      );
    } catch (err) {
      return;
    }

    navigation.navigate('OTPVerificationPage');
  }

  return (
    <Container>
      <StyledTextInput
        label={'Firstname'}
        value={firstname}
        onChangeText={text => setFirstname(text)}
      />
      <StyledTextInput
        label={'Lastname'}
        onChangeText={text => setLastname(text)}
        value={lastname}
      />
      <StyledTextInput
        label={'Company'}
        onChangeText={text => setCompany(text)}
        value={company}
      />
      <StyledTextInput
        label={'Position'}
        value={position}
        onChangeText={text => setPosition(text)}
      />
      <StyledTextInput
        label={'Phone number'}
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      <Button
        mode="contained"
        style={{marginTop: MARGIN_BETWEEN_INPUT}}
        onPress={register}>
        Register
      </Button>
    </Container>
  );
}
