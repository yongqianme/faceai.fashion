import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue("#1E1E1E", "#1E1E1E")}
      color={useColorModeValue("white", "white")}
    >
      <Container maxW={"6xl"} py={4}>
        <Stack direction="row" justify="center" align="center">
          <Center>
            <Text>
              © 2023 FaceAI.Fashion. All rights reserved. <br />
              <a href="mailto:newsubmit@faceai.fashion?subject=Submit new AI Tool For Fashion&body=Name:<br />Link:<br />Screenshot: <br />Description: <br />">Click to submit your AI for fashion tools</a>
            </Text>
          </Center>

        </Stack>
      </Container>
    </Box>
  );
}
