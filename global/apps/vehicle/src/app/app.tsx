import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import { NativeBaseProvider, Box } from 'native-base';

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to vehicle!</h1>
      </header>
      <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>

    </div>
  );
}

export default App;
