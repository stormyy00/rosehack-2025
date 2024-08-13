"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Leads";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";
import { STATUSES } from "@/data/Statuses";

const Lead = () => {
  const { data: session } = useSession();
  const [lead, setLead] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    roles: session.user.roles,
    email: session.user.email,
    form: "leads",
  });

  const handleSubmit = (setLoading, setState) => {
    api({
      method: "POST",
      url: "/api/dashboard/leads",
      body: lead,
    })
      .then(() => toaster(`✅ Submitted successfully!`))
      .catch(() => toaster(`❌ Internal Server Error`))
      .finally(() => {
        setLoading(false);
        setState(2);
      });
  };
  return (
    <Form
      fields={FIELDS}
      object={lead}
      setObject={setLead}
      header="LEAD APPLICATION"
      onSubmit={handleSubmit}
      statuses={STATUSES}
    />
  );
};

export default Lead;
