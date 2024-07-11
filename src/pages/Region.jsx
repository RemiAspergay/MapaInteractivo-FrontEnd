import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import regiones from "../componentes/assets/all_region";
import { Container, Grid, Typography, Button } from "@mui/material";
import all_parque from "../componentes/assets/all_parque";

function Region() {
  const [region, setRegion] = useState(null);
  const [parques, setParques] = useState([]);

  const { id } = useParams();

  console.log(region);

  useEffect(() => {
    const datos = regiones.find((reg) => reg.id == id);
    setRegion(datos);
    /* console.log(datos);
    console.log(all_parque); */
    setParques(all_parque.filter((parque) => parque.region === datos.nombre));
  }, []);

  console.log(parques);

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
              <Typography variant="h5">
                <b>Detalle: </b>
                {region.nombre}
              </Typography>
              <div style={{ textAlign: "right", marginTop: "15px" }}>
                <Button
                  color="error"
                  variant="outlined"
                  onClick={() => handleDivClick(parque.id)}
                >
                  Parque
                </Button>
              </div>
            </Grid>
          </Grid>
          {/* MAP() */}
          <Grid container sx={{ mt: "40px" }}>
            {parques[0] &&
              parques.map((item, index) => (
                <Grid key={index} item xs={12} sm={6} sx={{ margin: "auto" }}>
                  {item.nombre}
                </Grid>
              ))}
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Region;
