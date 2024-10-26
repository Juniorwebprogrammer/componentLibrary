import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function TimelineUI({ test }) {
  return (
    <Timeline position="alternate">
      {test.map((item) => (
        <TimelineItem key={item.id}>
          <TimelineSeparator>
            <TimelineConnector sx={{ backgroundColor: "black" }} />
            <TimelineDot
              sx={{ backgroundColor: item.id % 2 === 0 ? "D9D9D9" : "black" }}
            />
            <TimelineConnector sx={{ backgroundColor: "black" }} />
          </TimelineSeparator>
          <TimelineContent>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {item.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Start: {item.startTime}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  End: {item.endTime}
                </Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
