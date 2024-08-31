import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("Clicking plus button should add one upvote", () => {
    const app = render(<App></App>);

    const plusButtons = app.container.querySelectorAll(".plusButton");
    fireEvent.click(plusButtons[0]);
    const upvoteLists = app.container.querySelectorAll(".upvoteContainer");
    for (let i = 0; i < upvoteLists.length; i++) {
      if (i === 0) {
        expect(upvoteLists[i].children).toHaveLength(1);
      } else {
        expect(upvoteLists[i].children).toHaveLength(0);
      }
    }
  });

  test("Clicking upvote button should change state for one button", async () => {
    const app = render(<App></App>);

    const plusButtons = app.container.querySelectorAll(".plusButton");
    fireEvent.click(plusButtons[0]);
    const upvoteLists = app.container.querySelectorAll(".upvoteContainer");
    const upvoteButtons = upvoteLists[0].children;
    fireEvent.click(upvoteButtons[0]);

    expect(upvoteButtons[0]).toHaveClass("backgroundSelected");
  });
});
