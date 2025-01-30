import { Grid, TextField, Button } from "@mui/material";

function UserForm() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField fullWidth label="Name" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Email" type="email" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth>
                    Submit
                </Button>
            </Grid>
        </Grid>
    );
}
export default UserForm;
