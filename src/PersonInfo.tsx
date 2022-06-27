import React from "react";
import { Contact } from "./types";
import { GetInitials } from "./utils";

type Props = {
  data: Contact;
  onClick: (contact: Contact) => void;
  isSelected?: boolean;
};

function PersonInfo({ data, isSelected, onClick }: Props) {
  const { firstNameLastName, jobTitle, emailAddress } = data;

  return (
    <div
      className={`person-info ${isSelected && "person-info--selected"}`}
      onClick={() => onClick(data)}
    >
      <div className="person-title">
        <div className="initials">{GetInitials(firstNameLastName)}</div>
        <div>
          <div className="firstNameLastName">{firstNameLastName}</div>
          <div className="jobTitle">{jobTitle}</div>
        </div>
      </div>
      <div className="emailAddress">{emailAddress}</div>
    </div>
  );
}

export default PersonInfo;
