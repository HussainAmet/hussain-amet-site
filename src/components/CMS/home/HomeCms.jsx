import React, { useEffect, useState } from 'react'
import { Form, Input } from "@heroui/react";
import { getData, updateData } from '@/lib/getData';
import CmsButtons from '../CmsButtons';

function HomeCms() {
  const [data, setData] = useState();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState({ status: false, message: "" });

  const fetchData = async () => {
    const aboutData = await getData("about");
    setData(aboutData);
  };

  useEffect(() => { fetchData(); }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await updateData("about", data);

    if (res.status !== 200) {
      setShowFailed({ status: true, message: res.error });
      setTimeout(() => {
        setShowFailed({ status: false, message: "" });
      }, 3000);
      return;
    }

    fetchData();

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const revertData = async () => {
    let res = await fetch("/api/update-site/revert-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "about",
      }),
    });

    res = await res.json();

    if (res.status !== 200) {
      setShowFailed({ status: true, message: res.error });
      setTimeout(() => {
        setShowFailed({ status: false, message: "" });
      }, 3000);
      return;
    }

    fetchData();

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <Form className="flex flex-col" onSubmit={onSubmit}>
      <div className='grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-4 mb-4 w-full'>
        <Input
          isRequired
          label="Name"
          labelPlacement="outside"
          name="name"
          placeholder="Enter Name"
          type="text"
          value={data?.name}
          onChange={(e) => { data.name = e.target.value; setData({ ...data }); }}
        />

        <Input
          isRequired
          label="Place"
          labelPlacement="outside"
          name="place"
          placeholder="Enter Place"
          type="text"
          value={data?.place}
          onChange={(e) => { data.place = e.target.value; setData({ ...data }); }}
        />

        <Input
          isRequired
          label="Availability"
          labelPlacement="outside"
          name="availability"
          placeholder="e.g. Available for full-time"
          type="text"
          value={data?.availability}
          onChange={(e) => { data.availability = e.target.value; setData({ ...data }); }}
        />

        <Input
          isRequired
          label="Role"
          labelPlacement="outside"
          name="role"
          placeholder="Enter Role"
          type="text"
          value={data?.role}
          onChange={(e) => { data.role = e.target.value; setData({ ...data }); }}
        />
      </div>
      <CmsButtons revertData={revertData} showFailed={showFailed} showSuccess={showSuccess} />
    </Form>
  )
}

export default HomeCms
