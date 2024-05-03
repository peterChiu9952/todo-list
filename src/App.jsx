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
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import { theme } from "./theme";
import { CustomSwitch } from "./components/CustomSwitch/CustomSwitch";

function App() {
    const [todos, setTodos] = useState(testData);
    const [progress, setProgress] = useState(0);
    const [moveDoneToEnd, setMoveDoneToEnd] = useState(false);
    const [newTodoTitle, setNewTodoTitle] = useState("");
    const todoListRef = useRef(undefined);
    const todoCreatedRef = useRef(false);

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
        const value = parseInt((done / updatedTodos.length) * 100);
        setProgress(isNaN(value) ? 0 : value);
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
            id: uuidv4(),
            title: newTodoTitle,
            createdAt: new Date(),
        };
        todoCreatedRef.current = true;
        setTodos([...todos, newTodo]);
        setNewTodoTitle("");
    };

    const scrollTodoListToBottom = () => {
        todoListRef.current.scrollTo({
            top: todoListRef.current.scrollHeight,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        updateProgress(todos);
    }, [todos]);

    // By default, todos are sorted by time. If the user selects "move Done To End", they are sorted by whether they are completed.
    useEffect(() => {
        const updatedTodos = todos;

        sortByAscendingTime(updatedTodos);
        if (moveDoneToEnd) {
            sortByStatus(updatedTodos);
        }

        setTodos(updatedTodos);
    }, [todos]);

    // After adding a todo, scroll to the bottom of the todo list
    useEffect(() => {
        if (todoCreatedRef.current) {
            scrollTodoListToBottom();
            todoCreatedRef.current = false;
        }
    }, [todos]);

    return (
        <ThemeProvider theme={theme}>
            <Box className={styles.root}>
                {/* header */}
                <Box className={styles.header}>
                    <Typography variant="h3">Todo List</Typography>
                    <Typography variant="subtitle1">
                        Add things to do
                    </Typography>
                </Box>
                <Divider />
                {/* progress bar */}
                <Box className={styles.progressBar}>
                    <ProgressBar value={progress} />
                </Box>
                {/* todo list */}
                <Box className={styles.todoList} ref={todoListRef}>
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
                {/* The option whether to move completion todo to the end */}
                <Box className={styles.option}>
                    <Typography>Move done things to end?</Typography>
                    <CustomSwitch
                        data-testid="moveDoneToEnd"
                        checked={moveDoneToEnd}
                        onChange={() => {
                            moveDoneToEnd
                                ? sortByAscendingTime(todos)
                                : sortByStatus(todos);
                            setMoveDoneToEnd(!moveDoneToEnd);
                        }}
                    />
                </Box>
                {/* Add new todo */}
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
                            data-testid="addTodoInput"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            className={styles.submit}
                            data-testid="addTodoButton"
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
