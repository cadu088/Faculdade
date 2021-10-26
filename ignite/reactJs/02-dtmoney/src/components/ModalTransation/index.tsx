import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';


interface NewTransitionProps{

	isOpen: boolean;
	onRequestClose: () => void;
}

export function ModalTransition({isOpen, onRequestClose,}: NewTransitionProps){
	const [ type , setType ] = useState('deposit');
	const [title, setTitle] = useState('');
	const [ value, setValue ] = useState(0);
	const [ category, setCategory] = useState('');

	function handleCreateNewTransaction(event: FormEvent){
		event.preventDefault();
		const data = {title, value, type, category};
		api.post('/transactions', data);


		onRequestClose();
	}

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
			 <Container onSubmit={handleCreateNewTransaction}>
              <h2>Cadastrar transação</h2>
			<input type="text" placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)}></input>
			<input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))}></input>
			<TransactionTypeContainer>
				<RadioBox type="button" onClick={() => {setType('deposit')}} isActive={type === 'deposit'} ActiveColor='green'>
					<img src={incomeImg} alt='Entrada'/>
					<span>Entrada</span>
				</RadioBox>
				<RadioBox type="button" onClick={() => {setType('withdraw')}} isActive={type === 'withdraw'} ActiveColor='red'>
					<img src={outcomeImg} alt='Saida'/>
					<span>Saida</span>
				</RadioBox>
			</TransactionTypeContainer>
			<input type="text" placeholder="Categoria"  value={category} onChange={event => setCategory(event.target.value)}></input>
			<button type="submit">Cadastrar</button>
			</Container>
	  </Modal>
	);
}