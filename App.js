import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Appnavigator from './src/Appnavigator';
import store from './src/redux/store/Store';

export default function App() {
  
  return (
    <Provider store={store}>
   <Appnavigator/>
   </Provider>
   );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
