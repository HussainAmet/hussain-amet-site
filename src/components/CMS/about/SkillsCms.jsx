import React, { useEffect, useState } from 'react'
import { Form, Input } from "@heroui/react";
import { getData, updateData } from '@/lib/getData';
import CmsButtons from '../CmsButtons';

function SkillsCms() {
    const [data, setData] = useState();
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailed, setShowFailed] = useState({ status: false, message: "" });

    const fetchData = async () => {
        const skillsData = await getData("skills");
        setData(skillsData.skills);
    };

    useEffect(() => { fetchData(); }, []);

    const onSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const newSkillFE = form.elements['new-skill-0'].value;
        const newSkillBE = form.elements['new-skill-1'].value;

        const updated = [...data];

        if (newSkillFE) {
            updated[0] = {
                ...updated[0],
                skills: [...updated[0].skills, newSkillFE],
            };
        }

        if (newSkillBE) {
            updated[1] = {
                ...updated[1],
                skills: [...updated[1].skills, newSkillBE],
            };
        }

        setData(updated);

        const res = await updateData("skills", { skills: updated });

        if (res.status !== 200) {
            setShowFailed({ status: true, message: res.error });
            setTimeout(() => setShowFailed({ status: false, message: "" }), 3000);
            return;
        }

        fetchData();
        setShowSuccess(true);
        form.reset();

        setTimeout(() => setShowSuccess(false), 3000);
    };

    const revertData = async () => {
        let res = await fetch("/api/update-site/revert-data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: "skills",
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
            <div className='grid grid-cols-1 gap-4 mb-4 w-full'>
                {data?.map((skill, index) => (
                    <div key={index}>
                        <p className='mb-4'>{skill.title}</p>
                        <div className='grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-4 mb-4'>
                            {skill.skills.map((item, idx) => (
                                <Input
                                    key={idx}
                                    isRequired
                                    name={`skill-${idx}`}
                                    placeholder="Enter Skill"
                                    type="text"
                                    value={item}
                                    onChange={(e) => {
                                        const updated = [...data];
                                        const skills = [...updated[index].skills];
                                        skills[idx] = e.target.value;
                                        updated[index] = {
                                            ...updated[index],
                                            skills,
                                        };
                                        setData(updated);
                                    }}
                                />
                            ))}
                            <Input
                                name={`new-skill-${index}`}
                                placeholder="Enter Skill"
                                type="text"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <CmsButtons revertData={revertData} showFailed={showFailed} showSuccess={showSuccess} />
        </Form>
    )
}

export default SkillsCms;