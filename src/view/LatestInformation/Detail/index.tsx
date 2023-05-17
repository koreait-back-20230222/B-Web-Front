import { Avatar, Box, Chip, Typography, IconButton, Divider, TextField, Button } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState, useEffect } from 'react'
import { LATEST_INFORMATION_DETAIL } from 'src/mock';

export default function LatesInformationDetail() {

  const [board, setBoard] = useState<any>(null);

  useEffect(() => {
    setBoard(LATEST_INFORMATION_DETAIL);
  }, []);

  return (
    <Box m='0 10vw 10vh'>
      <Box m='2.5vh 0'>
        <Typography variant='h5'>{board?.informationBoardTitle}</Typography>
      </Box>
      <Divider />
      <Box mt='1vh' display='flex' alignItems='center'>
        <Avatar sx={{ mr: '0.5vw'}} src={board?.writerProfileImageUrl ? board?.writerProfileImageUrl : "https://seoulfn.com/news/photo/201908/353765_139123_465.jpg"} />
        <Box display='flex' flexDirection='column' width='100%' color='rgba(0, 0, 0, 0.5)'>
          <Box>
            <Typography>{board?.writerNickname}</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Typography>작성일 : {board?.writeDatetime}</Typography>
            <Typography className='hover' color='#000000'>채팅 신청</Typography>
            <Typography>조회수 : {board?.viewCount}</Typography>
          </Box>
        </Box>
      </Box>
      <Box mt='1.5vh'>
        <Box component='img' src={board?.informationBoardImageUrl} width='50%'></Box>
        <Typography mt='1.5vh'>{board?.informationBoardContent}</Typography>
      </Box>
      <Box mt='1.5vh'>
        <Typography sx={{ color: 'rgba(0, 0, 0, 0.5)' }}>출처 : {board?.contentSource}</Typography>
      </Box>
      <Box mt='1.5vh'>
        {board?.boardHashtag.map((hashtag: string) => <Chip sx={{ mt: '1vh', ml: '0.25vh', mr: '0.25vh' }} label={`# ${hashtag}`} variant="outlined" />)}
      </Box>
      <Box mt='1.5vh' display='flex'>
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
        <Typography display='flex' alignItems='center'>
          {board?.heartCount}
        </Typography>
      </Box>
      <Box>
        {board?.commentList.map((item: any) => (
          <Box display='flex' alignItems='center'>
            <Avatar src={item.writerProfileImageUrl ? item.writerProfileImageUrl : "https://seoulfn.com/news/photo/201908/353765_139123_465.jpg"} />
            <Typography>{item.writerNickname}</Typography>
            <Typography>{item.commentContent}</Typography>
            <Typography>{item.writeDatetime}</Typography>
          </Box>
        ))}
      </Box>
      <Box>
        <Box display='flex'>
          <TextField sx={{ flex: 8 }} fullWidth multiline minRows={3} variant="outlined" />
          <Button sx={{ flex: 1, height: '100%' }}>작성</Button>
        </Box>
      </Box>
    </Box>
  )
}
