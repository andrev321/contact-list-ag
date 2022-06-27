import * as React from "react";
import {
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PersonInfo } from "./PersonInfo";

const testPerson = {
  id: "1",
  jobTitle: "testJobTitle",
  emailAddress: "test@email.address",
  firstNameLastName: "Test Name",
};

test("every section of person info is displayed", async () => {
  render(<PersonInfo data={testPerson} onClick={jest.fn()} />);

  await screen.findByText("testJobTitle");
  await screen.findByText("test@email.address");
  await screen.findByText("Test Name");
  await screen.findByText("TN");
});

test("proper function is called on click", async () => {
  const onClickFn = jest.fn();
  render(<PersonInfo data={testPerson} onClick={onClickFn} />);

  expect(onClickFn).toBeCalledTimes(0);
  const contactTile = await screen.findByText("Test Name");
  userEvent.click(contactTile);

  expect(onClickFn).toBeCalledTimes(1);
  expect(onClickFn).toBeCalledWith(testPerson);
});
