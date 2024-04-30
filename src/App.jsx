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
    const [todos, setTodo] = useState(testData);
    const [progress, setProgress] = useState(50);

    const handleDataChange = () => {
        //TODO
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
                            handleDataChange={handleDataChange}
                        ></Todo>
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
