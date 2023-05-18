import { Box, Chip, Divider, Fab, IconButton, Input } from '@mui/material';
import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CreateIcon from '@mui/icons-material/Create';

export default function LatesInformationUpdate() {
  //          Hook          //
  const navigator = useNavigate();

  const imageRef = useRef<HTMLInputElement | null>(null);

  const [boardTitle, setBoardTitle] = useState<string>('');
  const [boardContent, setBoardContent] = useState<string>('');
  const [boardImgUrl, setBoardImgUrl] = useState<string>('');

  //          Event Handler          //
  const onBoardContentChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.target.value;
    setBoardContent(value);
  }

  const onBoardContentKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (event.key != 'Enter') return;
    setBoardContent(boardContent + '\n');
  }

  const onImageUploadButtonHandler = () => {
    if (!imageRef.current) return;
    imageRef.current.click();
  }

  return (
    <Box m='0 10vw 2.5vw'>
      <Box pt='5vh' pb='5vh'>
        <Input fullWidth disableUnderline placeholder='제목을 입력하세요.' sx={{ fontSize: '32px', fontWeight: 500 }} onChange={(event) => setBoardTitle(event.target.value)} />
        <Divider sx={{ m: '40px 0px' }} />
        <Box display='flex' alignItems='start' mb='1vh'>

          <Box sx={{ width: '100%' }}>
            <Input fullWidth disableUnderline multiline minRows={20} placeholder='본문을 작성해주세요.' sx={{ fontSize: '18px', fontWeight: 500, lineHeight: '150%' }} onChange={(event) => onBoardContentChangeHandler(event)} onKeyDown={(event) => onBoardContentKeyPressHandler(event)}/>
            <Box sx={{ width: '100%' }} component='img' src={boardImgUrl} />
          </Box>

          <IconButton onClick={() => onImageUploadButtonHandler()}>
            <ImageOutlinedIcon />
            <input ref={imageRef} hidden type='file' accept='image/*' onChange={(event) => {}}/>
          </IconButton>

        </Box>
        <Divider sx={{ mt: '1vh', mb: '1vh' }} />
        <Input fullWidth disableUnderline placeholder='해시태그를 입력하세요.' sx={{ fontSize: '14px', fontWeight: 500 }} onChange={(event) => setBoardTitle(event.target.value)} />
        <Box mb='1vh'>
          <Chip sx={{ mt: '1vh', ml: '0.25vh', mr: '0.25vh' }} label="# HashTag" variant="outlined" onDelete={() => {}} />
          <Chip sx={{ mt: '1vh', ml: '0.25vh', mr: '0.25vh' }} label="# HashTag" variant="outlined" onDelete={() => {}} />
        </Box>
        <Input fullWidth disableUnderline placeholder='출처를 입력하세요.' sx={{ fontSize: '14px', fontWeight: 500 }} onChange={(event) => setBoardTitle(event.target.value)} />
      </Box>
      <Fab sx={{ position: 'fixed', bottom: '2.5vw', right: '10vw', backgroundColor: '#999999' }} onClick={() => {}}>
        <CreateIcon />
      </Fab>
    </Box>
  )
}
