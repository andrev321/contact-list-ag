import styled from "styled-components";

export const AppWrapper = styled.div`
  margin: 20px 0;
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

export const SelectedContacts = styled.div`
  color: #333333;
  font-size: 26px;
  font-weight: 700;
  width: 100%;
  background-color: #f4f4f4;
  padding: 10px 0;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

export const SelectedInitials = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
`;

export const PersonInfoWrapper = styled.div<{ isSelected: boolean }>`
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: ${({ isSelected }) => (isSelected ? "18px" : "20px")};
  border: ${({ isSelected }) => (isSelected ? "2px solid red" : "unset")};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  background: #fff;
  cursor: pointer;
  user-select: none;

  &:hover {
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.15);
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 0 10px;
  }
`;

export const PersonTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const Initials = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid black;
  text-transform: uppercase;
  flex-shrink: 0;
  margin-right: 10px;
  background-color: white;
`;

export const FirstNameLastName = styled.div`
  color: #333333;
  font-size: 20px;
  font-weight: 700;
`;

export const JobTitle = styled.div`
  color: #e74c3c;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const EmailAddress = styled.div`
  color: #666666;
  font-size: 14px;
  line-height: 1.8em;
  text-align: center;
`;

export const Loader = styled.div`
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid #3498db;
  width: 30px;
  height: 30px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const FetchButton = styled.div`
  padding: 12px 20px;
  font-size: 15px;
  border: 0;
  color: white;
  background-color: #3498db;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.15);
  }
`;
