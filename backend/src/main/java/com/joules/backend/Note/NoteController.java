package com.joules.backend.Note;

import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping; 

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class NoteController {

    private final NoteService noteService; 

    @PostMapping("/create")
    public Note createNote(@RequestBody Note note) {
        return noteService.createNote(note); 
    }

    @GetMapping("/notes")
    public List<Note> getNotes() {
        return noteService.getNotes(); 
    }

    @GetMapping("/notes/archived")
    public List<Note> getArchivedNotes() {
        return noteService.getArchivedNotes(); 
    }

    @GetMapping("/notes/active")
    public List<Note> getActiveNotes() {
        return noteService.getActiveNotes(); 
    }

    @GetMapping("/note/{id}")
    public Note getNoteById(@PathVariable Integer id) {
        return noteService.getNoteById(id); 
    }

    @PutMapping("/update")
    public Note updateNote(@RequestBody Note note) {
        return noteService.updateNote(note); 
    }

    @DeleteMapping("/delete/{id}")
    public String deleteNote(@PathVariable Integer id) {
        return noteService.deleteNote(id); 
    }
}
