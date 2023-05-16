import React from 'react'
import { Box, Card, Divider, IconButton, Typography, Grid } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';

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

const LATEST_INFORMATION = [
    {
        informationBoardNumber: 1,
        informationBoardTitle: 'Hello Everyone!1',
        informationBoardWriteDatetime: '2023-04-28 20:52:02',
        viewCount: 10,
        boardWriterNickname: 'MINJU',
        boardWriterProfileImageUrl: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682317827/noticon/qpkreb5q3sp6kkwxodjh.png',
        commentCount: 10,
        heartCount: 10
    },
    {
        informationBoardNumber: 2,
        informationBoardTitle: 'Hello Everyone!2',
        informationBoardWriteDatetime: '2023-04-28 20:52:02',
        viewCount: 10,
        boardWriterNickname: 'MINJU',
        boardWriterProfileImageUrl: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682317827/noticon/qpkreb5q3sp6kkwxodjh.png',
        commentCount: 10,
        heartCount: 10
    }, 
    {
        informationBoardNumber: 3,
        informationBoardTitle: 'Hello Everyone!3',
        informationBoardWriteDatetime: '2023-04-28 20:52:02',
        viewCount: 10,
        boardWriterNickname: 'MINJU',
        boardWriterProfileImageUrl: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682317827/noticon/qpkreb5q3sp6kkwxodjh.png',
        commentCount: 10,
        heartCount: 10
    },
];

const RECRUTING_COLLEAGUES = [
    {
        recruitBoardNumber: 1,
        recruitBoardTitle: '제목1',
        recruitBoardWriteDatetime: '2023-04-29 01:06:57',
        viewCount: 5,
        writerNickname: 'Jindol',
        writerProfileImageUrl: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682317827/noticon/qpkreb5q3sp6kkwxodjh.png',
        commentCount: 5,
        heartCount: 5
    },
    {
        recruitBoardNumber: 2,
        recruitBoardTitle: '제목2',
        recruitBoardWriteDatetime: '2023-04-29 01:06:57',
        viewCount: 5,
        writerNickname: 'Jindol',
        writerProfileImageUrl: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682317827/noticon/qpkreb5q3sp6kkwxodjh.png',
        commentCount: 5,
        heartCount: 5
    },
    {
        recruitBoardNumber: 3,
        recruitBoardTitle: '제목3',
        recruitBoardWriteDatetime: '2023-04-29 01:06:57',
        viewCount: 5,
        writerNickname: 'Jindol',
        writerProfileImageUrl: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682317827/noticon/qpkreb5q3sp6kkwxodjh.png',
        commentCount: 5,
        heartCount: 5
    },
]

const INSTRUCTOR_MATCHING = [
    {
        teacherBoardNumber: 1,
        teacherBoardTitle: '제목1',
        teacherBoardContent: '내용',
        teacherBoardWriteDatetime: '2023-05-09 01:06:57',
        viewCount: 3,
        boardWriterNickname: 'Hankk',
        boardWriterProfileImageUrl: 'https://images.search.yahoo.com/images/view;_ylt=Awr936sb9ktkblA7AzOJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzlmMGQ5OGE2MzJmYmYzNDM0OWE0MTVkNTgyMGMwNzUxBGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3D%25EC%2582%25AC%25EA%25B3%25BC%26ei%3DUTF-8%26type%3DE210KR885G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D1&w=1200&h=800&imgurl=shop.biumfood.com%2Fupload%2F1535360125_5131861.jpg&rurl=https%3A%2F%2Fshop.biumfood.com%2Fdetail2.php%3Fitem%3D513&size=383.4KB&p=%EC%82%AC%EA%B3%BC&oid=9f0d98a632fbf34349a415d5820c0751&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=%EC%82%AC%EA%B3%BC+-+%EB%B9%84%EC%9B%80%EB%B0%98%EC%B0%AC&b=0&ni=250&no=1&ts=&tab=organic&sigr=wV3SBEJNMQlx&sigb=0U__S1jDDHN.&sigi=NlVIovRcaR4g&sigt=oHFMCYx4BvaD&.crumb=HxQTP98HKTA&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210KR885G0',
        commentCount: 3,
        heartCount: 3,
        boardHashtag: 'java'
    },
    {
        teacherBoardNumber: 2,
        teacherBoardTitle: '제목2',
        teacherBoardContent: '내용',
        teacherBoardWriteDatetime: '2023-05-09 01:06:57',
        viewCount: 3,
        boardWriterNickname: 'Hankk',
        boardWriterProfileImageUrl: 'https://images.search.yahoo.com/images/view;_ylt=Awr936sb9ktkblA7AzOJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzlmMGQ5OGE2MzJmYmYzNDM0OWE0MTVkNTgyMGMwNzUxBGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3D%25EC%2582%25AC%25EA%25B3%25BC%26ei%3DUTF-8%26type%3DE210KR885G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D1&w=1200&h=800&imgurl=shop.biumfood.com%2Fupload%2F1535360125_5131861.jpg&rurl=https%3A%2F%2Fshop.biumfood.com%2Fdetail2.php%3Fitem%3D513&size=383.4KB&p=%EC%82%AC%EA%B3%BC&oid=9f0d98a632fbf34349a415d5820c0751&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=%EC%82%AC%EA%B3%BC+-+%EB%B9%84%EC%9B%80%EB%B0%98%EC%B0%AC&b=0&ni=250&no=1&ts=&tab=organic&sigr=wV3SBEJNMQlx&sigb=0U__S1jDDHN.&sigi=NlVIovRcaR4g&sigt=oHFMCYx4BvaD&.crumb=HxQTP98HKTA&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210KR885G0',
        commentCount: 3,
        heartCount: 3,
        boardHashtag: 'java'
    },
    {
        teacherBoardNumber: 3,
        teacherBoardTitle: '제목3',
        teacherBoardContent: '내용',
        teacherBoardWriteDatetime: '2023-05-09 01:06:57',
        viewCount: 3,
        boardWriterNickname: 'Hankk',
        boardWriterProfileImageUrl: 'https://images.search.yahoo.com/images/view;_ylt=Awr936sb9ktkblA7AzOJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzlmMGQ5OGE2MzJmYmYzNDM0OWE0MTVkNTgyMGMwNzUxBGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3D%25EC%2582%25AC%25EA%25B3%25BC%26ei%3DUTF-8%26type%3DE210KR885G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D1&w=1200&h=800&imgurl=shop.biumfood.com%2Fupload%2F1535360125_5131861.jpg&rurl=https%3A%2F%2Fshop.biumfood.com%2Fdetail2.php%3Fitem%3D513&size=383.4KB&p=%EC%82%AC%EA%B3%BC&oid=9f0d98a632fbf34349a415d5820c0751&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=%EC%82%AC%EA%B3%BC+-+%EB%B9%84%EC%9B%80%EB%B0%98%EC%B0%AC&b=0&ni=250&no=1&ts=&tab=organic&sigr=wV3SBEJNMQlx&sigb=0U__S1jDDHN.&sigi=NlVIovRcaR4g&sigt=oHFMCYx4BvaD&.crumb=HxQTP98HKTA&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210KR885G0',
        commentCount: 3,
        heartCount: 3,
        boardHashtag: 'java'
    }
]

const QNA = [
    {
        quaBoardNumber: 1,
        qnaTitle: '게시물 입니다. 1',
        qnaContent: '1 게시물 입니다.',
        qnaBoardImageUrl: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682317827/noticon/qpkreb5q3sp6kkwxodjh.png',
        writeDatetime: '2023-04-24 17:39:02',
        viewCount: 10,
        writerNickname: 'bghuun',
        writerProfileImageUrl: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682317827/noticon/qpkreb5q3sp6kkwxodjh.png',
        commentCount: 10,
        heartCount: 10,
        hashtag: ['java']
    },
    {
        quaBoardNumber: 2,
        qnaTitle: '게시물 입니다. 2',
        qnaContent: '1 게시물 입니다.',
        qnaBoardImageUrl: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682317827/noticon/qpkreb5q3sp6kkwxodjh.png',
        writeDatetime: '2023-04-24 17:39:02',
        viewCount: 10,
        writerNickname: 'bghuun',
        writerProfileImageUrl: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682317827/noticon/qpkreb5q3sp6kkwxodjh.png',
        commentCount: 10,
        heartCount: 10,
        hashtag: ['java']
    },
    {
        quaBoardNumber: 3,
        qnaTitle: '게시물 입니다. 3',
        qnaContent: '1 게시물 입니다.',
        qnaBoardImageUrl: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682317827/noticon/qpkreb5q3sp6kkwxodjh.png',
        writeDatetime: '2023-04-24 17:39:02',
        viewCount: 10,
        writerNickname: 'bghuun',
        writerProfileImageUrl: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682317827/noticon/qpkreb5q3sp6kkwxodjh.png',
        commentCount: 10,
        heartCount: 10,
        hashtag: ['java']
    },
]