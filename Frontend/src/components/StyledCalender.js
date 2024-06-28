import styled from 'styled-components';

const StyledCalender = styled.div`
    font-family: Arial, sans-serif;
    width: 1000px;
    margin: 0 auto;
    border: 2px solid #ccc;
    padding: 2rem;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 50px
`;

const CalenderGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
`;

const CalenderDay = styled.div`
    position: relative;
    text-align: center;
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;

    &:nth-child(7n) {
        color: red; /* Mengubah warna hari Sabtu */
    }

    &:nth-child(7n-1) {
        color: blue; /* Mengubah warna hari Minggu */
    }

    .pin {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 0.8rem;
        cursor: pointer;
    }

    .reminder-popup {
        position: absolute;
        top: 30px;
        right: -10px;
        width: 200px;
        padding: 10px;
        background-color: #fff;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        z-index: 1;
        display: none;
    }

    &:hover .reminder-popup {
        display: block;
    }
`;

export { StyledCalender, CalenderGrid, CalenderDay };
