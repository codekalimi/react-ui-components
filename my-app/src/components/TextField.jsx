import TextField from "@mui/material/TextField";

function MyInput() {
    return (
        <div>
            <TextField variant="outlined" label="Outlined" fullWidth/>
            <TextField variant="filled" label="Filled" fullWidth/>
            <TextField variant="standard" label="Standard" fullWidth/>
        </div>
);
}
export default MyInput;
