import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Form = styled.form`
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  background-color: #007bff;
  color: white;
  padding: 10px;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const EditButton = styled.button`
  margin-right: 5px;
  padding: 5px 10px;
  background-color: #ffc107;
  color: white;
  border: none;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
`;
