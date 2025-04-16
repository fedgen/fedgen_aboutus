import React from "react";
import * as AiIcons from "react-icons/ai";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { TbArticle } from "react-icons/tb";
import { MdOutlineUpcoming } from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/Project",
    icon: <MdOutlinePeopleAlt />,
    cName: "nav-text",
  },
  {
    title: "People",
    path: "/People",
    icon: <MdOutlinePeopleAlt />,
    cName: "nav-text",
  },
  {
    title: "Published Article",
    path: "/PublishedArticle",
    icon: <TbArticle />,
    cName: "nav-text",
  },
  {
    title: "Upcoming Events",
    path: "/UpcomingEvents",
    icon: <MdOutlineUpcoming />,
    cName: "nav-text",
  },
  {
    title: "Gallery",
    path: "/Gallery",
    icon: <MdOutlineUpcoming />,
    cName: "nav-text",
  },
  {
    title: "FEDGEN Documentation",
    path: "https://fedgenhpc.readthedocs.io/en/latest/welcome/About FEDGEN.html",
    icon: <MdOutlineUpcoming />,
    cName: "nav-text",
  },
];
