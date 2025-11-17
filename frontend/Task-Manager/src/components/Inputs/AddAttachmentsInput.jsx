import React, {useState} from "react";
import { HiMiniPlus, HiOutlineTrash } from "react-icons/hi2";
import { LuPaperclip } from "react-icons/lu";

const AddAttachmentsInput= ({attachments, setAttachments}) =>
{
    const [option, setOption] =useState("")

    //function to handle adding an option
    const handleAddOption=()=> 
    {
        if(option.trim())
        {
            setAttachments([...attachments, option.trim()]);
            setOption("");
        }
    };

    //function to handle deleting an option
    const handledeleteOption=(index) => 
    {
        const updatedArr= attachments.filter((_, inx)=> idx !== index);
        setAttachments(updatedArr);
    }
  return(
    <div> AddAttachmentsInput </div>
  )
}
export default AddAttachmentsInput