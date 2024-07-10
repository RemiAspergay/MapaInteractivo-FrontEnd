import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

import { Link } from "react-router-dom"; //Este hook sirve para redireccionar
import { useNavigate } from "react-router-dom";

function Cards({ data }) {

  const handleDivClick = (key) => {
    navigate(`/Region/${key}`); 
  };
  const navigate = useNavigate();
  return (
    <>
      <Container sx={{ my: "20px" }}>
        <Typography variant="h1" sx={{ mt: "100px" }}>
        </Typography>
        <Grid container spacing={2} sx={{ mb: "20px" }}>
          {data.map((region, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              onClick={() => handleDivClick(region.id)}
            >
              <Card sx={{ cursor: "pointer", width: "300px", margin: "auto"}}>
                <CardMedia
                  component="img"
                  alt={region.nombre}
                  src={region.imagen}
                />
                <CardContent >
                  <Typography variant="h6">{region.nombre}</Typography>
                </CardContent>
                <Link to={`/Region/${region.id}`}></Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Cards;
