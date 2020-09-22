import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { acceptRequest } from "slices/requestsSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  paragraph: {
    marginBottom: theme.spacing(2),
  },
  actions: {
    justifyContent: "flex-end",
  },
}));

const AcceptRequest = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const classes = useStyles();

  const handleAcceptRequest = () => {
    dispatch(acceptRequest(id))
      .then(unwrapResult)
      .then(() => console.log(acceptRequest));
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={<Typography variant="h4">Terms and Conditions</Typography>}
      />
      <CardContent>
        <Typography variant="h5">Commitment Level</Typography>
        <Typography className={classes.paragraph}>
          We recommend that you complete minimally 1 call. Any further follow up
          is up to your discretion as a mentor.
        </Typography>
        <Typography variant="h5">Non-Harassment Clause</Typography>
        <Typography className={classes.paragraph}>
          I agree to not harass my mentee.
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAcceptRequest}
        >
          Accept
        </Button>
      </CardActions>
    </Card>
  );
};

export default AcceptRequest;
