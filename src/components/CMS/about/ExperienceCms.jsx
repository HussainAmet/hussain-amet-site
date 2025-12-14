import React, { useState } from 'react'
import { Form, Input, Button, Textarea } from "@heroui/react";

function ExperienceCms({ siteData }) {
    const [data, setData] = useState(siteData);

    const onSubmit = async (e) => {
        e.preventDefault();

        const newCompany = e.target.elements['new-company'].value;
        const newRole = e.target.elements['new-role'].value;
        const newDuration = e.target.elements['new-duration'].value;
        const newResponsibility = e.target.elements['new-responsibility'].value;

        if (newCompany && newRole && newDuration && newResponsibility) {
            data.experiences.push({
                company: newCompany,
                role: newRole,
                duration: newDuration,
                responsibilities: [newResponsibility],
            });
        }

        for (const [key, value] of Object.entries(e.target.elements)) {
            if (key.includes("add-responsibility")) {
                const index = parseInt(key.split("-")[2], 10);
                if (value.value) {
                    data.experiences[index].responsibilities.push(value.value);
                }
            }
        }

        await fetch("/api/update-site", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
    };

    return (
        <Form className="flex flex-col" onSubmit={onSubmit}>
            <div className='grid grid-cols-1 gap-4 mb-4 w-full'>
                {data.experiences.map((experience, index) => (
                    <>
                        <p>{experience.company}</p>
                        <div className='grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-4 mb-4 w-full'>
                            <Input
                                key={index}
                                isRequired
                                label="Company"
                                labelPlacement="outside"
                                name="company"
                                placeholder="Enter Company Name"
                                type="text"
                                value={experience.company}
                                onChange={(e) => { data.experiences[index].company = e.target.value; setData({ ...data }); }}
                            />
                            <Input
                                isRequired
                                label="Role"
                                labelPlacement="outside"
                                name="role"
                                placeholder="Enter role"
                                type="text"
                                value={experience.role}
                                onChange={(e) => { data.experiences[index].role = e.target.value; setData({ ...data }); }}
                            />
                            <Input
                                isRequired
                                label="Duration"
                                labelPlacement="outside"
                                name="duration"
                                placeholder="Enter duration"
                                type="text"
                                value={experience.duration}
                                onChange={(e) => { data.experiences[index].duration = e.target.value; setData({ ...data }); }}
                            />
                        </div>
                        <div className='grid grid-cols-1 gap-4 mb-4 w-full'>
                            {experience.responsibilities.map((responsibility, idx) => (
                                <Textarea
                                    key={idx}
                                    isRequired
                                    label="Resposibility"
                                    labelPlacement="outside"
                                    name={`responsibility-${idx}`}
                                    placeholder="Enter responsibility"
                                    type="text"
                                    value={responsibility}
                                    onChange={(e) => { data.experiences[index].responsibilities[idx] = e.target.value; setData({ ...data }); }}
                                />
                            ))}
                            <Textarea
                                label="Resposibility"
                                labelPlacement="outside"
                                name={`add-responsibility-${index}`}
                                placeholder="Enter responsibility"
                                type="text"
                            />
                        </div>
                    </>
                ))}
                <p>Add New Experience</p>
                <div className='grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-4 mb-4 w-full'>
                    <Input
                        label="Company"
                        labelPlacement="outside"
                        name="new-company"
                        placeholder="Enter Company Name"
                        type="text"
                    />
                    <Input
                        label="Role"
                        labelPlacement="outside"
                        name="new-role"
                        placeholder="Enter role"
                        type="text"
                    />
                    <Input
                        label="Duration"
                        labelPlacement="outside"
                        name="new-duration"
                        placeholder="Enter duration"
                        type="text"
                    />
                </div>
                <div className='grid grid-cols-1 gap-4 mb-4 w-full'>
                    <Textarea
                        label="Resposibility"
                        labelPlacement="outside"
                        name="new-responsibility"
                        placeholder="Enter responsibility"
                        type="text"
                    />
                </div>
            </div>
            <Button type="submit" variant="solid" color="primary">
                Submit
            </Button>
        </Form>
    )
}

export default ExperienceCms;