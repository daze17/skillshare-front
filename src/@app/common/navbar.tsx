import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useDisclosure,
  Image,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Router from "next/router";
import { useApolloClient } from "@apollo/react-hooks";
import { useUserContext } from "@app/config/userProvider";
import config from "@app/config";
//   import Cookies from "js-cookie";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={"#f8f9f9"}
        color={useColorModeValue("gray.600", "white")}
        h={"50px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        zIndex={"100"}
        position={"fixed"}
        w={"100%"}
        justify={"center"}
        boxShadow="md"
      >
        <Flex w={"1264px"}>
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            align={"center"}
          >
            <Button
              onClick={() => Router.push("/")}
              bg={"none"}
              _hover={{ bg: "none" }}
              _active={{ bg: "none" }}
              w={150}
            >
              <Image src="https://miro.medium.com/max/968/1*F6SrJR7_s95r6oCF3ugMZw.png" w={150} alt="banner" />
            </Button>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            {/* <Box w={500}>
              <Input
                placeholder="Search..."
                size="md"
                // color={"white"}
                bg={"#fff"}
              />
            </Box> */}
            {/*  </>} */}
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"#39739d"}
            bg={"#e1ecf4"}
            border={"1px solid #7aa7c7"}
            onClick={() => Router.push('/login')}
            _hover={{
              bg: "#b3d3ea",
            }}
          >
            Sign In
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"#ffffff"}
            bg={"#0a95ff"}
            border={"1px solid #7aa7c7"}
            onClick={() => Router.push('/register')}
            _hover={{
              bg: "#0074cc",
            }}
          >
            Get Started
          </Button>
          </Stack>
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Stack direction={"row"} spacing={0}>
      {NAV_ITEMS.map((navItem, index) => (
        <Link
          href={navItem.href ?? "#"}
          fontSize={"sm"}
          fontWeight={500}
          color={linkColor}
          borderRadius={"1000px"}
          m={"0"}
          p={"6px 12px"}
          _hover={{
            bg: "#e3e6e8",
            textDecoration: "none",
          }}
          key={index}
        >
          {navItem.label}
        </Link>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    // href: "/about",
  },
  {
    label: "Products",
    // href: "/products",
  },
  {
    label: "For Teams",
    // href: "/teams",
  },
];
