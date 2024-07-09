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

//Sx se usa para dar style, con esta propiedad lo va a renderizar como css
//mt = marginTop
//mb = marginBottom
//my = marginEjeY
//item = {true} === item
//xs=xtra-small | sm = small | md=medium | lg=largeCuando | cuando la vista tenga el tamaño indicado, le indico cuantos espacios quiero que ocupe mi grilla
//cardMedia nos permite agregar una imagen dentro de la tarjeta, el componente puede ser un video, imagen, gif
function Cards({ data }) {
  /* 1ra parte de mi codigo = useState() para los manejos de estados*/
  /* 2da parte de mi codigo = constantes y funciones*/
  //Por convencion, siempre se debe colocar handle al elemento que modificaremos(clikearemos)
  const handleDivClick = (key) => {
    navigate(`/Region/${key}`); //Donde selecciono {key} es el valor que vamos a agregar a la url
  };
  /* 3ra parte de mi codig= Hook useEffect */
  const navigate = useNavigate();
  return (
    <>
      <Container sx={{ my: "20px" }}>
        <Typography variant="h1" sx={{ mt: "100px" }}>
        </Typography>
        <Grid container spacing={2} sx={{ mb: "20px" }}>
          {/* Mapeo */}
          {/* data.map((elemento,index) => ()) */}
          {data.map((region, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              onClick={() => handleDivClick(region.id)} //Onclik va dentro del Grid para poder hacer clic en cualquier parte de la tarjeta, ademas dentro del grid container estamos haciendo el mapeo.
            >
              <Card sx={{ cursor: "pointer" }}>
                <CardMedia
                  component="img"
                  alt={region.nombre}
                  src={region.imagen}
                />
                <CardContent>
                  <Typography variant="h6">{region.nombre}</Typography>
                </CardContent>
                <Link to={`/Region/${region.id}`}></Link>
              </Card>
            </Grid>
          ))}
          {/* FinMapeo */}
        </Grid>
      </Container>
    </>
  );
}

export default Cards;
