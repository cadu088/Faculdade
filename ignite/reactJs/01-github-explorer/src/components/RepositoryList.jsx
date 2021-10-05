import { RepositoryItem } from "./RepositoryItem";
import '../styles/repository.scss'
import { useEffect, useState } from "react";


export function RepositoryList(){

	const [Repositories, setRepositories] = useState([]);
	useEffect(() => {
   fetch('https://api.github.com/users/cadu088/repos')
	 .then(response => response.json())
	 .then(data => setRepositories(data))
	}, [] )

    return(
        <setion className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
							{Repositories.map( repository=> {
               return <RepositoryItem key={repository.name} repository={repository}/>
							})}

            </ul>

        </setion>
    );
}