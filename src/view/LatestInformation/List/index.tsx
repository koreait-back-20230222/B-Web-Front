import { Box, Pagination, Divider, FormControl, InputLabel, Select, SelectChangeEvent, MenuItem, IconButton } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react'
import { LATEST_INFORMATION } from 'src/mock'
import { useNavigate } from 'react-router-dom';

export default function LatesInformationList() {

    const navigator = useNavigate();
    const [age, setAge] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <Box p='0 10vw' mt='2.5vh'>
            <Box p='0 2.5vw' display='flex' justifyContent='space-between' alignItems='center'>
                <FormControl sx={{ width: '100px' }}>
                    <InputLabel id="demo-simple-select-label">정렬</InputLabel>
                    <Select
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <IconButton onClick={() => navigator('/lates-information/post')}>
                    <CreateIcon />
                </IconButton>
            </Box>
            <Box display='flex' p='4px' mt='2.5vh' mb='1vh'>
                <Box flex='1' display='flex' justifyContent='center' alignItems='center'>번호</Box>
                <Box flex='6' display='flex' justifyContent='center' alignItems='center'>게시물 제목</Box>
                <Box flex='2' display='flex' justifyContent='center' alignItems='center'>작성자</Box>
                <Box flex='1' display='flex' justifyContent='center' alignItems='center'><RemoveRedEyeIcon /></Box>
                <Box flex='1' display='flex' justifyContent='center' alignItems='center'><CommentIcon /></Box>
                <Box flex='1' display='flex' justifyContent='center' alignItems='center'><FavoriteIcon /></Box>
            </Box>
            <Divider />
            {LATEST_INFORMATION.map(item => (
                <Box className='hover' display='flex' p='4px' mt='1vh' pb='1vh' borderBottom='1px solid rgba(0, 0, 0, 0.05)'>
                    <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.informationBoardNumber}</Box>
                    <Box flex='6' display='flex' justifyContent='center' alignItems='center'>{item.informationBoardTitle}</Box>
                    <Box flex='2' display='flex' justifyContent='center' alignItems='center'>{item.boardWriterNickname}</Box>
                    <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.viewCount}</Box>
                    <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.commentCount}</Box>
                    <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.heartCount}</Box>
                </Box>
            ))}
            <Box mt='2.5vh' display='flex' justifyContent='center'>
                <Pagination count={10} />
            </Box>
        </Box>
    )
}
