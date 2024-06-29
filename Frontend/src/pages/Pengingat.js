import React from 'react';
import {
    ReminderWrapper,
    ReminderHeader,
    ReminderItem,
    ReminderContainer,
} from '../components/StyledPengingat'; // Sesuaikan path untuk StyledPengingat

const Pengingat = () => {
    return (
        <ReminderContainer>
            <ReminderWrapper>
                <ReminderHeader>Today's Events</ReminderHeader>
                <ReminderItem>Team Meeting at 10:00 AM</ReminderItem>
                <ReminderItem>Project Deadline at 3:00 PM</ReminderItem>
                <ReminderItem>Launch Party at 7:00 PM</ReminderItem>
            </ReminderWrapper>
            <ReminderWrapper>
                <ReminderHeader>Today's Deadlines</ReminderHeader>
                <ReminderItem>Submit Financial Report by 5:00 PM</ReminderItem>
                <ReminderItem>Update Website Content by EOD</ReminderItem>
                <ReminderItem>Review Proposal by 12:00 PM</ReminderItem>
            </ReminderWrapper>
        </ReminderContainer>
    );
};

export default Pengingat;
