import {
    Box,
    Button,
    Container,
    Divider,
    Switch,
    Typography,
    Input,
    LinearProgress,
} from "@mui/material";
import "./App.css";
import { testData } from "./testData";
import Todo from "./components/Todo";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
    const [todos, setTodos] = useState(testData);
    const [progress, setProgress] = useState(50);
    const [moveDoneToEnd, setMoveDoneToEnd] = useState(false);
    const [newTodoTitle, setNewTodoTitle] = useState("");

    const toggleTodoStatus = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isDone: !todo.isDone };
            }
            return todo;
        });

        setTodos(updatedTodos);
        updateProgress(updatedTodos);
    };

    const updateProgress = (updatedTodos) => {
        const done = updatedTodos.filter((todo) => todo.isDone).length;
        setProgress(parseInt((done / updatedTodos.length) * 100));
    };

    const removeTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    const sortByStatus = () => {
        const updatedTodos = todos.sort((a, b) => {
            if (a.isDone && !b.isDone) {
                return 1;
            }
            if (!a.isDone && b.isDone) {
                return -1;
            }
            return 0;
        });

        setTodos(updatedTodos);
        setMoveDoneToEnd(true);
    };

    const sortByAscendingTime = () => {
        const updatedTodos = todos.sort((a, b) => a.createdAt - b.createdAt);

        setTodos(updatedTodos);
        setMoveDoneToEnd(false);
    };

    const createTodo = (event) => {
        event.preventDefault();
        const newTodo = {
            id: nanoid(),
            title: newTodoTitle,
            createdAt: new Date(),
        };

        setTodos([...todos, newTodo]);
    };

    return (
        <Container className="app">
            <Box>
                <Typography variant="h3">Todo List</Typography>
                <Typography variant="h5">Add things to do</Typography>
            </Box>
            <Box>
                <Divider />
                <Box>
                    <Typography>{progress}</Typography>
                    <LinearProgress variant="determinate" value={progress} />
                </Box>
                <Box>
                    {todos.map((todo) => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            toggleTodoStatus={toggleTodoStatus}
                            removeTodo={removeTodo}
                        />
                    ))}
                </Box>
                <Divider />
            </Box>
            <Box className="option">
                <Typography>Move done things to end?</Typography>
                <Switch
                    checked={moveDoneToEnd}
                    onChange={moveDoneToEnd ? sortByAscendingTime : sortByStatus}
                />
            </Box>
            <Box>
                <Typography>Add to list</Typography>
                <form onSubmit={createTodo} className="create-todo-form">
                    <Input
                        value={newTodoTitle}
                        onChange={(event) =>
                            setNewTodoTitle(event.target.value)
                        }
                        sx={{ bgcolor: "rgb(255, 255, 255)", flex: 2 }}
                        disableUnderline
                    />
                    <Button type="submit" variant="contained">
                        +
                    </Button>
                </form>
            </Box>
        </Container>
    );
}

export default App;
