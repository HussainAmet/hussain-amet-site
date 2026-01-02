import React, { useEffect, useState } from 'react'
import { Form, Input, Button } from "@heroui/react";
import { getData, updateData } from '@/lib/getData';

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

        const newSkillFE = e.target.elements['new-skill-0'].value;
        const newSkillBE = e.target.elements['new-skill-1'].value;

        if (newSkillFE) {
            data[0]?.skills.push(newSkillFE);
        }
        if (newSkillBE) {
            data[1]?.skills.push(newSkillBE);
        }

        const res = await updateData("skills", { skills: data });

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
                                    onChange={(e) => { data[index].skills[idx] = e.target.value; setData({ ...data }); }}
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

export default SkillsCms;