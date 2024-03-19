import React from "react";
import { FaRegNoteSticky, FaMoon, FaNotesMedical } from "react-icons/fa6";
import { PiArchiveDuotone } from "react-icons/pi";
import { VscLayersActive } from "react-icons/vsc";

const Navbar = ({ setOpenCreateModal, active, setActive }) => {

    const handleToggleNotes = () => {
        setActive(!active); 
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
            <div className="flex items-center">
                <FaRegNoteSticky
                    style={{ color: "green" }}
                    className="mr-2 text-3xl mt-1"
                />
                <h1 className="w-full text-3xl font-bold">Notes</h1>
            </div>
            <ul className="flex">
                <li className="p-4">
                    <button
                        type="button"
                        data-twe-toggle="tooltip"
                        data-twe-placement="bottom"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        title={active ? "View Archived Notes" : "View Active Notes"}
                        className="flex items-center underline px-4"
                        onClick = {handleToggleNotes}
                    >
                        {active ? (<PiArchiveDuotone className="mr-2 text-2xl" />) : (<VscLayersActive style = {{color: 'green'}} className = "mr-2 text-2xl"/>)}
                        {active ? "Archived Notes" : "Active Notes"}
                    </button>
                </li>
                <li className="p-4">
                    <button
                        type="button"
                        data-twe-toggle="tooltip"
                        data-twe-placement="bottom"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        title="Create a Note"
                        className="flex items-center underline px-4"
                        onClick = {() => setOpenCreateModal(true)}
                    >
                        <FaNotesMedical style={{ color: "#14532d" }} className="mr-2 text-xl" />
                        New Note...
                    </button>
                </li>
                <li className="p-4">
                    <button
                        type="button"
                        data-twe-toggle="tooltip"
                        data-twe-placement="bottom"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        title="Dark Mode"
                    >
                        <FaMoon style={{ color: "#14532d" }} className="text-2xl" />
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
