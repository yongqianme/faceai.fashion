"use client"

import {
  Box,
  useColorModeValue,
  SimpleGrid,
  Heading,
  Text,
  Stack,
  Image,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody,} from "@chakra-ui/react";
import React from "react";
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LineShareButton,
  LineIcon,
} from 'next-share';
import { fashiontool_list } from "@/sitelists";


const FashionToolLists = (props: any) => {
  return (
    <Link _hover={{
      textDecoration: "none"
    }} href={props.link} isExternal>
    <Card bg={useColorModeValue("#2d2d2d", "#2d2d2d")}>
      <CardHeader>
        <Box display="flex" alignItems="center" color="#A67B5B">
          <Heading size="lg">{props.name} <ExternalLinkIcon mx='2px' /></Heading>
        </Box>
      </CardHeader>
      <CardBody>
      <Image src={props.img_src} height="auto" w="auto" alt={props.name}
      />
        <Text color="#e0e0e0" mt="20px">{props.children}</Text>
        <Wrap mt="10px">
  <WrapItem >
  <TwitterShareButton
  url={props.link}
  title={props.children + "via faceai.fashion"}
>
  <TwitterIcon size={16} round />
</TwitterShareButton>
  </WrapItem>
  <WrapItem>
  <WhatsappShareButton
  url={props.link}
  title={props.children + "via faceai.fashion"}
>
  <WhatsappIcon size={16} round />
</WhatsappShareButton>
  </WrapItem>

  <WrapItem>
  <LineShareButton
  url={props.link}
  title={props.children + "via faceai.fashion"}
>
  <LineIcon size={16} round />
</LineShareButton>
  </WrapItem>
</Wrap>
      </CardBody>
    </Card>
    </Link>
  );
};

export default function FashionTools() {
  return (
    <Box bg={useColorModeValue("#1E1E1E", "#1E1E1E")} ml={5} mr={5} id="Usecases">
    <Stack spacing={20} align="center">
          <Heading color="white" mb="20px" mt="20px">AI tools for fashion.</Heading>
        </Stack>
        <Stack spacing={10} align="center" ml={{ base: 0, md: 20 }} mr={{ base: 0, md: 20 }}>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={10}
          alignItems="just-between"
        >
          {fashiontool_list.map((fashiontool, index) => (
              <FashionToolLists key={index} name={fashiontool.name} img_src={fashiontool.img_src} link={fashiontool.link}>
                {fashiontool.description}
              </FashionToolLists>
          ))}
        </SimpleGrid>
        </Stack>
    
    </Box>
  );
}