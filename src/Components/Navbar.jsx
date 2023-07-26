import React, { useState } from "react";

import Styles from "../styles/Navbar.module.css";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import {LuLayoutDashboard} from "react-icons/lu"
import {TfiWrite} from "react-icons/tfi"
import {MdOutlineLibraryBooks} from "react-icons/md"
import {GoProjectSymlink} from "react-icons/go"
const Navbar = () => {
  const [isOpen, toggleIsOpen] = useState(false);
  const onOpenModalClick = () => {
    toggleIsOpen(!isOpen);
  };

  return (
    <>
      <div className={Styles.navbar}>
        <div className={Styles.g1}>
          <div className={Styles.openhandler}>
            <HiMenuAlt2 onClick={onOpenModalClick} />
          </div>
          <div className={Styles.pageheding}>
            <h1>Assesssment </h1>
          </div>
        </div>

        <div className={Styles.pagesubheding}>
          <div className={Styles.navlinkss}>My Assessments</div>
          <div>Unstop Assessments</div>
        </div>
      </div>
      {isOpen && (
        <div className={Styles.mobilnav}>
          <div className={Styles.monavcon}>
            <div className={Styles.frameGroup}>
              <div className={Styles.menuParent}>
                <div className={Styles.menu}>Menu</div>
                <RxCross2
                  className={Styles.cutIcon1}
                  onClick={onOpenModalClick}
                />
              </div>
              <div className={Styles.frameWrapper}>
                <div className={Styles.dashboardParent}>
                  <LuLayoutDashboard
                    className={Styles.dashboardIcon1}
                  
                  />
                  <div className={Styles.menu}>Dashboard</div>
                </div>
              </div>
              <div className={Styles.frameDiv}>
                <div className={Styles.noteAltParent}>
                  <TfiWrite
                    className={Styles.noteAltIcon1}
                  
                  />
                  <div className={Styles.assessment}>Assessment</div>
                </div>
                <div className={Styles.frameChild} />
              </div>
              <div className={Styles.frameWrapper}>
                <div className={Styles.dashboardParent}>
                  <MdOutlineLibraryBooks className={Styles.noteAltIcon1}  />
                  <div className={Styles.menu}>My Library</div>
                </div>
              </div>
            </div>
            <GoProjectSymlink className={Styles.frameItem}  />
            <div className={Styles.frameWrapper2}>
              <div className={Styles.frameParent1}>
                <div className={Styles.dashboardParent}>
                  <GoProjectSymlink
                    className={Styles.noteAltIcon1}
                    
                  />
                  <div className={Styles.menu}>Round Status</div>
                </div>
                <div className={Styles.adminWrapper}>
                  <div className={Styles.admin}>Admin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
