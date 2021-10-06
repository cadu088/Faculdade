import { RepositoryItem } from "./RepositoryItem";
import '../styles/repository.scss'
import { useEffect, useState } from "react";

interface Repository{
	name: string;
	description: string;
	html_url: string;
}

export function RepositoryList(){

	const [Repositories, setRepositories] = useState<Repository[]>([]);
	useEffect(() => {
   fetch('https://api.github.com/users/cadu088/repos')
	 .then(response => response.json())
	 .then(data => setRepositories(data))
	}, [] )

    return(
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
							{Repositories.map( repository=> {
               return <RepositoryItem key={repository.name} repository={repository}/>
							})}

            </ul>

        </section>
    );
}