import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import PropTypes from "prop-types";
import styles from "./Todo.module.css";

function Todo({ todo, toggleTodoStatus, removeTodo }) {
    return (
        <Box className={styles.root}>
            <Checkbox
                checked={todo.isDone || false}
                onChange={() => toggleTodoStatus(todo.id)}
            />
            <Typography
                className={`${styles.todoTitle} ${todo.isDone && styles.toggleDone}`}
                sx={{ margin: "auto" }}
            >
                {todo.title}
            </Typography>
            <IconButton onClick={() => removeTodo(todo.id)}>
                <ClearRoundedIcon fontSize="medium" color="secondary" />
            </IconButton>
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
