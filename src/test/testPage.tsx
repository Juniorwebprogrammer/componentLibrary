"use client";
import React from "react";
import RootLayout from "../app/layout";

import TimelineUI from "../app/ui/timeline/Timeline";

const TestPage = () => {
  const test = [
    {
      id: 1,
      label: "Eat",
      description: "Eat some food",
      timeStart: "2021-10-01T12:00:00Z",
      timeEnd: "2021-10-01T13:00:00Z",
    },
    {
      id: 2,
      label: "Sleep",
      description: "Take a nap",
      timeStart: "2021-10-01T13:00:00Z",
      timeEnd: "2021-10-01T14:00:00Z",
    },
    {
      id: 3,
      label: "Code",
      description: "Write some code",
      timeStart: "2021-10-01T14:00:00Z",
      timeEnd: "2021-10-01T15:00:00Z",
    },
  ];

  return (
    <RootLayout>
      <>
        <TimelineUI test={test} />
      </>
    </RootLayout>
  );
};

export default TestPage;
