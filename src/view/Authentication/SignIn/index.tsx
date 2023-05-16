import { useState, MouseEvent } from 'react';
import { Box, FormControl, InputLabel, Input, InputAdornment, IconButton, Typography, Button, Tabs, Tab } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
  }

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function SignIn() {
    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => event.preventDefault();

    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' m='0 10vw' mt='5vh'>
            <Box width='500px' display='flex' justifyContent='center'>
                <Tabs value={value} onChange={handleChange} textColor='inherit' indicatorColor='primary'>
                    <Tab label="일반 회원" {...a11yProps(0)} />
                    <Tab label="관리자" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Box width='500px'>
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
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box width='500px'>
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
                    <Button fullWidth variant='contained' size='large' sx={{ mt: '5vh', backgroundColor: '#1F5869' }}>관리자 로그인</Button>
                    <Button fullWidth variant='outlined' size='large' sx={{ mt: '2.5vh', border: '1px solid #1F5869', color: '#1F5869' }} color='success'>관리자 등록</Button>
                </Box>
            </TabPanel>
        </Box>
    )
}
