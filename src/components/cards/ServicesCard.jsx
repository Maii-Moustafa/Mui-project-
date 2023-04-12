import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import servicecard from'./servicecard.css'
const ServicesCard = ({ id, icon, title, description }) => {
  return (
    <>
      <Card
        // sx={{ minWidth: 275 }}
        className="cornerCard"
        sx={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0px",
          backgroundColor: "black",
          padding: "20px",
          "&:nth-of-type(2n)": { backgroundColor: "#ffffff" },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img  src={icon} alt={title} style={{ width: "15%" }} />

          <Typography variant="h6" style={{ textAlign: "center", paddingTop: "8px" }}>
            {title} 
          </Typography>
          <Typography
            variant="p"
            color="secondary"
            style={{ textAlign: "center", paddingTop: "8px" }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ServicesCard;
