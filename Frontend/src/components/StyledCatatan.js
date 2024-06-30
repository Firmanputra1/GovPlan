import styled from 'styled-components';

export const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensure space is distributed */
  align-items: center;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  max-width: 300px;
  width: 100%;
  height: 200px; /* Set a fixed height for the container */
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const NoteTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  color: #333;
  border-bottom: 2px solid #007bff;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

export const NoteContent = styled.p`
  font-size: 0.9em;
  color: #666;
  margin-top: 10px;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: pre-wrap;
  flex-grow: 1; /* Allow content to grow and fill space */
`;

export const NoteDate = styled.span`
  font-size: 0.8em;
  color: #999;
  align-self: flex-end;
`;

export const AddNoteButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const NoteInputContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 20px 0;
`;

export const NoteInput = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
  resize: none;
  box-sizing: border-box;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;
