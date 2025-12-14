import React, { useState } from 'react'
import { Form, Input, Button } from "@heroui/react";
import siteData from '@/json/siteData.json';

function HomeCms() {
  const [data, setData] = useState(siteData);

  const onSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/update-site", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <Form className="flex flex-col" onSubmit={onSubmit}>
      <div className='grid grid-cols-4 gap-4 mb-4 w-full'>
        <Input
          isRequired
          label="Name"
          labelPlacement="outside"
          name="name"
          placeholder="Enter Name"
          type="text"
          value={data.about.name}
          onChange={(e) => { data.about.name = e.target.value; setData({ ...data }); }}
        />

        <Input
          isRequired
          label="Place"
          labelPlacement="outside"
          name="place"
          placeholder="Enter Place"
          type="text"
          value={data.about.place}
          onChange={(e) => { data.about.place = e.target.value; setData({ ...data }); }}
        />

        <Input
          isRequired
          label="Availability"
          labelPlacement="outside"
          name="availability"
          placeholder="e.g. Available for full-time"
          type="text"
          value={data.about.availability}
          onChange={(e) => { data.about.availability = e.target.value; setData({ ...data }); }}
        />

        <Input
          isRequired
          label="Role"
          labelPlacement="outside"
          name="role"
          placeholder="Enter Role"
          type="text"
          value={data.about.role}
          onChange={(e) => { data.about.role = e.target.value; setData({ ...data }); }}
        />
      </div>
      <Button type="submit" variant="solid" color="primary">
        Submit
      </Button>
    </Form>
  )
}

export default HomeCms
