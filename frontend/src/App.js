import React, {useState, useEffect} from 'react';

// hooks 
import { useExternalApi as useNoteResponse } from './hooks/noteResponse'

// project imports 
import Navbar from './components/Navbar';
import Vault from './components/Vault'; 
import CreateNoteModal from "./components/CreateNoteModal";
import ViewNoteModal from "./components/ViewNoteModal";
import Modal from "./components/Modal";


function App() {
  // hooks functions 
  const { getNotes, createNote, deleteNote, updateNote } = useNoteResponse()

  // useStates
  const [openCreateModal, setOpenCreateModal] = useState(false); 
  const [openNoteModal, setOpenNoteModal] = useState(false); 
  const [notes, setNotes] = useState([]); 
  const [selectedNote, setSelectedNote] = useState({});
  const [active, setActive] = useState(true); 

  function onCloseModal() {
      setOpenCreateModal(false); 
  }

  function onCloseNoteModal() {
      setOpenNoteModal(false);
  }

  const handleCreateNote = async (note) => {
      await createNote(note)
      await getNotes(setNotes, active)    
  }

  const handleUpdateNote = async (note) => {
      await updateNote(note)
      await getNotes(setNotes, active)
  }

  const handleDeleteNote = async (note) => {
      await deleteNote(note) 
      await getNotes(setNotes, active)
      onCloseNoteModal()
  }

  useEffect(() => {
      const fetchNotes = async () => {
          await getNotes(setNotes, active)
      }; 
      fetchNotes()
      
      // eslint-disable-next-line
  }, [active])


  return (
    <div>
      <Navbar setOpenCreateModal = {setOpenCreateModal} active = {active} setActive = {setActive} />
      <Vault notes = {notes} setSelectedNote = {setSelectedNote} setOpenNoteModal = {setOpenNoteModal} />

      <Modal isOpen={openCreateModal} onClose={onCloseModal}>
        <CreateNoteModal onSubmit={handleCreateNote} onClose={onCloseModal} />
      </Modal>

      <Modal isOpen={openNoteModal} onClose={onCloseNoteModal}>
        <ViewNoteModal note = {selectedNote} onSubmit = {handleUpdateNote} onClose={onCloseNoteModal} handleDelete = {handleDeleteNote}/>
      </Modal>
    </div>
  );
}

export default App;
