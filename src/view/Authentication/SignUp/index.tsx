import { useState, MouseEvent } from 'react';
import { Box, Chip, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, Input, InputAdornment, IconButton, OutlinedInput, Button, Switch, styled, alpha, Typography, Divider } from '@mui/material';
import { AddCircleOutline, ArrowDropDown, ArrowDropUp, VisibilityOff, Visibility, TaskAlt } from '@mui/icons-material';
import { MuiFileInput } from 'mui-file-input';

const CustomSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: '#77C8BF',
      '&:hover': {
        backgroundColor: alpha('#77C8BF', theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#77C8BF',
    },
  }));

export default function SignUp() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(false);
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState<boolean>(false);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => event.preventDefault();

    return (
    <Box display='flex' justifyContent='center' alignItems='center' m='0 10vw' mt='5vh' mb='5vh'>
            <Box width='500px' p='24px'>
                {/* 이메일 */}
                <FormControl fullWidth variant='standard' sx={{ mt: '2.5vh' }}>
                    <InputLabel>이메일</InputLabel>
                    <Input
                        type='text'
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    onClick={() => {}}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    <TaskAlt />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                {/* 비밀번호 */}
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
                {/* 비밀번호 확인 */}
                <FormControl fullWidth variant='standard' sx={{ mt: '2.5vh' }}>
                    <InputLabel>비밀번호 확인</InputLabel>
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
                {/* 닉네임 */}
                <FormControl fullWidth variant='standard' sx={{ mt: '2.5vh' }}>
                    <InputLabel>닉네임</InputLabel>
                    <Input
                        type='text'
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    onClick={() => {}}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    <TaskAlt />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                {/* 이름 */}
                <FormControl fullWidth variant='standard' sx={{ mt: '2.5vh' }}>
                    <InputLabel>이름</InputLabel>
                    <Input type='text' />
                </FormControl>
                {/* 휴대 전화번호 */}
                <FormControl fullWidth variant='standard' sx={{ mt: '2.5vh' }}>
                    <InputLabel>휴대전화 번호</InputLabel>
                    <Input
                        type='text'
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    onClick={() => {}}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    <TaskAlt />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Box mt='2.5vh' display='flex' flexDirection='column' alignItems='center'>
                    <Box component='img' mb='1.5vh' border='1px solid black' borderRadius='50%' width='200px' height='200px' bgcolor='red'>
                        
                    </Box>
                    <MuiFileInput label='프로필 사진' fullWidth value={null} onChange={() => {}} />
                </Box>
                {/* 자기소개 */}
                <FormControl fullWidth variant='outlined' sx={{ mt: '2.5vh' }}>
                    <InputLabel>자기소개</InputLabel>
                    <OutlinedInput type='text' multiline minRows={3} label="자기소개" />
                </FormControl>
                {/* 휴대 전화번호 */}
                <FormControl fullWidth variant='standard' sx={{ mt: '2.5vh' }}>
                    <InputLabel>해시태그</InputLabel>
                    <Input
                        type='text'
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    onClick={() => {}}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    <AddCircleOutline />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Box>
                    <Chip sx={{ mt: '1vh', ml: '0.25vh', mr: '0.25vh' }} label="# HashTag" variant="outlined" onDelete={() => {}} />
                    <Chip sx={{ mt: '1vh', ml: '0.25vh', mr: '0.25vh' }} label="# HashTag" variant="outlined" onDelete={() => {}} />
                </Box>
                <FormGroup sx={{ display: 'flex' }}>
                    <FormControlLabel sx={{ mt: '2.5vh' }} control={<CustomSwitch defaultChecked color="default" />} label="채팅 수락" labelPlacement="start" />
                    <Box border='1px solid rgba(0, 0, 0, 0.3)' borderRadius='10px' p='1vw' mt='2.5vh'>
                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant='h5'>개인 정보 처리 방침</Typography>
                            <IconButton onClick={() => setShowPrivacyPolicy(!showPrivacyPolicy)}>
                                {showPrivacyPolicy ? <ArrowDropUp /> : <ArrowDropDown />}
                            </IconButton>
                        </Box>
                        { showPrivacyPolicy && (
                            <Box mb='1vh' mt='1vw'>
                                <Divider />
                                <Typography variant='h5' mb='1vh' mt='1vw'>{'개인정보의 처리목적'}</Typography>
                                <Typography variant='body2' mb='0.5vh'>
                                    {'<개인정보처리자명>은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는' +
                                    '다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」' +
                                    '제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.'}
                                </Typography>
                                <Typography variant='h6' mb='0.5vh'>{'1. 회원 가입 및 관리'}</Typography>
                                <Typography variant='body2' mb='0.5vh'>
                                    {'회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용' +
                                    '방지, 만 14세 미만 아동의 개인정보 처리 시 법정대리인의 동의여부 확인, 각종 고지·통지, 고충처리' +
                                    '목적으로 개인정보를 처리합니다.'}
                                </Typography>
                                <Typography variant='h6' mb='0.5vh'>{'2. 재화 또는 서비스 제공'}</Typography>
                                <Typography variant='body2' mb='0.5vh'>
                                    {'물품배송, 서비스 제공, 계약서·청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금' +
                                    '결제·정산, 채권추심의 목적으로 개인정보를 처리합니다. ' +
                                    '<해당 개인정보처리자의 개인정보 처리업무> ' + 
                                    '<개인정보 처리업무에 따른 처리목적>으로 개인정보를 처리합니다.'}
                                </Typography>
                            </Box>
                        ) }
                        
                        <FormControlLabel control={<Checkbox />} label="개인정보 처리 동의" />
                    </Box>
                </FormGroup>
                <Button fullWidth variant='contained' size='large' sx={{ mt: '2.5vh', backgroundColor: '#1F5869', color: '#ffffff' }}>회원 가입</Button>
            </Box>
        </Box>
    )
}
