import { ReactNode } from 'react';

import { View, Image, Text } from "react-native";

import { BorderlessButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/images/logo.png';

import backIcon from '../../assets/images/icons/back.png';

import styles from "./styles";

type HeaderProps = { 
  title: string;
  children?: ReactNode;
  headerRight?: ReactNode;
}

export function Header({ title, children, headerRight }: HeaderProps) {

  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <View style={styles.container} >
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>
          {title}
        </Text>
        
        { headerRight }
      </View>


      { children }
    </View>
  );
}