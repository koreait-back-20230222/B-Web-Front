import { useState, MouseEvent } from 'react';
import { Box, FormControl, InputLabel, Input, InputAdornment, IconButton, Typography, Button } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

export default function SignIn() {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => event.preventDefault();

    return (
        <Box display='flex' justifyContent='center' alignItems='center' m='0 10vw' mt='5vh'>
            <Box width='500px' p='24px'>
                <FormControl fullWidth variant='standard' sx={{ mt: '2.5vh' }}>
                    <InputLabel>이메일</InputLabel>
                    <Input type='email' />
                </FormControl>
                <FormControl fullWidth variant='standard' sx={{ mt: '2.5vh' }}>
                    <InputLabel>비밀번호</InputLabel>
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    onClick={() => setShowPassword((show) => !show)}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button fullWidth variant='contained' size='large' sx={{ mt: '5vh', backgroundColor: '#1F5869' }}>로그인</Button>
                <Button fullWidth variant='outlined' size='large' sx={{ mt: '2.5vh', border: '1px solid #1F5869', color: '#1F5869' }} color='success'>회원 가입</Button>
            </Box>
        </Box>
    )
}
