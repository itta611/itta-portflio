import { Card, Image, Link } from "@chakra-ui/react";
import NextImage from "next/image";
import { FC } from "react";

interface Props {
  title: string;
  description: string;
  imageURL: string;
  link: string;
}

const ProjectCard: FC<Props> = ({ title, description, imageURL, link }) => {
  return (
    <Link href={link} textDecoration="none" asChild>
      <Card.Root
        flexBasis={200}
        flexGrow={1}
        overflow="hidden"
        background="whiteAlpha.50"
        borderWidth={1}
        borderColor="whiteAlpha.50"
        borderRadius="2xl"
        transition="transform"
        _hover={{
          transform: "scale(1.02)",
        }}
      >
        <Card.Body gap="2" p={4}>
          <Image asChild alt={`${title} thumbnail`} borderRadius="xl">
            <NextImage
              src={imageURL}
              alt={`${title} thumbnail`}
              width={360}
              height={240}
            />
          </Image>
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};

export default ProjectCard;
