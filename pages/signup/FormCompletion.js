import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const accountStatus = ['Your account was successfully created ', 'We encountered an issue creating you account'];
export default function PaymentForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                {accountStatus[0]}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                    <CheckOutlinedIcon />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
