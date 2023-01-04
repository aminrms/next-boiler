import { Grid } from '@mui/material'
export default function GridContainer({ children, gridProps }) {
    return (
        <Grid
            {...gridProps}
        >
            {children}
        </Grid>
    )
}