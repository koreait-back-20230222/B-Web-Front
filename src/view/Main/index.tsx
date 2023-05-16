import React from 'react'
import { Box, Card, Divider, IconButton, Typography, Grid } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { INSTRUCTOR_MATCHING, LATEST_INFORMATION, QNA, RECRUTING_COLLEAGUES } from 'src/mock';

export default function MainView() {
  return (
    <Box id='main-container' m='0 10vw' mt='5vh'>
        <Grid container spacing={4}>
            <Grid item xs={12} md={12} lg={6} id='latest-information'>
                <Box display='flex' justifyContent='space-between' alignItems='cneter' p='4px'>
                    <Typography display='flex' alignItems='center' variant='body1' fontWeight='700'>최신 정보</Typography>
                    <IconButton>
                        <ArticleIcon />
                    </IconButton>
                </Box>
                <Card sx={{ p: '8px' }}>
                    <Box display='flex' p='4px'>
                        <Box flex='1' display='flex' justifyContent='center' alignItems='center'>번호</Box>
                        <Box flex='6' display='flex' justifyContent='center' alignItems='center'>게시물 제목</Box>
                        <Box flex='2' display='flex' justifyContent='center' alignItems='center'>작성자</Box>
                        <Box flex='1' display='flex' justifyContent='center' alignItems='center'><RemoveRedEyeIcon /></Box>
                        <Box flex='1' display='flex' justifyContent='center' alignItems='center'><CommentIcon /></Box>
                        <Box flex='1' display='flex' justifyContent='center' alignItems='center'><FavoriteIcon /></Box>
                    </Box>
                    <Divider />
                    {LATEST_INFORMATION.map(item => (
                        <Box display='flex' p='4px'>
                            <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.informationBoardNumber}</Box>
                            <Box flex='6' display='flex' justifyContent='center' alignItems='center'>{item.informationBoardTitle}</Box>
                            <Box flex='2' display='flex' justifyContent='center' alignItems='center'>{item.boardWriterNickname}</Box>
                            <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.viewCount}</Box>
                            <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.commentCount}</Box>
                            <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.heartCount}</Box>
                        </Box>
                    ))}
                </Card>
            </Grid>
            <Grid item xs={12} md={12} lg={6} id='recruiting-colleagues'>
                <Box display='flex' justifyContent='space-between' alignItems='cneter'>
                    <Typography display='flex' alignItems='center' variant='body1' fontWeight='700'>팀원 모집</Typography>
                    <IconButton>
                        <ArticleIcon />
                    </IconButton>
                </Box>
                <Card sx={{ p: '8px' }}>
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
                </Card>
            </Grid>
            <Grid item xs={12} md={12} lg={6} id='instructor-matching'>
                <Box display='flex' justifyContent='space-between' alignItems='cneter'>
                    <Typography display='flex' alignItems='center' variant='body1' fontWeight='700'>선생님 매칭</Typography>
                    <IconButton>
                        <ArticleIcon />
                    </IconButton>
                </Box>
                <Card sx={{ p: '8px' }}>
                    <Box display='flex' p='4px'>
                        <Box flex='1' display='flex' justifyContent='center' alignItems='center'>번호</Box>
                        <Box flex='6' display='flex' justifyContent='center' alignItems='center'>게시물 제목</Box>
                        <Box flex='2' display='flex' justifyContent='center' alignItems='center'>작성자</Box>
                        <Box flex='1' display='flex' justifyContent='center' alignItems='center'><RemoveRedEyeIcon /></Box>
                        <Box flex='1' display='flex' justifyContent='center' alignItems='center'><CommentIcon /></Box>
                        <Box flex='1' display='flex' justifyContent='center' alignItems='center'><FavoriteIcon /></Box>
                    </Box>
                    <Divider />
                    {INSTRUCTOR_MATCHING.map(item => (
                        <Box display='flex' p='4px'>
                            <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.teacherBoardNumber}</Box>
                            <Box flex='6' display='flex' justifyContent='center' alignItems='center'>{item.teacherBoardTitle}</Box>
                            <Box flex='2' display='flex' justifyContent='center' alignItems='center'>{item.boardWriterNickname}</Box>
                            <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.viewCount}</Box>
                            <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.commentCount}</Box>
                            <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.heartCount}</Box>
                        </Box>
                    ))}
                </Card>
            </Grid>
            <Grid item xs={12} md={12} lg={6} id='qna'>
                <Box display='flex' justifyContent='space-between' alignItems='cneter'>
                    <Typography display='flex' alignItems='center' variant='body1' fontWeight='700'>Q&A</Typography>
                    <IconButton>
                        <ArticleIcon />
                    </IconButton>
                </Box>
                <Card sx={{ p: '8px' }}>
                    <Box display='flex' p='4px'>
                        <Box flex='1' display='flex' justifyContent='center' alignItems='center'>번호</Box>
                        <Box flex='6' display='flex' justifyContent='center' alignItems='center'>게시물 제목</Box>
                        <Box flex='2' display='flex' justifyContent='center' alignItems='center'>작성자</Box>
                        <Box flex='1' display='flex' justifyContent='center' alignItems='center'><RemoveRedEyeIcon /></Box>
                        <Box flex='1' display='flex' justifyContent='center' alignItems='center'><CommentIcon /></Box>
                        <Box flex='1' display='flex' justifyContent='center' alignItems='center'><FavoriteIcon /></Box>
                    </Box>
                    <Divider />
                    {QNA.map(item => (
                        <Box display='flex' p='4px'>
                            <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.quaBoardNumber}</Box>
                            <Box flex='6' display='flex' justifyContent='center' alignItems='center'>{item.qnaTitle}</Box>
                            <Box flex='2' display='flex' justifyContent='center' alignItems='center'>{item.writerNickname}</Box>
                            <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.viewCount}</Box>
                            <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.commentCount}</Box>
                            <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{item.heartCount}</Box>
                        </Box>
                    ))}
                </Card>
            </Grid>
        </Grid>
        <Box id='main-second-row' display='flex' mt='2.5vh'>
            
            
        </Box>
    </Box>
  )
}
