import React from 'react';
import NoteCard from './NoteCard';

const Vault = ({ notes, setSelectedNote, setOpenNoteModal }) => {
    return (
        <div className="max-w-[1240px] w-full mx-auto bg-slate-300 p-4 overflow-y-auto rounded-lg border border-black" style={{ maxHeight: 'calc(100vh - 100px)' }}>
            <div className="grid grid-cols-3 gap-4">
                {notes.map(note => (
                    <NoteCard key={note.id} note={note} setSelectedNote={setSelectedNote} setOpenNoteModal = {setOpenNoteModal} />
                ))}
            </div>
        </div>
    );
};

export default Vault;
