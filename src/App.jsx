import {
    Box,
    Button,
    Divider,
    Typography,
    Input,
    ThemeProvider,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import styles from "./App.module.css";
import { testData } from "./testData";
import Todo from "./components/Todo/Todo";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import { theme } from "./theme";
import { CustomSwitch } from "./components/CustomSwitch/CustomSwitch";

function App() {
    const [todos, setTodos] = useState(testData);
    const [progress, setProgress] = useState(0);
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
    };

    const updateProgress = (updatedTodos) => {
        const done = updatedTodos.filter((todo) => todo.isDone).length;
        setProgress(parseInt((done / updatedTodos.length) * 100));
    };

    const removeTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    const sortByStatus = (updatedTodos) => {
        updatedTodos.sort((a, b) => {
            if (a.isDone && !b.isDone) {
                return 1;
            }
            if (!a.isDone && b.isDone) {
                return -1;
            }
            return 0;
        });
    };

    const sortByAscendingTime = (updatedTodos) => {
        updatedTodos.sort((a, b) => a.createdAt - b.createdAt);
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

    useEffect(() => {
        updateProgress(todos);
    }, [todos]);

    useEffect(() => {
        const updatedTodos = todos;

        sortByAscendingTime(updatedTodos);
        if (moveDoneToEnd) {
            sortByStatus(updatedTodos);
        }

        setTodos(updatedTodos);
    }, [todos]);

    return (
        <ThemeProvider theme={theme}>
            <Box className={styles.root}>
                <Box className={styles.header}>
                    <Typography variant="h3">Todo List</Typography>
                    <Typography variant="subtitle1">
                        Add things to do
                    </Typography>
                </Box>
                <Divider />
                <Box className={styles.progressBar}>
                    <ProgressBar value={progress} />
                </Box>
                <Box className={styles.todoList}>
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
                <Box className={styles.option}>
                    <Typography>Move done things to end?</Typography>
                    <CustomSwitch
                        checked={moveDoneToEnd}
                        onChange={() => {
                            moveDoneToEnd
                                ? sortByAscendingTime(todos)
                                : sortByStatus(todos);
                            setMoveDoneToEnd(!moveDoneToEnd);
                        }}
                    />
                </Box>
                <Box className={styles.addToList}>
                    <Typography>Add to list</Typography>
                    <form
                        onSubmit={createTodo}
                        className={styles.createTodoForm}
                    >
                        <Input
                            value={newTodoTitle}
                            onChange={(event) =>
                                setNewTodoTitle(event.target.value)
                            }
                            className={styles.titleInput}
                            disableUnderline
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            className={styles.submit}
                        >
                            <AddRoundedIcon fontSize="large" />
                        </Button>
                    </form>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
