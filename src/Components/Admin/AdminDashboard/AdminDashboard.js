import React from "react";
import { Container } from "react-bootstrap";
import DashboardBody from "./DashboardBody";

function AdminDashboard() {
  return (
    <>
      <h2 className="bg-dark text-light p-3">Admin Dashboard</h2>
      <DashboardBody />
    </>
  );
}

export default AdminDashboard;
