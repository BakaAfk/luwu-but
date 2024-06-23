import React from "react";
import { Card, CardContent, Typography, Slider, Box, Collapse } from "@mui/material";
import dc from "../lib/DataConfig";

const MultipleChoice = ({setData, data, available}) => {
  const marks = [
    {
      value: 0,
      label: dc.handsome.label.zero,
    },
    {
      value: 10,
      label: dc.handsome.label.one,
    },
    {
      value: 20,
      label: dc.handsome.label.two,
    },
    {
      value: 30,
      label: dc.handsome.label.three,
    },
    {
      value: 40,
      label: dc.handsome.label.four,
    },
    {
      value: 50,
      label: dc.handsome.label.five,
    },
    {
      value: 60,
      label: dc.handsome.label.six,
    },
    {
      value: 70,
      label: dc.handsome.label.seven,
    },
    {
      value: 80,
      label: dc.handsome.label.eight,
    },
    {
      value: 90,
      label: dc.handsome.label.nine,
    },
    {
      value: 100,
      label: dc.handsome.label.ten,
    }

    
  ];
  return (
    <Collapse in={available && data.name !== "" && data.name !== undefined ? true : false}>
    <div className="multipleChoice-container">
      <Card
        variant="outlined"
        sx={{
          p: 1,
        }}
      >
        <CardContent>
          <Typography variant="h6">{dc.handsome.title}</Typography>
          <Typography variant="subtitle2" sx={{ pb: 3 }} color="text.secondary">
            {dc.handsome.subtitle}
          </Typography>
          <Box sx={{ width: { md: '90%' }, pl:3, pr:3 , }}>
            <Slider
              aria-label="Custom marks"
              defaultValue={5}
              step={1}
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e) => setData({...data, handsome: e.target.value})}
            />
          </Box>
        </CardContent>
      </Card>
    </div>
    </Collapse>
  );
};

export default MultipleChoice;
