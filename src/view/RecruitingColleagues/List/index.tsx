import { Box, Button, Divider, FormControl, InputLabel, Select, SelectChangeEvent, MenuItem } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react'
import { LATEST_INFORMATION, RECRUTING_COLLEAGUES } from 'src/mock'

export default function LatesInformationList() {
    const [age, setAge] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <Box>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Button>작성</Button>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">정렬</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box display='flex' p='4px'>
                <Box flex='1' display='flex' justifyContent='center' alignItems='center'>번호</Box>
                <Box flex='6' display='flex' justifyContent='center' alignItems='center'>게시물 제목</Box>
                <Box flex='2' display='flex' justifyContent='center' alignItems='center'>작성자</Box>
                <Box flex='1' display='flex' justifyContent='center' alignItems='center'><RemoveRedEyeIcon /></Box>
                <Box flex='1' display='flex' justifyContent='center' alignItems='center'><CommentIcon /></Box>
                <Box flex='1' display='flex' justifyContent='center' alignItems='center'><FavoriteIcon /></Box>
            </Box>
            <Divider />
            {RECRUTING_COLLEAGUES.map(item => (
                <Box display='flex' p='4px'>
                    <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.recruitBoardNumber}</Box>
                    <Box flex='6' display='flex' justifyContent='center' alignItems='center'>{item.recruitBoardTitle}</Box>
                    <Box flex='2' display='flex' justifyContent='center' alignItems='center'>{item.writerNickname}</Box>
                    <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.viewCount}</Box>
                    <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.commentCount}</Box>
                    <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.heartCount}</Box>
                </Box>
            ))}
        </Box>
    )
}
