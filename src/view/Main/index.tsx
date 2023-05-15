import React from 'react'
import { Box, IconButton, Typography } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';

export default function MainView() {
  return (
    <Box id="main-container">
        <Box id="main-first-row" display='flex'>
            <Box id="latest-information" flex='1'>
                <Box display='flex' justifyContent='space-between' alignItems='cneter'>
                    <Typography>최신 게시물</Typography>
                    <IconButton>
                        <ArticleIcon />
                    </IconButton>
                </Box>
                <Box></Box>
            </Box>
            <Box id="recruiting-colleagues" flex='1'>
                <Box display='flex' justifyContent='space-between' alignItems='cneter'>
                    <Typography>최신 게시물</Typography>
                    <IconButton>
                        <ArticleIcon />
                    </IconButton>
                </Box>
                <Box></Box>
            </Box>
        </Box>
        <Box id="main-second-row" display='flex'>
            <Box id="instructor-matching" flex='1'>
                <Box display='flex' justifyContent='space-between' alignItems='cneter'>
                    <Typography>최신 게시물</Typography>
                    <IconButton>
                        <ArticleIcon />
                    </IconButton>
                </Box>
                <Box></Box>
            </Box>
            <Box id="qna" flex='1'>
                <Box display='flex' justifyContent='space-between' alignItems='cneter'>
                    <Typography>최신 게시물</Typography>
                    <IconButton>
                        <ArticleIcon />
                    </IconButton>
                </Box>
                <Box></Box>
            </Box>
        </Box>
    </Box>
  )
}
