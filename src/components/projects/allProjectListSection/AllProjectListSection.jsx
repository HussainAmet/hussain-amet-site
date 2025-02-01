import React from "react";
import MyProjectsSection from "@/components/utility/myProjectsSection/MyProjectsSection";
import MyProjectsInListView from "../myProjectsInListView/MyProjectsInListView";

function AllProjectListSection({ list }) {
  return (
    <>
      {list === 'list' ?
        <MyProjectsInListView />
      : <MyProjectsSection allowed={false} renderList={6} />
      }
    </>
  )
}

export default AllProjectListSection;
