import React from "react";
import { Initials, SelectedContacts, SelectedInitials } from "../styles";
import { Contact } from "../types";
import { GetInitials } from "../utils";

type Props = { selected: Contact[] };

export function SelectedContactsSummary({ selected }: Props) {
  return (
    <SelectedContacts>
      Selected contacts: {selected.length}
      <SelectedInitials>
        {selected.map(({ firstNameLastName, id }) => (
          <Initials key={`initial${id}`}>
            {GetInitials(firstNameLastName)}
          </Initials>
        ))}
      </SelectedInitials>
    </SelectedContacts>
  );
}
