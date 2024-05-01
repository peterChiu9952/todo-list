import { Box, Checkbox, Typography } from "@mui/material";
import PropTypes from "prop-types";
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
                checked={todo.isDone || false}
                onChange={() => toggleTodoStatus(todo.id)}
            />
            <Typography
                className={`${todo.isDone && styles.toggleDone}`}
                sx={{ flexGrow: 1, margin: "auto" }}
            >
                {todo.title}
            </Typography>
            <button onClick={() => removeTodo(todo.id)}>XX</button>
        </Box>
    );
}

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        isDone: PropTypes.bool,
        createdAt: PropTypes.instanceOf(Date),
    }),
    toggleTodoStatus: PropTypes.func,
    removeTodo: PropTypes.func,
};

export default Todo;
