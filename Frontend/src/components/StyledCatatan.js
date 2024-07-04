import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: auto;
`;

export const Header = styled.h1`
    color: #333;
    margin-bottom: 20px;
`;

export const NoteContainer = styled.div`
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 15px;
    margin: 10px;
    width: 300px;
    text-align: center;
`;

export const NoteTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 10px;
`;

export const NoteImage = styled.img`
    max-width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const NoteDate = styled.span`
    font-size: 14px;
    color: #666;
`;

export const AddNoteButton = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
        background-color: #45a049;
    }
`;

export const NoteInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
`;

export const FileInput = styled.input`
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const FileInputLabel = styled.label`
    font-size: 14px;
    color: #333;
`;

export const FileNote = styled.div`
    font-size: 12px;
    color: #777;
    margin-top: 5px;
`;
