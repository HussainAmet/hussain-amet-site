import React, { useState } from 'react'
import { Form, Input, Button } from "@heroui/react";
import siteData from '@/json/siteData.json';

function SocialLinksCms() {
  const [data, setData] = useState(siteData);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (data.socialLinks.email && !data.socialLinks.email.startsWith("mailto:")) {
      data.socialLinks.email = "mailto:" + data.socialLinks.email;
    }

    if ( !data.contacts.find((contact) => contact.label == "Email Me").link.startsWith("mailto:")) {
      data.contacts.find((contact) => contact.label == "Email Me").link = "mailto:" + data.contacts.find((contact) => contact.label == "Email Me").link;
    }

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
          label="LinkedIn"
          labelPlacement="outside"
          name="linkedIn"
          placeholder="Enter LinkedIn URL"
          type="text"
          value={data.socialLinks.linkedIn}
          onChange={(e) => { data.socialLinks.linkedIn = e.target.value; setData({ ...data }); }}
        />

        <Input
          isRequired
          label="CV"
          labelPlacement="outside"
          name="CV"
          placeholder="Enter CV URL"
          type="text"
          value={data.socialLinks.CV}
          onChange={(e) => { data.socialLinks.CV = e.target.value; setData({ ...data }); }}
        />

        <Input
          isRequired
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter Email"
          type="text"
          value={data.socialLinks.email}
          onChange={(e) => { data.socialLinks.email = e.target.value; setData({ ...data }); }}
        />

        <Input
          isRequired
          label="Github"
          labelPlacement="outside"
          name="github"
          placeholder="Enter github"
          type="text"
          value={data.socialLinks.github}
          onChange={(e) => { data.socialLinks.github = e.target.value; setData({ ...data }); }}
        />
      </div>
      <div className='grid grid-cols-4 gap-4 mb-4 w-full'>
        {data.contacts.map((contact, index) => (
            <Input
                key={index}
                isRequired
                label={contact.label}
                labelPlacement="outside"
                name={`contact-${index}`}
                placeholder="Enter Contact Link"
                type="text"
                value={contact.link}
                onChange={(e) => { data.contacts[index].link = e.target.value; setData({ ...data }); }}
            />
        ))}
      </div>
      <Button type="submit" variant="solid" color="primary">
        Submit
      </Button>
    </Form>
  )
}

export default SocialLinksCms;