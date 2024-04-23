// Complete the Index page component for "Bark & Meow" Vodka Spirits Brand
import { Box, Flex, Heading, Text, Button, Image, VStack, HStack, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" m={4}>
        <Image src="https://images.unsplash.com/photo-1613255347968-aa2aaa353976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2b2RrYSUyMGJvdHRsZXxlbnwwfHx8fDE3MTM4ODQ4NTF8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="200px" objectFit="cover" borderRadius="full" alt="Bark & Meow Vodka" m={4} />
        <Heading as="h1" size="xl" textAlign="center">
          Bark & Meow Vodka
        </Heading>
        <Text fontSize="lg" my={4}>
          Discover the unique taste of premium vodka distilled with a twist of fun.
        </Text>
        <Text fontSize="md" my={4}>
          For every bottle sold, $5.00 is donated to support animal rescue organizations.
        </Text>
        <Text fontSize="md" my={4}>
          Proudly made in the USA and distilled 7 times for premium quality.
        </Text>
        <Button colorScheme="blue" size="lg" my={4}>
          Shop Now
        </Button>
        <Button colorScheme="teal" size="lg" onClick={() => alert("Redirecting to your local animal shelter...")}>
          Find a Local Shelter
        </Button>
      </Flex>

      <VStack spacing={8} mt={10} align="center">
        <Heading as="h2" size="lg">
          Our Products
        </Heading>
        <HStack spacing={10}>
          <ProductCard title="Classic Vodka" description="Smooth and pure with a clean finish." imageUrl="https://images.unsplash.com/photo-1556974068-df88fdb14851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwdm9ka2F8ZW58MHx8fHwxNzEzODg0ODUxfDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <ProductCard title="Citrus Twist" description="Infused with a zest of fresh citrus fruits." imageUrl="https://images.unsplash.com/photo-1549746423-e5fe9cafded8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXRydXMlMjB2b2RrYXxlbnwwfHx8fDE3MTM4ODQ4NTF8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          <ProductCard title="Berry Blast" description="A sweet explosion of wild berries." imageUrl="https://images.unsplash.com/photo-1517620430776-0ec904756579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZXJyeSUyMHZvZGthfGVufDB8fHx8MTcxMzg4NDg1Mnww&ixlib=rb-4.0.3&q=80&w=1080" />
        </HStack>
      </VStack>

      <Flex as="footer" py={10} mt={10} borderTop="1px" borderColor="gray.200" justify="center">
        <HStack spacing={4}>
          <SocialIcon icon={FaFacebook} link="https://facebook.com/barkandmeowvodka" />
          <SocialIcon icon={FaInstagram} link="https://instagram.com/barkandmeowvodka" />
          <SocialIcon icon={FaTwitter} link="https://twitter.com/barkandmeowvodka" />
          <SocialIcon icon={FaEnvelope} link="mailto:contact@barkandmeowvodka.com" />
        </HStack>
      </Flex>
    </Box>
  );
};

const ProductCard = ({ title, description, imageUrl }) => (
  <VStack bg="white" boxShadow="md" p={4} borderRadius="lg" align="center">
    <Image src={imageUrl} boxSize="150px" borderRadius="md" alt={title} />
    <Text fontWeight="bold" fontSize="xl">
      {title}
    </Text>
    <Text textAlign="center">{description}</Text>
    <Button colorScheme="blue" mt={4}>
      Learn More
    </Button>
  </VStack>
);

const SocialIcon = ({ icon, link }) => (
  <Button as="a" href={link} size="lg" colorScheme="gray" variant="ghost">
    {icon({ size: "24px" })}
  </Button>
);

export default Index;
