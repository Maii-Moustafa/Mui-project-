import Button from "@mui/material/Button";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MyButton = ({ content }) => {
  return (
    <Button
      variant="outlined"
      color="secondary"
      startIcon={<ArrowForwardIosIcon />}
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
