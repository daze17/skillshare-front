import React, { ReactNode } from "react";
import AdminSideBar from "@app/common/adminSideBar";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return <AdminSideBar>{children}</AdminSideBar>;
};

export default AdminLayout;
