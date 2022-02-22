import Modal from 'react-modal'
import { useState } from 'react';
import { GlobalStyle } from "./styles/global";
import{ Header } from '../src/components/Header'
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from './components/NewTransactionsModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }
  
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal} />
      
      <Dashboard />

      <NewTransactionModal 
      isOpen = {isNewTransactionModalOpen}
      onRequestClose = {handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}