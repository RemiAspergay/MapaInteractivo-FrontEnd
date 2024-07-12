import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import regiones from "../componentes/assets/all_region";
import { Container, Grid, Typography, Button } from "@mui/material";
import all_parque from "../componentes/assets/all_parque";

function Region() {
  const [region, setRegion] = useState(null);
  const [parques, setParques] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(region);

  useEffect(() => {
    const datos = regiones.find((reg) => reg.id == id);
    if (datos){
    setRegion(datos);
    setParques(all_parque.filter((parque) => parque.region === datos.nombre));
    }
  }, []);

  const handleDivClick = (parqueId) => {
    navigate(`/Parque/${parqueId}`);
  };

  return (
    <>
      {region && (
        <Container>
          <Grid container sx={{ mt: "40px" }}>
            <Grid item xs={12} sm={6} sx={{ margin: "auto" }}>
              <img
                src={region.imagen}
                alt={region.nombre}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ padding: "15px", margin: "auto" }}>
              <Typography variant="h4" sx={{textAlign:"center"}}>
                {region.nombre}
              </Typography>
              {/*renderización del map de parque*/}
              <Grid container sx={{ mt: "40px" }}>
                {parques.length > 0 &&
                parques.map((item, index) => (
                  <Grid 
                  key={index} 
                  item 
                  xs={24} 
                  sm={12} 
                  sx={{ margin: "auto"}}>
                    <Button
                      color="success"
                      variant="outlined"
                      onClick={() => handleDivClick(item.id)}
                      sx={{textAlign: "auto"}}
                    >
                    {item.nombre}
                    </Button>
                  </Grid>
                ))}
              </Grid>
              {/* <Typography variant="h5">
                <b>Parques: </b>
                {nombre.parques}
              </Typography> */}

              {/* <div style={{ textAlign: "right", marginTop: "15px" }}>
                <Button
                  color="error"
                  variant="outlined"
                  onClick={() => handleDivClick(animales.id)}
                >
                  Animales de la zona
                </Button>
              </div> */}
            </Grid>
          </Grid>
          {/* MAP() */}
          {/* <Grid container sx={{ mt: "40px" }}>
            {parques[0] &&
              parques.map((item, index) => (
                <Grid key={index} item xs={12} sm={6} sx={{ margin: "auto" }}>
                  {item.nombre}
                </Grid>
              ))}
          </Grid> */}
        </Container>
      )}
    </>
  );
}

export default Region;
