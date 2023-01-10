
import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { Modal } from './components/Modal';
import { GlobalStyle } from './globalStyles';

function App() {

  const [showModal, setShowModal] = useState(false);
  const openModal =()=>{
    setShowModal(prev=> !prev)
  }


  const Container = styled.div
  `
    display:flex;
    justify-content:center;
    align-items:center;
    height: 100vh;
  `

  const Button =  styled.button
  `
    min-width: 100px;
    padding: 16px 33px;
    border-radius: 4px;
    border : none;
    background: #141414;
    color: #fff;
    font-size: 24px;
    cursor: pointer;

  `
  
  


  return (
    <Container>
      <Button onClick={openModal}>
         I am a modal
      </Button>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
    </Container>
    
  );
}

export default App;
