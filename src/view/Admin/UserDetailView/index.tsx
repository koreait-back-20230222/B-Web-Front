import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const USER = {
    userNumber: 1345,
    userNickname: "쏘오오오유",
    userName: "김소유",
    userPhoneNumber: "010-1111-1111",
    userIntroduction: "안녕하세요!",
    userProfileImageUrl: "picture.png",
    chatAcceptance: 1,
    reatedAt: "2023-04-23",
	updatedAt : "2023-04-24" ,
	recommendationNumber : 1,
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function AdminUserDetailView() {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ flex: 1, height: '100%', overflow: 'hidden' }}>
      <CardHeader
        avatar={
          <Avatar src={USER.userProfileImageUrl} sx={{ bgcolor: red[500] }} aria-label="recipe">
            {USER.userNickname[0]}
          </Avatar>
        }
        title={USER.userNickname}
        subheader={USER.userNumber}
      />
      <CardContent>
        <Grid container spacing={1}>
            <Grid item xs={4}><Typography>회원 번호</Typography></Grid>
            <Grid item xs={8}><Typography>{USER.userNumber}</Typography></Grid>
            <Grid item xs={4}><Typography>이름</Typography></Grid>
            <Grid item xs={8}><Typography>{USER.userName}</Typography></Grid>

            <Grid item xs={4}><Typography>닉네임</Typography></Grid>
            <Grid item xs={8}><Typography>{USER.userNickname}</Typography></Grid>
            <Grid item xs={4}><Typography>전화번호</Typography></Grid>
            <Grid item xs={8}><Typography>{USER.userPhoneNumber}</Typography></Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}