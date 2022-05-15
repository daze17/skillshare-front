import React, { ReactNode } from "react";
// import Navbar from "@app/common/navbar";
import { Stack, Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Routes from "@app/routes/routers"
// import MainLayout from "@app/layouts/mainLayout";
// import Footer from "./footer";
import Navbar from "@app/common/navbar";
import HomeLayout from "@app/layouts/homelayout"
import AdminLayout from "@app/layouts/adminlayout"

type Props = {
  title: string;
  children: React.ReactNode;
};
const NormalLayout = ({ children }: { children: ReactNode }) => {
  return <Box h={"100vh"}>{children}</Box>;
};

const Layout: React.FC<Props> = ({ children }) => {
  let RenderLayout = HomeLayout;
    const router = useRouter();
    if (Routes.isAdmin(router.pathname)) {
      RenderLayout = AdminLayout;
    }
  return (
    <>
      <Navbar />
      <Flex
        justifyContent={"center"}
        paddingTop={"50px"}
      >
        <Stack w={"1264px"}>
          <RenderLayout>{children}</RenderLayout>
        </Stack>
      </Flex>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
