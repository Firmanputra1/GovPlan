import styled from 'styled-components';

export const ReminderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: #f0f2f5;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ReminderWrapper = styled.div`
    background: #e3f2fd;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ReminderHeader = styled.h3`
    font-size: 18px;
    margin-bottom: 10px;
    color: #1976d2;
    border-bottom: 1px solid #1976d2;
    padding-bottom: 5px;
`;

export const ReminderItem = styled.p`
    margin: 5px 0;
    color: #333;
    font-size: 16px;
    padding-left: 20px;
    position: relative;

    &:before {
        content: '•';
        color: #1976d2;
        position: absolute;
        left: 0;
        top: 5px;
    }
`;