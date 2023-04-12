import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function LatestNewsCard({
  id,
  photo,
  category,
  title,
  description,
}) {
  return (
    <Box>
      <Card>
        <CardMedia component="img" height="194" image={photo} alt={title} />
        <CardContent>
          <Typography>{category}</Typography>
          <Typography>{title}</Typography>
          <Typography>{description}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
