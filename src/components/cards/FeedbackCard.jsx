import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const FeedbackCard = ({ id, avatar, avatarInfo, content }) => {
  return (
    <>
      <Card
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
            backgroundColor: "#090909",
          }}
        >
          <Box
            sx={{
              width: { sm: "100%", md: "90%", lg: "90%" },
            }}
          >
            <Typography
              variant="p"
              color="secondary"
              sx={{
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "1.5rem",
              }}
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
                  letterSpacing: "2px",
                }}
              >
                {avatarInfo}
              </Typography>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default FeedbackCard;
