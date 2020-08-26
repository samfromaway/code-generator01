import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "../../util/router";

const NavigationItems = (props) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card variant="outlined" style={{ backgroundColor: "#303030" }}>
        <CardContent>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt={props.title}
              src={props.icon}
              style={{ width: 25, height: 25, marginRight: 8 }}
            />
            <Typography variant="h6">{props.title}</Typography>
          </Box>
          <Box style={{ display: "flex", paddingLeft: 2 }}>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <Avatar
                alt={props.categories.title}
                src={props.categories.logo}
                style={{ width: 18, height: 18, marginRight: 2 }}
              />
              <Typography variant="overline" style={{ paddingRight: 8 }}>
                {props.categories.title}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body2" component="p">
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={props.path} size="small">
            More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NavigationItems;
