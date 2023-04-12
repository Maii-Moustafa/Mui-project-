import Stack from "@mui/material/Stack";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const FeedbackCard = ({ id, avatar, avatarInfo, content }) => {
  return (
    <>
      <Card
        // sx={{ minWidth: 275 }}

        sx={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0px",
          backgroundColor: "#090909",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "10px",
          }}
        >
          <Typography
            variant="p"
            color="secondary"
            sx={
              {
                // paddingInner: "0 35px"
              }
            }
          >{`"${content}"`}</Typography>

          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
              marginTop: "2rem",
            }}
          >
            <Avatar
              sx={{
                width: "5rem",
                height: "5rem",
              }}
              alt={avatarInfo}
              src={avatar}
            />
            <Typography
              variant="span"
              sx={{
                padding: "10px",
              }}
            >
              {avatarInfo}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default FeedbackCard;
