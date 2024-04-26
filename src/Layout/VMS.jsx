import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AttendantLogin from "../Pages/AttendantLogin";
import { useState, useEffect } from "react";
import TableLayout from "./TableLayout";

const VMS = () => {
  const [verified, setVerified] = useState(null);
  useEffect(() => {
    const handleStorageChange = () => {
      const verified = localStorage.getItem("verified");
      setVerified(verified);
      console.log(verified);
    };

    window.addEventListener("storage", handleStorageChange);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Routes>
        <Route path="/signin" element={<AttendantLogin />} />
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/table/*" element={<TableLayout />} />
      </Routes>
    </div>
  );
};

export default VMS;
