import './App.css';
import HomeContainer from './containers/HomeContainer';
import { useState } from 'react';
import styles from "./components/Modal";
import Modal from './components/Modal';

  const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
      <HomeContainer></HomeContainer>
      <main>
        <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
          Account Log In
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </main>
      </>
    );
  };
  
  
export default App;
