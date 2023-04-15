import Button from "@mui/material/Button";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MyButton = ({ content }) => {
  return (
    <Button
      variant="outlined"
      color="secondary"
      startIcon={
        <ArrowForwardIosIcon
          sx={{
            width: "30px",
            height: "30px",
            padding: "2px",
            borderRadius: "50px",
            backgroundColor: "white",
            color: "black",
          }}
        />
      }
      style={{
        borderRadius: "50px",
        padding: "10px 25px",
        border: "1px solid white",
        color: "white",
      }}
    >
      {content}
    </Button>
  );
};

export default MyButton;
