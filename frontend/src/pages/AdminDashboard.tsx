import AdminDashboardTable from "@/components/AdminDashboardTable";
import GroundsCourtsSelector from "@/components/GroundsCourtSelector";
import React from "react";

export default function AdminDashboard() {
  return (
    <div>
      <GroundsCourtsSelector />
      <AdminDashboardTable />
    </div>
  );
}
