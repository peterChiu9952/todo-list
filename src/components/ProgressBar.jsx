import { Box, LinearProgress, Typography } from "@mui/material";
import PropTypes from "prop-types";

function ProgressBar({ value }) {
    return (
        <Box>
            <Typography>{`${value}%`}</Typography>
            <LinearProgress variant="determinate" value={value} />
        </Box>
    );
}

ProgressBar.propTypes = {
    value: PropTypes.number,
};

export default ProgressBar;
