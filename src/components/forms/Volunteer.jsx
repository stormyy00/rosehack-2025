"use client";

import { useState } from "react";
import Form from "@/app/forms/Form.jsx";
import { FIELDS } from "../../data/forms/Volunteers.js";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";

const volunteer = () => {
  const { data: session } = useSession();
  const [volunteer, setVolunteer] = useState({
    name: session.user.name,
    email: session.user.email,
  });

  const handleSubmit = async () => {
    const data = {
      ...volunteer,
      availability: Object.keys(volunteer.availability),
    };

    await axios
      .post("/api/volunteers", data)
      .then(() => toast(`✅ Submitted successfully!`));
  };
  return (
    <Form
      fields={FIELDS}
      object={volunteer}
      setObject={setVolunteer}
      header="VOLUNTEER APPLICATION"
      submit={handleSubmit}
    />
  );
};

export default volunteer;
