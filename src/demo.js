import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: "1",
    margin: theme.spacing(2),
    minWidth: 160,

    marginBottom: 15,
    display: "flex",
    backgroundColor: "gold",

    transition: "0.3s cubic-bezier(.2,1,.41,.9)",
    "&:hover": {
      boxShadow: "0 10px 20px 0 rgba(0,0,0,0.12)",
      transform: "scale(1.04)",
      margin: theme.spacing(2)
    }
  }
}));

var Incoming = "9";
var Sentinel = "9";

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={"auto"}>
        <Card className={classes.root} alignItems="center">
          <CardContent>
            <Typography variant="caption" align="right" gutterBottom="false">
              Incoming
            </Typography>
            <br />
            <br />
            <Typography variant="h3" gutterBottom="true">
              <b> {Incoming} </b>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={"auto"}>
        <Card className={classes.root} alignItems="center">
          <CardContent>
            <Typography variant="caption" align="right" gutterBottom="false">
              Sentinel
            </Typography>
            <br />
            <br />
            <Typography variant="h3" gutterBottom="true">
              <b> {Sentinel} </b>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={"auto"}>
        <Card className={classes.root} alignItems="center">
          <CardContent>
            <Typography variant="caption" align="right" gutterBottom="false">
              Q APh Release
            </Typography>
            <br />
            <br />
            <Typography variant="h3" gutterBottom="true">
              <b> {Incoming} </b>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={"auto"}>
        <Card className={classes.root} alignItems="center">
          <CardContent>
            <Typography variant="caption" align="right" gutterBottom="false">
              Day0
            </Typography>
            <br />
            <br />
            <Typography variant="h3" gutterBottom="true">
              <b> {Incoming} </b>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={"auto"}>
        <Card className={classes.root} alignItems="center">
          <CardContent>
            <Typography variant="caption" align="right" gutterBottom="false">
              Day 11
            </Typography>
            <br />
            <br />
            <Typography variant="h3" gutterBottom="true">
              <b> {Incoming} </b>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={"auto"}>
        <Card className={classes.root} alignItems="center">
          <CardContent>
            <Typography variant="caption" align="right" gutterBottom="false">
              Micro +
            </Typography>
            <br />
            <br />
            <Typography variant="h3" gutterBottom="true">
              <b> {Incoming} </b>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={"auto"}>
        <Card className={classes.root} alignItems="center">
          <CardContent>
            <Typography variant="caption" align="right" gutterBottom="false">
              FP + Release
            </Typography>
            <br />
            <br />
            <Typography variant="h3" gutterBottom="true">
              <b> {Incoming} </b>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={"auto"}>
        <Card className={classes.root} alignItems="center">
          <CardContent>
            <Typography variant="caption" align="right" gutterBottom="false">
              Sentinel
            </Typography>
            <br />
            <br />
            <Typography variant="h3" gutterBottom="true">
              <b> {Incoming} </b>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
