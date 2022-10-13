import './App.css';
import HomeContainer from './containers/HomeContainer';
import { useState } from 'react';
import styles from "./components/Modal";
import Modal from './components/Modal';
import { FaUserAlt } from "react-icons/fa";
import { RiUser2Fill } from "react-icons/ri";




  const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
      <HomeContainer></HomeContainer>
      <main>
        <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
         
          <RiUser2Fill size={40}
                       onMouseOver={({target})=>target.style.color="white"}
                       onMouseOut={({target})=>target.style.color="black"}
                       />
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </main>
      </>
    );
  };
  
  
export default App;
