import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import regiones from "../componentes/assets/all_region";
import { Container, Grid, Typography, Button } from "@mui/material";

function Region() {
  const [region, setRegion] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const datos = regiones.find((reg) => reg.id == id);
    setRegion(datos);
  }, []);

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
        </Container>
      )}
    </>
  );
}

export default Region;
