import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { auth, singInWithGoogle } from './services/firebase';

export default function App() {

  //Evento do click de botao
  const handleLogin = () => {
    singInWithGoogle()
      .then(result => {
        //Pega o ID unico por usuario
        console.log(result.user.uid)
      })

  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title="Login" onPress={handleLogin}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
