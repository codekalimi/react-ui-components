import { Card, CardContent, Typography } from "@mui/material";

function UserCard() {
    return (
        <Card sx={{ maxWidth: 300, padding: 2, margin: "auto" }}>
            <CardContent>
                <Typography variant="h6">Aamir Kalimi</Typography>
                <Typography color="textSecondary">Software Engineer</Typography>
            </CardContent>
        </Card>
    );
}
export default UserCard;
