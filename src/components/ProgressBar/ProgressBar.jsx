import { Box, LinearProgress, Typography, linearProgressClasses } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';
import styles from "./ProgressBar.module.css"

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 12,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "rgb(255, 255, 255)",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
    },
  }));

function ProgressBar({ value }) {
    return (
        <Box className={styles.root}>
            <Box >
                <Typography data-testid="progressValue">{`${value}%`}</Typography>
            </Box>
            <Box className={styles.bar}>
                <CustomLinearProgress variant="determinate" value={value} />
            </Box>
        </Box>
    );
}

ProgressBar.propTypes = {
    value: PropTypes.number,
};

export default ProgressBar;
