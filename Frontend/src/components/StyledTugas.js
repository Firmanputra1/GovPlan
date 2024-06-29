import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f2f5;
`;

export const Header = styled.header`
  width: 100%;
  color: black;
  padding: 20px 0;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2em;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 1em;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const ListContainer = styled.div`
  margin-top: 20px;
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr auto auto;
  gap: 10px;
  align-items: center;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
`;

export const ItemTitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: #333;
`;

export const ItemDate = styled.p`
  margin: 5px 0;
  font-size: 1.2em;
  color: #555;
`;

export const ItemTime = styled.p`
  margin: 5px 0;
  font-size: 1.2em;
  color: #555;
`;

export const ItemDescription = styled.p`
  margin: 5px 0;
  font-size: 1em;
  color: #777;
`;

export const EditButton = styled(Button)`
  background-color: #28a745;
`;

export const DeleteButton = styled(Button)`
  background-color: #dc3545;
`;
