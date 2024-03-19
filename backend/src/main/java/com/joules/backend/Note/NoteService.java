package com.joules.backend.Note;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import lombok.NonNull;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class NoteService {
    private final NoteRepository noteRepository;

    // Create a note
    public Note createNote(@NonNull Note note) {
        return noteRepository.save(note); 
    }

    // Update a note 
    public Note updateNote(Note note) {
        Integer noteId = Objects.requireNonNull(note.getId());
        Note existingNote = noteRepository.findById(noteId).orElse(null); 
        existingNote.setTitle(note.getTitle()); 
        existingNote.setContent(note.getContent());
        existingNote.setArchived(note.getArchived());
        existingNote.setCategories(note.getCategories());
        return noteRepository.save(existingNote);
    }

    // Delete a note 
    public String deleteNote(@NonNull Integer id) {
        noteRepository.deleteById(id); 
        return "Note deleted"; 
    }

    // Get all notes 
    public List<Note> getNotes() {
        return noteRepository.findAll(); 
    }

    // Get all archived notes 
    public List<Note> getArchivedNotes() {
        return noteRepository.findByArchivedTrue(); 
    }

    // Get all active notes 
    public List<Note> getActiveNotes() {
        return noteRepository.findByArchivedFalse(); 
    }

    // Get a note by id 
    public Note getNoteById(@NonNull Integer id) {
        return noteRepository.findById(id).orElse(null); 
    }

}
