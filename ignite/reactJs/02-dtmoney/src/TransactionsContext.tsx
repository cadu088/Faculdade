import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface TransactionData {
	id: number,
	title: string,
	amount: number,
	type: string,
	category: string,
	createdAt: string
}
  
  interface TransactionResponse {
	transactions: TransactionData[],
	createNewTransaction(transaction: transactionProps ) : Promise<void>;
  }

	interface TransactionResponseProps{
		children: ReactNode;
	}

	interface transactionProps{
		title: string,
		amount: number,
		type: string,
		category: string,
	}


export const TransactionsContext = createContext<TransactionResponse>(
	{} as TransactionResponse
	);

export function TransactionsProvider({children}: TransactionResponseProps){
	const [ transactions, setTransactions ] = useState<TransactionData[]>([]);

	useEffect(() => {
		api.get<TransactionResponse>('/transaction')
		  .then(response => setTransactions(response.data.transactions))
	  }, []);

		 async function createNewTransaction(transaction: transactionProps){
			const response = await api.post('/transactions', {...transaction, createdAt: new Date()});
			const { transactionsResponse } = response.data;

			setTransactions(
			[	...transactions,
				transactionsResponse,]
			);

		}

	return (
		<TransactionsContext.Provider value={{transactions, createNewTransaction}} >
			{children}
		</TransactionsContext.Provider>
	)
}