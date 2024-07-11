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
        <Grid className="container-map" container sx={{ mb: "20px", my: "auto", maxWidth: "100%" }}>
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
              <Card sx={{ cursor: "pointer", width: "300px", margin: "auto", border: "0", boxShadow:"0", background:"transparent", marginTop: region.marginTop, marginBottom: region.marginBottom, marginLeft: region.marginLeft, marginRight: region.marginRight
              }}>
                <CardMedia
                  component="img"
                  alt={region.nombre}
                  src={region.imagen}
                  sx={{maxWidth:"100%"}}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
    </>
  );
}

export default Cards;

