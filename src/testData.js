import { v4 as uuidv4 } from 'uuid';

export const testData = [
    {
        id: uuidv4(),
        title: "Learn React.js",
        isDone: true,
        createdAt: new Date(1714127393000)
    },
    {
        id: uuidv4(),
        title: "Learn Golang",
        isDone: false,
        createdAt: new Date(1714300193000)
    },
    {
        id: uuidv4(),
        title: "Learn Docker",
        isDone: true,
        createdAt: new Date(1714386593000)
    },
    {
        id: uuidv4(),
        title: "Learn something else",
        isDone: false,
        createdAt: new Date(1714472993000)
    },
]