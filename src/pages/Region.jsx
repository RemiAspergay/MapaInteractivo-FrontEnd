import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import regiones from "../componentes/assets/all_region";
import { Container, Grid, Typography } from "@mui/material";
import all_parque from "../componentes/assets/all_parque";
import all_fauna from "../componentes/assets/all_fauna";
import FaunaCard from "../componentes/FaunaCard/faunaCard";

function Region() {
  const [region, setRegion] = useState(null);
  const [parques, setParques] = useState([]);
  const [fauna, setFauna] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const datos = regiones.find((reg) => reg.id == id);
    if (datos) {
      setRegion(datos);
      setParques(all_parque.filter((parque) => parque.region === datos.nombre));
      setFauna(all_fauna.filter((animal) => animal.Region === datos.nombre));
    }
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
              <Typography
                variant="h4"
                sx={{ textAlign: "center", marginTop: "-200px" }}
              >
                {region.nombre}
              </Typography>
              {/* RENDERIZACION PARQUES MAP() */}
              <Grid container sx={{ mt: "40px" }}>
                {parques.length > 0 &&
                  parques.map((item, index) => (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      sm={6}
                      sx={{ margin: "auto" }}
                    >
                      {item.nombre}
                    </Grid>
                  ))}
              </Grid>
              {/* RENDERIZACION FAUNA MAP() */}
              <Grid container sx={{ mt: "40px" }}>
                {fauna.length > 0 &&
                  fauna.map((animal, index) => (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      sx={{ margin: "auto" }}
                    >
                      <FaunaCard {...animal} />
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Region;
