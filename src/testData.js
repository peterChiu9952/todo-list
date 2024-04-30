import { nanoid } from "nanoid";

export const testData = [
    {
        id: nanoid(),
        title: "Learn React.js",
        isDone: true,
        createdAt: new Date(2024, 4, 30, 21, 31, 0)
    },
    {
        id: nanoid(),
        title: "Learn Golang",
        isDone: false,
        createdAt: new Date(2024, 4, 30, 22, 32, 0)
    },
    {
        id: nanoid(),
        title: "Learn Docker",
        isDone: true,
        createdAt: new Date(2024, 4, 30, 23, 33, 0)
    },
    {
        id: nanoid(),
        title: "Learn something else",
        isDone: false,
        createdAt: new Date(2024, 5, 1, 23, 34, 0)
    },
]