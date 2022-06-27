import React from "react";
import PersonInfo from "./PersonInfo";
import { useFetchData } from "./hooks";
import { Contact } from "./types";
import { GetInitials } from "./utils";
import ScrollToTop from "react-scroll-to-top";
import {
  AppWrapper,
  Loader,
  FetchButton,
  SelectedContacts,
  SelectedInitials,
  StyledList,
  Initials,
} from "./styles";

function App() {
  const [selected, setSelected] = React.useState<Contact[]>([]);

  const { data, loading, errorMsg, fetchMore } = useFetchData();

  const handleSelection = (contact: Contact) => {
    const contactId = contact.id;
    if (selected.find(({ id }) => id === contactId)) {
      setSelected((prevSelected) =>
        prevSelected.filter(({ id }) => id !== contactId)
      );
    } else {
      setSelected((prevSelected) => [...prevSelected, contact]);
    }
  };

  const filteredData = React.useMemo(
    () =>
      data.filter(
        ({ id }) => !selected.find(({ id: selectedId }) => selectedId === id)
      ),
    [data, selected]
  );

  return (
    <AppWrapper>
      <SelectedContacts>
        Selected contacts: {selected.length}
        <SelectedInitials>
          {selected.map(({ firstNameLastName }) => (
            <Initials>{GetInitials(firstNameLastName)}</Initials>
          ))}
        </SelectedInitials>
      </SelectedContacts>
      <StyledList>
        {selected.map((personInfo) => (
          <PersonInfo
            key={personInfo.id}
            data={personInfo}
            onClick={handleSelection}
            isSelected
          />
        ))}
        {filteredData.map((personInfo) => (
          <PersonInfo
            key={personInfo.id}
            data={personInfo}
            onClick={handleSelection}
          />
        ))}
        {loading && <Loader />}
        {errorMsg}
        {!loading && (
          <FetchButton onClick={fetchMore}>
            {errorMsg ? "Retry fetching" : "Fetch more"}
          </FetchButton>
        )}
      </StyledList>
      <ScrollToTop smooth component="⬆" />
    </AppWrapper>
  );
}

export default App;
