import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";

import "./header-content.css";
import WImage from "../../atoms/image";
import Button from "../../atoms/button";
import HeaderLogo from "../../../assets/images/header-img.jpg";

const HeaderContent = () => {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));
  const margin = responsive ? theme.spacing(5) : theme.spacing(13);
  return (
    <div data-testid="header-content" className="header-content">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item xs={12}>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <h1
                  data-testid="header-content-title"
                  style={{
                    marginLeft: margin,
                  }}
                  className="header-title"
                >
                  Vamos <span className="header-subtitle">Construir</span>{" "}
                  Grandes Experiências Juntos
                </h1>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                <p
                  data-testid="header-content-text"
                  style={{ marginLeft: margin }}
                  className="header-text"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero
                </p>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box ml={margin} mt={2}>
                <Button>Saiba Mais</Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item xs={12}>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <WImage
                  borderRadius={25}
                  width="70%"
                  height="auto"
                  src={HeaderLogo}
                  alt="imagem de limpeza"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderContent;
