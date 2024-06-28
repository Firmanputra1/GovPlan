import React from 'react';
import { StyledSidebar, Nav } from '../components/StyledSidebar'; // Sesuaikan path-nya

const Sidebar = ({ onSidebarClick }) => {
    const handleItemClick = (contentType) => {
        onSidebarClick(contentType); // Memanggil fungsi yang diberikan dari prop onSidebarClick
    };

    return (
        <StyledSidebar>
            <Nav>
                <ul>
                    <li><a href="#" onClick={() => handleItemClick('home')}>Beranda</a></li>
                    <br />
                    <li><a href="#" onClick={() => handleItemClick('calender')}>Calender</a></li>
                    <br />
                    <li><a href="#" onClick={() => handleItemClick('tasks')}>Tugas</a></li>
                    <br />
                    <li><a href="#" onClick={() => handleItemClick('reminders')}>Pengingat</a></li>
                    <br />
                    <li><a href="#" onClick={() => handleItemClick('notes')}>Catatan</a></li>
                </ul>
            </Nav>
        </StyledSidebar>
    );
}

export default Sidebar;
