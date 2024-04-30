import { Box, Checkbox, Typography } from "@mui/material";
import styles from "./Todo.module.css";

function Todo({ todo, toggleTodoStatus, removeTodo }) {
    return (
        <Box
            sx={{
                display: "flex",
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "4px",
                margin: "8px 0",
            }}
        >
            <Checkbox
                checked={todo.isDone}
                onChange={() => toggleTodoStatus(todo.id)}
            />
            <Typography className={`${todo.isDone && styles.toggleDone}`} sx={{ flexGrow: 1, margin: "auto" }}>
                {todo.title}
            </Typography>
            <button onClick={() => removeTodo(todo.id)}>XX</button>
        </Box>
    );
}

export default Todo;
