import { getData, updateData } from "@/lib/getData";
import { Form, Input, Textarea } from "@heroui/react";
import { useEffect, useState } from "react";
import CmsButtons from "../CmsButtons";

function ProjectsCms() {
  const [data, setData] = useState();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState({ status: false, message: "" });

  const fetchData = async () => {
    const projectsData = await getData("projects");
    console.log(projectsData);
    setData(projectsData);
  };

  useEffect(() => {
    data && console.log(data);
  }, [data]);

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const newCompany = e.target.elements["new-company"].value;
    const newRole = e.target.elements["new-role"].value;
    const newDuration = e.target.elements["new-duration"].value;
    const newResponsibility = e.target.elements["new-responsibility"].value;

    if (newCompany && newRole && newDuration && newResponsibility) {
      const updated = [
        ...data,
        {
          company: newCompany,
          role: newRole,
          duration: newDuration,
          responsibilities: [newResponsibility],
        },
      ];

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

    const res = await updateData("projects", { projects: data });

    if (res.status !== 200) {
      setShowFailed({ status: true, message: res.error });
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
        name: "projects",
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
      <div className="grid grid-cols-1 gap-4 mb-4 w-full">
        {data &&
          Object.entries(data).map(([key, value], index) => (
            <>
              <p>{key}</p>
              <div className="grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-4 mb-4 w-full">
                <Input
                  key={index}
                  isRequired
                  label="Title"
                  labelPlacement="outside"
                  name="title"
                  placeholder="Enter Project Title"
                  type="text"
                  value={value.title}
                  onChange={(e) => {
                    const updated = [...data];
                    updated[index] = {
                      ...updated[index],
                      title: e.target.value,
                    };
                    setData(updated);
                  }}
                />
                <Input
                  isRequired
                  label="Tag Line"
                  labelPlacement="outside"
                  name="tag-line"
                  placeholder="Enter tag line"
                  type="text"
                  value={value.tagLine}
                  onChange={(e) => {
                    const updated = [...data];
                    updated[index] = {
                      ...updated[index],
                      tagLine: e.target.value,
                    };
                    setData(updated);
                  }}
                />
                <Input
                  isRequired
                  label="Skills Used"
                  labelPlacement="outside"
                  name="skills-used"
                  placeholder="Enter skills used"
                  type="text"
                  value={value.skill}
                  onChange={(e) => {
                    const updated = [...data];
                    updated[index] = {
                      ...updated[index],
                      skill: e.target.value,
                    };
                    setData(updated);
                  }}
                />
              </div>
              <div className="grid grid-cols-1 gap-4 mb-4 w-full">
                {value?.quickLinks &&
                  Object.entries(value?.quickLinks).map(([key, value]) => (
                    <>
                      <p>{key}</p>
                      {value.map((item, idx) => (
                        <>
                          <Textarea
                            key={idx}
                            isRequired
                            label="Title"
                            labelPlacement="outside"
                            name={`title-${idx}`}
                            placeholder="Enter Title"
                            type="text"
                            value={item.title}
                            onChange={(e) => {
                              const updated = [...data];
                              const quickLinks = [...updated[index].quickLinks];
                              const linkItems = [...quickLinks[qidx][idx]];
                              linkItems[idx] = {
                                ...linkItems[idx],
                                title: e.target.value,
                              };
                              quickLinks[qidx][idx] = linkItems;

                              updated[index] = {
                                ...updated[index],
                                quickLinks,
                              };

                              setData(updated);
                            }}
                          />
                          <Textarea
                            key={idx}
                            isRequired
                            label="Description"
                            labelPlacement="outside"
                            name={`description-${idx}`}
                            placeholder="Enter description"
                            type="text"
                            value={item.description}
                            onChange={(e) => {
                              const updated = [...data];
                              const quickLinks = [...updated[index].quickLinks];
                              const linkItems = [...quickLinks[qidx][idx]];
                              linkItems[idx] = {
                                ...linkItems[idx],
                                description: e.target.value,
                              };
                              quickLinks[qidx][idx] = linkItems;

                              updated[index] = {
                                ...updated[index],
                                quickLinks,
                              };

                              setData(updated);
                            }}
                          />
                        </>
                      ))}
                      <Textarea
                        label="Title"
                        labelPlacement="outside"
                        name={`add-title-${index}`}
                        placeholder="Enter title"
                        type="text"
                      />
                      <Textarea
                        label="Description"
                        labelPlacement="outside"
                        name={`add-description-${index}`}
                        placeholder="Enter description"
                        type="text"
                      />
                    </>
                  ))}
              </div>
            </>
          ))}
        <p>Add New Project</p>
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-4 mb-4 w-full">
          <Input
            label="Title"
            labelPlacement="outside"
            name="new-title"
            placeholder="Enter Title"
            type="text"
          />
          <Input
            label="Tag Line"
            labelPlacement="outside"
            name="new-tagline"
            placeholder="Enter tag line"
            type="text"
          />
          <Input
            label="Skills Used"
            labelPlacement="outside"
            name="new-skills-used"
            placeholder="Enter skills used"
            type="text"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4 w-full">
          <p>Quick Links</p>
          <Textarea
            label="Title"
            labelPlacement="outside"
            name="new-q-title"
            placeholder="Enter title"
            type="text"
          />
          <Textarea
            label="Description"
            labelPlacement="outside"
            name="new-q-description"
            placeholder="Enter description"
            type="text"
          />
        </div>
      </div>
      <CmsButtons
        revertData={revertData}
        showFailed={showFailed}
        showSuccess={showSuccess}
      />
    </Form>
  );
}

export default ProjectsCms;
