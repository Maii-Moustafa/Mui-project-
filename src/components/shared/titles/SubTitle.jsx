import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const SubTitle = ({ subTitle }) => {
  return (
    <Stack direction="row" alignItems="center">

      <Divider
        variant="middle"
        // flexItem
        sx={{
          display: "inline-block",
          width: "60px",
        
        }}
      />
      <Typography
        color="secondary"
        variant="p"
        sx={{
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "1.2",
        }}
      >
        {subTitle}
      </Typography>
    </Stack>
  );
};

export default SubTitle;
