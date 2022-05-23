import { useEffect, useRef } from "react";
import {
  GroupProjectCardTitle,
  GroupProjectCardGroups,
  GroupProjectStudentImage,
  GroupProjectStudentDiv,
  GroupProjectFullDiv,
  GroupProjectDetails,
} from "./DashboardStep5PageElements";
import { v4 as uuidv4 } from "uuid";
import GroupProjectContent from "./GroupProjectContent";

function GroupsPreview({ group, expandItem, expandedItem, isExpanded }) {
  const groupRef = useRef(null);

  const expandGroup = () => {
    expandItem(group);
  };

  useEffect(() => {
    groupRef.current.style.maxHeight = `calc(${groupRef.current.scrollHeight}px + 3rem`;
    groupRef.current.style.order = isExpanded ? '-1' : null;
    
    console.log(isExpanded)

    if (isExpanded) {
      console.log('after expanding: scroll to element')
      window.scrollTo({top: groupRef.current.offsetTop, behavior: 'smooth'})
    }
    // if (!isExpanded && expandedItem === null) {
    //   window.scrollTo({
    //     top: groupRef.current.offsetTop,
    //     behavior: 'smooth',
    //   })
    // }
  }, [isExpanded]);

  return (
    <article ref={groupRef} onClick={expandGroup}>
      <GroupProjectCardTitle>
        <p>{group.groupNumber}</p>
        <h3>{group.groupProjectTitle}</h3>
      </GroupProjectCardTitle>
      <GroupProjectFullDiv>
        <GroupProjectCardGroups>
          {group.students.map((student) => {
            return (
              <GroupProjectStudentDiv key={uuidv4()}>
                <GroupProjectStudentImage src={student.picture} />
                <p>{student.name}</p>
              </GroupProjectStudentDiv>
            );
          })}
        </GroupProjectCardGroups>
        <GroupProjectDetails>
          <GroupProjectContent group={group} isExpanded={isExpanded} />
        </GroupProjectDetails>
      </GroupProjectFullDiv>
    </article>
  );
}

export default GroupsPreview;
