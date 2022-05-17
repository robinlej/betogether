import { useState } from "react";
import StudentHeader from "../components/StudentHeader";
import {
  GroupNameDiv,
  GroupProjectsMainDiv,
  ConsultResultsPageDiv,
} from "../components/DashboardStep5PageElements";
import GroupsPreview from "../components/GroupsPreview";
import { v4 as uuidv4 } from "uuid";

const DashboardStep5 = ({ nextPage }) => {
  const groups = [
    {
      groupNumber: "Group 1",
      groupProjectTitle: "My Great Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dbSchemaPic: "https://unsplash.it/300",
      projectSketch: "https://unsplash.it/300",
      links: "",
      students: [
        {
          name: "Dylan Burgisser",
          picture:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
          name: "Charlotte Günther",
          picture:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
          name: "Anthony Hoyas",
          picture:
            "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
      ],
    },
    {
      groupNumber: "Group 2",
      groupProjectTitle: "My Amazing Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dbSchemaPic: "https://unsplash.it/300",
      projectSketch: "https://unsplash.it/300",
      links: "",
      students: [
        {
          name: "Dylan Burgisser",
          picture:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
          name: "Charlotte Günther",
          picture:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
          name: "Anthony Hoyas",
          picture:
            "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
      ],
    },
    {
      groupNumber: "Group 3",
      groupProjectTitle: "My Superb Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dbSchemaPic: "https://unsplash.it/300",
      projectSketch: "https://unsplash.it/300",
      links: "",
      students: [
        {
          name: "Dylan Burgisser",
          picture:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
          name: "Charlotte Günther",
          picture:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
          name: "Anthony Hoyas",
          picture:
            "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
      ],
    },
    {
      groupNumber: "Group 4",
      groupProjectTitle: "My Stunning Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dbSchemaPic: "https://unsplash.it/300",
      projectSketch: "https://unsplash.it/300",
      links: "",
      students: [
        {
          name: "Dylan Burgisser",
          picture:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
          name: "Charlotte Günther",
          picture:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
          name: "Anthony Hoyas",
          picture:
            "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
      ],
    },
    {
      groupNumber: "Group 5",
      groupProjectTitle: "My Gorgeous Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dbSchemaPic: "https://unsplash.it/300",
      projectSketch: "https://unsplash.it/300",
      links: "",
      students: [
        {
          name: "Dylan Burgisser",
          picture:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
          name: "Charlotte Günther",
          picture:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
          name: "Anthony Hoyas",
          picture:
            "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
      ],
    },
    {
      groupNumber: "Group 6",
      groupProjectTitle: "My Terrific Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dbSchemaPic: "https://unsplash.it/300",
      projectSketch: "https://unsplash.it/300",
      links: "",
      students: [
        {
          name: "Dylan Burgisser",
          picture:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
          name: "Charlotte Günther",
          picture:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
          name: "Anthony Hoyas",
          picture:
            "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
      ],
    },
  ];

  const [expandedItem, setExpandedItem] = useState("");

  const expandItem = (item) => {
    if (expandedItem === item.groupProjectTitle) setExpandedItem("");
    else setExpandedItem(item.groupProjectTitle);
  };

  return (
    <main>
      <ConsultResultsPageDiv>
        <GroupNameDiv>
          <h1> Group Project Name </h1>
          <h2 style={{ color: "#63C3D1" }}> You are in Group 2 </h2>
          <h3 style={{ color: "#EE964B", fontSize: "16px" }}>
            {" "}
            Deadline: 22nd July{" "}
          </h3>
        </GroupNameDiv>
        <GroupProjectsMainDiv>
          {groups.map((group) => {
            return (
              <GroupsPreview
                key={uuidv4()}
                group={group}
                expandItem={expandItem}
                isExpanded={
                  expandedItem === group.groupProjectTitle ? true : false
                }
              />
            );
          })}
        </GroupProjectsMainDiv>
      </ConsultResultsPageDiv>
    </main>
  );
};

export default DashboardStep5;
