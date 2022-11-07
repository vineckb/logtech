/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Flex,
  Button,
  FormControl,
  Heading,
  Input,
  Text,
  Link,
  Image,
  StackDivider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/dashboard");

  return (
    <Flex position="relative" bgColor="#e4ebf6" borderRadius="40" w="60vw">
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "90vh" }}
        w="60vw"
        // justifyContent="space-between"
        // mb="30px"
        p="10"
        // pt={{ sm: "100px", md: "0px" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "50%" }}
        >
          <Flex
            direction="column"
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            w="86%"
            background="transparent"
            p="48px"
            // mt={{ md: "150px", lg: "5px" }}
            pb="200px"
          >
            <Heading color="#004E6C" fontSize="32px" mb="10px">
              Login
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              fontWeight="bold"
              fontSize="14px"
              color="#555B6D"
            >
              Entre com as suas credenciais de login
            </Text>
            <FormControl>
              <Input
                borderRadius="15px"
                mb="24px"
                fontSize="sm"
                type="text"
                placeholder="E-mail"
                size="lg"
                bgColor="#FFFFFF"
              />
              <Input
                borderRadius="15px"
                mb="10px"
                fontSize="sm"
                type="password"
                placeholder="Senha"
                size="lg"
                bgColor="#FFFFFF"
              />
              {/* <FormControl display="flex" alignItems="center">
                <Switch id="remember-login" color="#004E6C" me="10px" />
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  ms="1"
                  fontWeight="normal"
                >
                  Manter logado
                </FormLabel>
              </FormControl> */}
              <Button
                onClick={handleLogin}
                fontSize="14px"
                type="submit"
                bg="#445379"
                w="100%"
                h="45"
                mb="20px"
                color="white"
                mt="20px"
                _hover={{
                  bg: "#394155",
                }}
                _active={{
                  bg: "#445379",
                }}
              >
                Entrar
              </Button>
            </FormControl>
            <StackDivider bgColor="#c2cadc" h="2px" mb="20px" mt="20px" />

            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Link color="#556EE6" href="#">
                <Text
                  color="#556EE6"
                  fontWeight="medium"
                  fontSize="sm"
                  ml="15px"
                >
                  Esqueci minha Senha
                </Text>
              </Link>
            </Flex>
            <Flex position="absolute" top="87%" left="13%">
              <Image src="images/logo.png" w="230px" alt="Logo" />
            </Flex>
            <Flex position="absolute" top="94%" left="17%">
              <Text
                mb="36px"
                ms="4px"
                fontWeight="bold"
                fontSize="14px"
                color="#555B6D"
              >
                Versão 1.0.2
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flex="1"
          display={{ base: "none", md: "flex" }}
          w="100%"
          // h="100vh"
          justifyContent="center"
          alignItems="start"
        >
          <Flex
            w="50%"
            h="92%"
            bgColor="#136a93"
            position="absolute"
            borderRadius="40px"
            left="48%"
            top="4%"
          />
          <Flex position="absolute" zIndex="1" right="16%" top="37%">
            <Image src="images/logoWMS.png" w="200px" alt="Logo" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Index;
