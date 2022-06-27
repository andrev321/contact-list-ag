import React from "react";
import {
  FirstNameLastName,
  Initials,
  JobTitle,
  PersonInfoWrapper,
  PersonTitle,
} from "./styles";
import { Contact } from "./types";
import { GetInitials } from "./utils";
import { EmailAddress } from "./styles";

type Props = {
  data: Contact;
  onClick: (contact: Contact) => void;
  isSelected?: boolean;
};

function PersonInfo({ data, isSelected = false, onClick }: Props) {
  const { firstNameLastName, jobTitle, emailAddress } = data;

  return (
    <PersonInfoWrapper isSelected={isSelected} onClick={() => onClick(data)}>
      <PersonTitle>
        <Initials>{GetInitials(firstNameLastName)}</Initials>
        <div>
          <FirstNameLastName>{firstNameLastName}</FirstNameLastName>
          <JobTitle>{jobTitle}</JobTitle>
        </div>
      </PersonTitle>
      <EmailAddress>{emailAddress}</EmailAddress>
    </PersonInfoWrapper>
  );
}

export default PersonInfo;
