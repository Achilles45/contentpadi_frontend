"use client"

import React from 'react'
import Link from 'next/link'
import styles from "./sidebar.module.scss"
import { usePathname } from 'next/navigation';
import { 
        MdDashboardCustomize, 
        MdEventNote, 
        MdAssignmentAdd,
        MdLocalPostOffice,
        MdPersonAddAlt 
    } from "react-icons/md";

    import { BiGitBranch, BiGroup } from "react-icons/bi";

    // import { HiUsers } from "react-icons/hi2";

interface sideBarLinkProps {
    label: string,
    path: string,
    icon: any
}

 const SidebarLink:React.FC<sideBarLinkProps> = ({
    label,
    path,
    icon
}) => {
    const pathname = usePathname()
    return (
        <div className={ styles["links"] }>
            <Link className={ pathname !== `/dashboard/${ path }` ? styles["links__null"] : styles["links--active"] } href={ `/dashboard/${ path }` }>{ icon } &nbsp; { label }</Link>
        </div>
    )
}

const Sidebar = () => {
  return (
    <div className={ styles["sidebar"] }>
        <SidebarLink icon={ <MdDashboardCustomize size="1.25rem" /> } path='overview' label='Dashboard Overview' />
        <SidebarLink icon={ <BiGitBranch size="1.25rem" /> } path='requests' label='Content Request' />
        <SidebarLink icon={ <MdEventNote size="1.25rem" /> } path='ideas' label='My Content Ideas' />
        <SidebarLink icon={ <MdAssignmentAdd size="1.25rem" /> } path='add-idea' label='Add Content Idea' />
        <SidebarLink icon={ <BiGroup size="1.25rem" /> } path='creators' label='ContentPadi Creators' />
        <SidebarLink icon={ <MdLocalPostOffice size="1.25rem" /> } path='messages' label='All Messages' />
        <SidebarLink icon={ <MdPersonAddAlt size="1.25rem" /> } path='profile' label='My Profile' />
    </div>
  )
}

export default Sidebar