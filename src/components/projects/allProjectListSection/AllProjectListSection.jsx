import MyProjectsSection from "@/components/utility/myProjectsSection/MyProjectsSection";
import MyProjectsInListView from "../myProjectsInListView/MyProjectsInListView";

function AllProjectListSection({ siteData, list }) {
  return (
    <>
      {list === 'list' ?
        <MyProjectsInListView siteData={siteData} />
      : <MyProjectsSection siteData={siteData} allowed={false} renderList={6} />
      }
    </>
  )
}

export default AllProjectListSection;
