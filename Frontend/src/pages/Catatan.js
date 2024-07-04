import React, { useState } from 'react';
import {
    Container,
    Header,
    NoteContainer,
    NoteTitle,
    NoteImage,
    NoteDate,
    AddNoteButton,
    NoteInputContainer,
    FileInput,
    FileInputLabel,
    FileNote,
} from '../components/StyledCatatan';

const Catatan = () => {
    const [notes, setNotes] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleAddNote = () => {
        if (selectedFile) {
            const newNote = {
                file: URL.createObjectURL(selectedFile),
                date: new Date().toLocaleDateString(),
            };
            setNotes([...notes, newNote]);
            setSelectedFile(null);
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <Container>
            <Header>Catatan Saya</Header>
            <NoteInputContainer>
                <FileInputLabel htmlFor="file-input">Browse your computer: (Max: 40MiB)</FileInputLabel>
                <FileInput id="file-input" type="file" onChange={handleFileChange} />
                <AddNoteButton onClick={handleAddNote}>Tambah Catatan</AddNoteButton>
            </NoteInputContainer>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {notes.map((note, index) => (
                    <NoteContainer key={index}>
                        <NoteTitle>Catatan {index + 1}</NoteTitle>
                        {note.file && <NoteImage src={note.file} alt="note file" />}
                        <NoteDate>{note.date}</NoteDate>
                    </NoteContainer>
                ))}
            </div>
        </Container>
    );
};

export default Catatan;
