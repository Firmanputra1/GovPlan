import React, { useState } from 'react';
import {
    NoteContainer,
    NoteTitle,
    NoteContent,
    NoteDate,
    AddNoteButton,
    NoteInputContainer,
    NoteInput
} from '../components/StyledCatatan';

const Catatan = () => {
    const [notes, setNotes] = useState([]);
    const [noteContent, setNoteContent] = useState('');

    const handleAddNote = () => {
        if (noteContent.trim() !== '') {
            const newNote = {
                content: noteContent,
                date: new Date().toLocaleDateString()
            };
            setNotes([...notes, newNote]);
            setNoteContent('');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <h1>Catatan Saya</h1>
            <NoteInputContainer>
                <NoteInput
                    rows="4"
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    placeholder="Tulis catatan Anda di sini..."
                />
                <AddNoteButton onClick={handleAddNote}>Tambah Catatan</AddNoteButton>
            </NoteInputContainer>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {notes.map((note, index) => (
                    <NoteContainer key={index}>
                        <NoteTitle>Catatan {index + 1}</NoteTitle>
                        <NoteContent>{note.content}</NoteContent>
                        <NoteDate>{note.date}</NoteDate>
                    </NoteContainer>
                ))}
            </div>
        </div>
    );
};

export default Catatan;
