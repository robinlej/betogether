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

function GroupsPreview({ group, expandItem, isExpanded }) {
  const groupRef = useRef(null);

  const expandGroup = () => {
    expandItem({id: group.groupProjectTitle, isExpanded});
  };

  useEffect(() => {
    groupRef.current.style.maxHeight = `calc(${groupRef.current.scrollHeight}px + 3rem`;
    groupRef.current.style.order = isExpanded ? '-1' : null
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
