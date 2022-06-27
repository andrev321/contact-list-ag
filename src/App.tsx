import React from "react";
import PersonInfo from "./PersonInfo";
import { useFetchData } from "./hooks";
import { Contact } from "./types";
import { GetInitials } from "./utils";

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
    <div className="App">
      <div className="selected">
        Selected contacts: {selected.length}
        <div className="selected-initials">
          {selected.map(({ firstNameLastName }) => (
            <div className="initials">{GetInitials(firstNameLastName)}</div>
          ))}
        </div>
      </div>
      <div className="list">
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
        {loading && <div className="loader" />}
        {errorMsg}
        {!loading && (
          <button className="fetchBtn" onClick={fetchMore}>
            {errorMsg ? "Retry fetching" : "Fetch more"}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
