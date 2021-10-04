import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name : 'Unform',
    description : 'Forms in react',
    link : 'https://github.com/cadu088'
}

export function RepositoryList(){
    return(
        <setion className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>

            </ul>

        </setion>
    );
}