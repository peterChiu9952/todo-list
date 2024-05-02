import { Box, LinearProgress, Typography } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./ProgressBar.module.css"

function ProgressBar({ value }) {
    return (
        <Box className={styles.root}>
            <Box >
                <Typography>{`${value}%`}</Typography>
            </Box>
            <Box className={styles.bar}>
                <LinearProgress variant="determinate" value={value} />
            </Box>
        </Box>
    );
}

ProgressBar.propTypes = {
    value: PropTypes.number,
};

export default ProgressBar;
