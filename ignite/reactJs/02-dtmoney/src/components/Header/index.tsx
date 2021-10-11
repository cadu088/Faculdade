import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
onOpenNewTractionModal: () => void;
}

export function Header({onOpenNewTractionModal}: HeaderProps){

	return(
<Container>
	<Content>
	<img src={logoImg} alt="dt money"/>
	<button type="button" onClick={onOpenNewTractionModal}>
		Nova transação
	</button>



	</Content>
</Container>
		)
}