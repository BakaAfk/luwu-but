import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea,
  Button,
  Collapse,
  Typography,
} from "@mui/material";

const Thanks = ({ show, data, available }) => {
  return (
    <Collapse in={!show & !available}>
      <div className="thanks-container">
        <Card
          variant="outlined"
          sx={{
            width: "100%",
          }}
        >
            <CardContent
                sx={{pt: 3, pb: 3, borderBottom: 1, borderColor: "divider" }}
            >
                <Typography variant="body1" sx={{ pl: 1, pr: 1, fontStyle:"italic" }}>
                  Cảm ơn {data.name} đã gửi thư cho tớ
                </Typography>
            </CardContent>
            <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image="https://i.imgur.com/1p4nTpQ.jpg"
              alt="Tớ ngồi code sml"
            />
          </CardActionArea>
             {/* Này cậu thay bằng cái gì cũng được nhé */}
            <CardActions sx={{ pl: 2, pr: 2, pt: 2, pb: 2 }}>
                <Button size="small" color="primary" onClick={() => {window.open("https://www.facebook.com/BakaAfk/", "_blank")}}>
                Direct của tớ
              </Button>
            </CardActions>
        </Card>
      </div>
    </Collapse>
  );
};

export default Thanks;
