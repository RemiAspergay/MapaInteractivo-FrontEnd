import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import regiones from "../componentes/assets/all_region";
import { Container, Grid, Typography } from "@mui/material";
import all_parque from "../componentes/assets/all_parque";
import all_fauna from "../componentes/assets/all_fauna";
import FaunaCard from "../componentes/FaunaCard/faunaCard";

function Region() {
  const [region, setRegion] = useState(null);
  const [parques, setParques] = useState([]);
<<<<<<< HEAD
  const [fauna, setFauna] = useState([]);

=======
>>>>>>> 204b25fdce758172505214104dc0f1f55ac006cf
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const datos = regiones.find((reg) => reg.id == id);
<<<<<<< HEAD
    if (datos) {
      setRegion(datos);
      setParques(all_parque.filter((parque) => parque.region === datos.nombre));
      setFauna(all_fauna.filter((animal) => animal.Region === datos.nombre));
    }
  }, []);

=======
    if (datos){
    setRegion(datos);
    setParques(all_parque.filter((parque) => parque.region === datos.nombre));
    }
  }, []);

  const handleDivClick = (parqueId) => {
    navigate(`/Parque/${parqueId}`);
  };

>>>>>>> 204b25fdce758172505214104dc0f1f55ac006cf
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
<<<<<<< HEAD
              {/* TRAE EL NOMBRE DE LA REGION DEL ARRAY */}
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
            </Grid>
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
=======
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
                  xs={12} 
                  sm={6} 
                  sx={{ margin: "auto" }}>
                    <div style={{ textAlign: "right", marginTop: "15px" }}>
                    <Button
                      color="error"
                      variant="outlined"
                      onClick={() => handleDivClick(item.id)}
                    >
                    {item.nombre}
                    </Button>
                  </div>
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
>>>>>>> 204b25fdce758172505214104dc0f1f55ac006cf
                </Grid>
              ))}
          </Grid> */}
        </Container>
      )}
    </>
  );
}

export default Region;
