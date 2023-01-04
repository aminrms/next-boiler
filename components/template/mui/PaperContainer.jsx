import {Paper} from "@mui/material";
function PaperContainer({
                            children,
                            paperProps
                        }) {
    return (
        <Paper
            {...paperProps}
        >
            {children}
        </Paper>
    );
}

export default PaperContainer;