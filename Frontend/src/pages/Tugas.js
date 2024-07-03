import React, { useState, useEffect } from "react";
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
} from "../components/StyledTugas";

const Tugas = () => {
  const [agendaItems, setAgendaItems] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [formState, setFormState] = useState({
    nama_agenda: "",
    tanggal_agenda: "",
    waktu_agenda: "",
    deskripsi_agenda: "",
    id_user: 1, // Assuming you have a user with id 1
  });

  useEffect(() => {
    fetchAgendas();
  }, []);

  const fetchAgendas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/agendas");
      const data = await response.json();
      setAgendaItems(data);
    } catch (error) {
      console.error("Error fetching agendas:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nama_agenda, tanggal_agenda, waktu_agenda, deskripsi_agenda } =
      formState;
    const today = new Date().toISOString().split("T")[0];

    if (tanggal_agenda < today) {
      alert("Tidak dapat memilih tanggal yang sudah lewat.");
      return;
    }

    if (isEditing !== null) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/agendas/${isEditing}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formState),
          }
        );
        const updatedAgenda = await response.json();
        setAgendaItems(
          agendaItems.map((item) =>
            item.id_agenda === isEditing ? updatedAgenda : item
          )
        );
        setIsEditing(null);
      } catch (error) {
        console.error("Error updating agenda:", error);
      }
    } else {
      try {
        const response = await fetch("http://localhost:5000/api/agendas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        });
        const newAgenda = await response.json();
        setAgendaItems([...agendaItems, newAgenda]);
      } catch (error) {
        console.error("Error creating agenda:", error);
      }
    }

    setFormState({
      nama_agenda: "",
      tanggal_agenda: "",
      waktu_agenda: "",
      deskripsi_agenda: "",
      id_user: 1,
    });
  };

  const handleEdit = (agenda) => {
    setIsEditing(agenda.id_agenda);
    setFormState(agenda);
  };

  const handleDelete = async (id_agenda) => {
    try {
      await fetch(`http://localhost:5000/api/agendas/${id_agenda}`, {
        method: "DELETE",
      });
      setAgendaItems(
        agendaItems.filter((item) => item.id_agenda !== id_agenda)
      );
    } catch (error) {
      console.error("Error deleting agenda:", error);
    }
  };

  const today = new Date().toISOString().split("T")[0];

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
              name="nama_agenda"
              value={formState.nama_agenda}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Tanggal Agenda</Label>
            <Input
              type="date"
              name="tanggal_agenda"
              value={formState.tanggal_agenda}
              onChange={handleInputChange}
              min={today}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Waktu Agenda</Label>
            <Input
              type="time"
              name="waktu_agenda"
              value={formState.waktu_agenda}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Deskripsi Agenda</Label>
            <TextArea
              name="deskripsi_agenda"
              value={formState.deskripsi_agenda}
              onChange={handleInputChange}
              rows="4"
            />
          </FormGroup>
          <Button type="submit">
            {isEditing !== null ? "Simpan Perubahan" : "Tambah Agenda"}
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
<<<<<<< HEAD
              {agendaItems.map((item) => (
                <TableRow key={item.id_agenda}>
                  <TableCell>{item.nama_agenda}</TableCell>
                  <TableCell>{item.tanggal_agenda}</TableCell>
                  <TableCell>{item.waktu_agenda}</TableCell>
                  <TableCell>{item.deskripsi_agenda}</TableCell>
                  <TableCell>
                    <EditButton onClick={() => handleEdit(item)}>
                      Edit
                    </EditButton>
                    <DeleteButton onClick={() => handleDelete(item.id_agenda)}>
                      Hapus
                    </DeleteButton>
=======
              {agendaItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>
                    <EditButton onClick={() => handleEdit(index)}>Edit</EditButton>
                    <DeleteButton onClick={() => handleDelete(index)}>Hapus</DeleteButton>
>>>>>>> 5f79818a0dd826613cedeca881649578d0eba86d
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
