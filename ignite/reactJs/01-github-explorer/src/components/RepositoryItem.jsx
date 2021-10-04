export function RepositoryItem(props){
    return(
        <li>
        <strong>{props.repository.name ?? 'Repositorio'}</strong>
        <p>{props.repository.description}</p>

        <a href={props.repository.link}>
            Acessar repositórios
        </a>
    </li>
    )
}