import { nanoid } from "nanoid";

export const testData = [
    {
        id: nanoid(),
        title: "Learn React.js",
        isDone: true,
        createdAt: new Date(1714127393000)
    },
    {
        id: nanoid(),
        title: "Learn Golang",
        isDone: false,
        createdAt: new Date(1714300193000)
    },
    {
        id: nanoid(),
        title: "Learn Docker",
        isDone: true,
        createdAt: new Date(1714386593000)
    },
    {
        id: nanoid(),
        title: "Learn something else",
        isDone: false,
        createdAt: new Date(1714472993000)
    },
]