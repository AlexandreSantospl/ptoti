import { Box, Button, Divider, Typography } from "@mui/material";
import { InputLogin } from "../../shared/components/inputLogin/InputLogin";
import { useEffect, useState } from "react";
import { ButtonLogin } from "../../shared/components/buttonInput/ButtonLogin";

export const TelaDeLogin = () => {

    const [email, setEmail] = useState('')

    useEffect(() => {
        console.log(email)
    }, [email])

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <form action="" style={{
                        backgroundColor: '#f6f6f6',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        minWidth: 600
                    }}>

                        <Typography variant="h4" sx={{ marginBottom: "4vh", fontWeight: 'bold' }}>Bem Vindo</Typography>

                        <InputLogin
                            label="Email"
                            value={email}
                            onChange={newValue => setEmail(newValue)} />

                        <Divider sx={{ padding: 2, border: 'none' }} />

                        <ButtonLogin type="button" onClick={() => console.log()}>Login</ButtonLogin>
                    </form>
                </Box>
            </Box>
        </>
    );
}
