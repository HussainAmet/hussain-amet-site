import React, { useState } from 'react'
import { Form, Input, Button } from "@heroui/react";
import siteData from '@/json/siteData.json';

function SkillsCms() {
    const [data, setData] = useState(siteData);

    const onSubmit = async (e) => {
        e.preventDefault();

        const newSkillFE = e.target.elements['new-skill-0'].value;
        const newSkillBE = e.target.elements['new-skill-1'].value;

        if (newSkillFE) {
            data.skills[0].skills.push(newSkillFE);
        }
        if (newSkillBE) {
            data.skills[1].skills.push(newSkillBE);
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
                {data.skills.map((skill, index) => (
                    <div key={index}>
                        <p className='mb-4'>{skill.title}</p>
                        <div className='grid grid-cols-4 gap-4 mb-4'>
                            {skill.skills.map((item, idx) => (
                                <Input
                                    key={idx}
                                    isRequired
                                    name={`skill-${idx}`}
                                    placeholder="Enter Skill"
                                    type="text"
                                    value={item}
                                    onChange={(e) => { data.skills[index].skills[idx] = e.target.value; setData({ ...data }); }}
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
            <Button type="submit" variant="solid" color="primary">
                Submit
            </Button>
        </Form>
    )
}

export default SkillsCms;