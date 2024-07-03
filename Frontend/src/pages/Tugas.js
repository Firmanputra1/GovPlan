import React, { useState } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  Button,
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  EditButton,
  DeleteButton,
} from '../components/StyledTugas';

const Tugas = () => {
  const [agendaItems, setAgendaItems] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [formState, setFormState] = useState({
    title: '',
    date: '',
    time: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split('T')[0];
    if (formState.date < today) {
      alert('Tidak dapat memilih tanggal yang sudah lewat.');
      return;
    }
    if (isEditing !== null) {
      const updatedItems = agendaItems.map((item, index) =>
        index === isEditing ? formState : item
      );
      setAgendaItems(updatedItems);
      setIsEditing(null);
    } else {
      setAgendaItems([...agendaItems, formState]);
    }
    setFormState({ title: '', date: '', time: '', description: '' });
  };

  const handleEdit = (index) => {
    setIsEditing(index);
    setFormState(agendaItems[index]);
  };

  const handleDelete = (index) => {
    setAgendaItems(agendaItems.filter((_, i) => i !== index));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <Container>
      <Header>
        <Title>Agenda Perusahaan</Title>
      </Header>
      <Content>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Nama Agenda</Label>
            <Input
              type="text"
              name="title"
              value={formState.title}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Tanggal Agenda</Label>
            <Input
              type="date"
              name="date"
              value={formState.date}
              onChange={handleInputChange}
              min={today}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Waktu Agenda</Label>
            <Input
              type="time"
              name="time"
              value={formState.time}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Deskripsi Agenda</Label>
            <TextArea
              name="description"
              value={formState.description}
              onChange={handleInputChange}
              rows="4"
            />
          </FormGroup>
          <Button type="submit">
            {isEditing !== null ? 'Simpan Perubahan' : 'Tambah Agenda'}
          </Button>
        </Form>
        <TableContainer>
          <Table>
            <thead>
              <TableRow>
                <TableHeader>Nama Agenda</TableHeader>
                <TableHeader>Tanggal</TableHeader>
                <TableHeader>Waktu</TableHeader>
                <TableHeader>Deskripsi</TableHeader>
                <TableHeader>Aksi</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {agendaItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>
                    <EditButton onClick={() => handleEdit(index)}>Edit</EditButton>
                    <DeleteButton onClick={() => handleDelete(index)}>Hapus</DeleteButton>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </Content>
    </Container>
  );
};

export default Tugas;
