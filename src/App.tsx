import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { useFetchData } from "./hooks";
import { Contact } from "./types";
import { AppWrapper, Loader, FetchButton, StyledList } from "./styles";
import { PersonInfo, SelectedContactsSummary } from "./components";

export function App() {
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
      <SelectedContactsSummary selected={selected} />
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
