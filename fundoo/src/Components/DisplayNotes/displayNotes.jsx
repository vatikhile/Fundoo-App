import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Icons from "../../Components/CardIcons/CardIcon";

import "./displayNotes.css";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    width: "255px",
    position: "relative",
  },
});

export default function AllNotes() {
  const classes = useStyles();

  return (
    <div className="maincard">
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1">title</Typography>
          <Typography variant="body1">description</Typography>
        </CardContent>
        <CardActions className="CardsIcons">
          <Icons />
        </CardActions>
      </Card>
    </div>
  );
}
