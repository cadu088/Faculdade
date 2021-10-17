import Modal from 'react-modal';
import { Container } from "./styles";
import closeImg from '../../assets/close.svg'

interface NewTransitionProps{

	isOpen: boolean;
	onRequestClose: () => void;
}

export function ModalTransition({isOpen, onRequestClose,}: NewTransitionProps){

	return(
   <Modal
	   isOpen={isOpen}
	   onRequestClose={onRequestClose}
		 overlayClassName="react-modal-overlay"
		 className="react-modal-content"
  	 >
			 <button type="button" onClick={onRequestClose} className="react-modal-close"> 
			 <img src={closeImg} alt="Fechar modal"/>
			 </button>
			 <Container>
      <h2>Cadastrar transação</h2>
			<input type="text" placeholder="Titulo"></input>
			<input type="number" placeholder="Valor"></input>
			<input type="text" placeholder="Categoria"></input>
			<button type="submit">Cadastrar</button>


			</Container>
	  </Modal>
	);
}