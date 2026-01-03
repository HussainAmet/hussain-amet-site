import React, { useEffect, useState } from 'react'
import { Form, Input, Textarea } from "@heroui/react";
import { getData, updateData } from '@/lib/getData';
import CmsButtons from '../CmsButtons';

function ExperienceCms() {
    const [data, setData] = useState();
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailed, setShowFailed] = useState({status: false, message: ""});

    const fetchData = async () => {
        const experiencesData = await getData("experiences");
        setData(experiencesData.experiences);
    };

    useEffect(() => { fetchData(); }, []);

    const onSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const newCompany = e.target.elements['new-company'].value;
        const newRole = e.target.elements['new-role'].value;
        const newDuration = e.target.elements['new-duration'].value;
        const newResponsibility = e.target.elements['new-responsibility'].value;

        if (newCompany && newRole && newDuration && newResponsibility) {
            const updated = [...data, {
                company: newCompany,
                role: newRole,
                duration: newDuration,
                responsibilities: [newResponsibility],
            }];

            setData(updated);
        }

        for (const [key, value] of Object.entries(e.target.elements)) {
            if (key.includes("add-responsibility")) {
                const index = parseInt(key.split("-")[2], 10);
                if (value.value) {
                    data[index]?.responsibilities.push(value.value);
                }
            }
        }

        const res = await updateData("experiences", { experiences: data });

        if (res.status !== 200) {
            setShowFailed({status: true, message: res.error});
            setTimeout(() => {
                setShowFailed({ status: false, message: "" });
            }, 3000);
            return;
        }

        fetchData();

        setShowSuccess(true);
        form.reset();
        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);
    };

    const revertData = async () => {
        let res = await fetch("/api/update-site/revert-data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: "experiences",
            }),
        });

        res = await res.json();

        if (res.status !== 200) {
            setShowFailed({status: true, message: res.error});
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
            <div className='grid grid-cols-1 gap-4 mb-4 w-full'>
                {data?.map((experience, index) => (
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
                                onChange={(e) => {
                                    const updated = [...data];
                                    updated[index] = {
                                        ...updated[index],
                                        company: e.target.value,
                                    };
                                    setData(updated);
                                }}
                            />
                            <Input
                                isRequired
                                label="Role"
                                labelPlacement="outside"
                                name="role"
                                placeholder="Enter role"
                                type="text"
                                value={experience.role}
                                onChange={(e) => {
                                    const updated = [...data];
                                    updated[index] = {
                                        ...updated[index],
                                        role: e.target.value,
                                    };
                                    setData(updated);
                                }}
                            />
                            <Input
                                isRequired
                                label="Duration"
                                labelPlacement="outside"
                                name="duration"
                                placeholder="Enter duration"
                                type="text"
                                value={experience.duration}
                                onChange={(e) => {
                                    const updated = [...data];
                                    updated[index] = {
                                        ...updated[index],
                                        duration: e.target.value,
                                    };
                                    setData(updated);
                                }}
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
                                    onChange={(e) => {
                                        const updated = [...data];
                                        const responsibilities = [...updated[index].responsibilities];
                                        responsibilities[idx] = e.target.value;

                                        updated[index] = {
                                            ...updated[index],
                                            responsibilities,
                                        };

                                        setData(updated);
                                    }}
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
            <CmsButtons revertData={revertData} showFailed={showFailed} showSuccess={showSuccess} />
        </Form>
    )
}

export default ExperienceCms;