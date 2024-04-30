import { Box, Checkbox, Typography } from "@mui/material";

function Todo({ todo, handleDataChange }) {
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
                onChange={() => {
                    todo.isDone = !todo.isDone;
                }}
            />
            <Typography sx={{ flexGrow: 1, margin: "auto" }}>
                {todo.title}
            </Typography>
            <button>XX</button>
        </Box>
    );
}

export default Todo;
