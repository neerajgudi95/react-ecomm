import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { accountOptionsList } from "../../../Utils/accountOptionsList";

export default function AccountOptionsList() {
  const linkStyle = { width: "100%" };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        fontFamily: "inherit",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          {accountOptionsList.map((option) => {
            return (
              <Fragment key={option.link}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Link to={`/account/${option.link}`} style={linkStyle}>
                      {option.value}
                    </Link>
                  </ListItemButton>
                </ListItem>
                {option.divider && <Divider />}
              </Fragment>
            );
          })}
        </List>
      </nav>
    </Box>
  );
}
