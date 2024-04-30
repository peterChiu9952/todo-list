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

function App() {
    const [todos, setTodos] = useState(testData);
    const [progress, setProgress] = useState(50);

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
                <Switch defaultChecked />
            </Box>
            <Box>
                <Typography>Add to list</Typography>
                <Box className="new-todo">
                    <Input
                        sx={{ bgcolor: "rgb(255, 255, 255)", flex: 2 }}
                        disableUnderline
                    />
                    <Button variant="contained">+</Button>
                </Box>
            </Box>
        </Container>
    );
}

export default App;
