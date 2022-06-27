import * as React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as hooks from "./hooks/useFetchData";
import { App } from "./App";

test("init loading data on start", async () => {
  render(<App />);

  const loader = await screen.findByTestId("loader");
  await waitForElementToBeRemoved(loader);
});

test("error is displayed and button label is changed", async () => {
  jest.spyOn(hooks, "useFetchData").mockReturnValue({
    data: [],
    loading: false,
    errorMsg: "test error message",
    fetchMore: jest.fn(),
  });

  render(<App />);

  expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
  await screen.findByText(/test error message/i);
  await screen.findByText(/retry fetching/i);
});

test("button is displayed and triggers proper function", async () => {
  const fetchMoreFn = jest.fn();

  jest.spyOn(hooks, "useFetchData").mockReturnValue({
    data: [],
    loading: false,
    errorMsg: "",
    fetchMore: fetchMoreFn,
  });

  render(<App />);

  expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
  const fetchBtn = await screen.findByText(/fetch more/i);
  userEvent.click(fetchBtn);

  expect(fetchMoreFn).toBeCalledTimes(1);
});

test("counter is updated after selecting contact", async () => {
  jest.spyOn(hooks, "useFetchData").mockReturnValue({
    data: [
      {
        id: "1",
        jobTitle: "testJobTitle",
        emailAddress: "test@email.address",
        firstNameLastName: "Test Name",
      },
    ],
    loading: false,
    errorMsg: "",
    fetchMore: jest.fn(),
  });

  render(<App />);

  await screen.findByText(/selected contacts: 0/i);
  const contactTile = await screen.findByText(/test name/i);
  userEvent.click(contactTile);

  await screen.findByText(/selected contacts: 1/i);
});
