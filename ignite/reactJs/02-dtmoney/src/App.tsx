import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { useState } from 'react'
import Modal from 'react-modal';
import { ModalTransition } from './components/ModalTransation';

Modal.setAppElement('#root');

export function App() {

	const [isNewTractionModalOpen, setIsNewTractionModalOpen] = useState(false);

	function handleOpenNewTractionModal(){
		setIsNewTractionModalOpen(true);
	}
	function handleCloseNewTractionModal(){
		setIsNewTractionModalOpen(false);
	}

  return (
    <div className="App">
     <Header onOpenNewTractionModal={handleOpenNewTractionModal}/>
		 <Dashboard/>
		 <ModalTransition 
		 isOpen={isNewTractionModalOpen}
		 onRequestClose={handleCloseNewTractionModal}
		 />
		 <GlobalStyle/>
    </div>
  );
}

