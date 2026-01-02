import React, { useEffect, useState } from 'react'
import { Form, Input, Button } from "@heroui/react";
import { getData, updateData } from '@/lib/getData';

function SocialLinksCms() {
  const [data, setData] = useState();
  const [contacts, setContacts] = useState();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState({ status: false, message: "" });

  const fetchData = async () => {
    const socialLinksData = await getData("socialLinks");
    setData(socialLinksData);

    const contactsData = await getData("contacts");
    setContacts(contactsData.contacts);
  };

  useEffect(() => { fetchData(); }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (data?.email && !data?.email.startsWith("mailto:")) {
      data.email = "mailto:" + data?.email;
    }

    if (!contacts?.find((contact) => contact.label == "Email Me").link.startsWith("mailto:")) {
      contacts.find((contact) => contact.label == "Email Me").link = "mailto:" + contacts?.find((contact) => contact.label == "Email Me").link;
    }

    const res = await updateData("socialLinks", data);

    if (res.status !== 200) {
      setShowFailed({ status: true, message: res.error });
      setTimeout(() => {
        setShowFailed({ status: false, message: "" });
      }, 3000);
      return;
    }

    const res2 = await updateData("contacts", { contacts: contacts });

    if (res2.status !== 200) {
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
        name: "contacts",
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

    let res2 = await fetch("/api/update-site/revert-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "socialLinks",
      }),
    });

    res = await ress.json();

    if (res2.status !== 200) {
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
          label="LinkedIn"
          labelPlacement="outside"
          name="linkedIn"
          placeholder="Enter LinkedIn URL"
          type="text"
          value={data?.linkedIn}
          onChange={(e) => { data.linkedIn = e.target.value; setData({ ...data }); }}
        />

        <Input
          isRequired
          label="CV"
          labelPlacement="outside"
          name="CV"
          placeholder="Enter CV URL"
          type="text"
          value={data?.CV}
          onChange={(e) => { data.CV = e.target.value; setData({ ...data }); }}
        />

        <Input
          isRequired
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter Email"
          type="text"
          value={data?.email}
          onChange={(e) => { data.email = e.target.value; setData({ ...data }); }}
        />

        <Input
          isRequired
          label="Github"
          labelPlacement="outside"
          name="github"
          placeholder="Enter github"
          type="text"
          value={data?.github}
          onChange={(e) => { data.github = e.target.value; setData({ ...data }); }}
        />
      </div>
      <div className='grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-4 mb-4 w-full'>
        {contacts?.map((contact, index) => (
          <Input
            key={index}
            isRequired
            label={contact.label}
            labelPlacement="outside"
            name={`contact-${index}`}
            placeholder="Enter Contact Link"
            type="text"
            value={contact.link}
            onChange={(e) => {
              const updated = [...contacts];
              updated[index] = {
                ...updated[index],
                link: e.target.value,
              };
              setContacts(updated);
            }}
          />
        ))}
      </div>
      <div>
        <Button type="submit" variant="solid" color="primary" className='mr-5'>
          Submit
        </Button>
        <Button onPress={revertData} variant="solid" color="danger" className="mb-4">
          Revert Site Data to Backup
        </Button>
      </div>
      <p className={`text-green-400 text-2xl ${!showSuccess && 'hidden'}`}>Data Successfully updated</p>
      <p className={`text-red-400 text-2xl ${!showFailed?.status && 'hidden'}`}>{showFailed?.message}</p>
    </Form>
  )
}

export default SocialLinksCms;