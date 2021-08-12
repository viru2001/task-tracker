import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';

export const AddTaskTextField = styled(TextField)`
    width: 40vw;
`

export const AddTaskContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,auto);
    margin-top: 15vh;
    grid-gap : 2vw;
    justify-content: center;
    align-items: center;
`

export const AddTaskBtn = styled(Button)`
    margin-left : 2vw;
    grid-column: 1/3;
`
export const NoTasksHeading = styled.h2`
     color: #3f51b5;
    text-align: center;
    margin-top: 10vh;
`

export const TaskTable = styled.table`
    margin: 5vh auto;
    border-collapse: collapse;
    color: #3f51b5;
    /* table-layout: fixed;
    width: 100%; */
`

export const THead = styled.thead`
    border-bottom: solid 2px;
`;

export const Tr = styled.tr`
    border-bottom: solid 1px;
`;

export const TaskInfo = styled.div`
    max-width: 50vw;
    word-wrap: break-word;
`;

export const ActionBtn = styled(Button)`
      margin: 0 1vw;
`
export const DisplayTask = styled.div`
    display: flex;
    flex-direction: column;
`

export const DisplayTaskDone = styled.div`
display: flex;
flex-direction: column;
color : #50C878;
`