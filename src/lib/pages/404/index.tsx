import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => navigate("/");

  return (
    <Grid gap={4} textAlign="center">
      <Heading>Ops!!!</Heading>
      <Text>Não conseguimos encontrar a página que você está procurando.</Text>

      <Box maxWidth={[280, 400]} marginX="auto">
        <Image width={400} src="/assets/404 Error-rafiki.svg" />
      </Box>

      <Box>
        <Button onClick={handleBackToHome}>
          Voltar para a página principal
        </Button>
      </Box>
    </Grid>
  );
};

export default Page404;
