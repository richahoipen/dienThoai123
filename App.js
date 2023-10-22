import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Xử lý việc đăng nhập ở đây
    alert("Đăng nhập thành công");
  };

  const handleExit = () => {
    // Xử lý thoát ứng dụng ở đây
    console.log('Thoát ứng dụng');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tên:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={text => setUsername(text)}
      />

      <Text style={styles.label}>Mật khẩu:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập tài khoản</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleExit}>
        <Text style={styles.buttonText}>Thoát</Text>
      </TouchableOpacity>
      <Image style={styles.logo} source={require('./assets/cr7.png')} />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FF4500', // Thay đổi màu nền ở đây
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    height: 20,
    width: 350,
    marginBottom: '10px',
    flex:1
  }
});

export default App;

