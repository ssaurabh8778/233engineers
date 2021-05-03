import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core/";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
//

export default ({ rowData }) => {
  const gridOptions = {
    // enable sorting on 'name' and 'age' columns only
    columnDefs: [
      { field: "fullName", sortable: true, filter: true },
      { field: "email", sortable: true, filter: true },
      { field: "phone", sortable: true, filter: true },
      { field: "country", sortable: true, filter: true },
      { field: "profession", sortable: true, filter: true },
      { field: "collegeName", sortable: true, filter: true },
      { field: "degree", sortable: true, filter: true },
    ],

    // other grid options ...
  };
  const fields = [
    "fullName",
    "email",
    "phone",
    "country",
    "profession",
    "college",
    "degree",
  ];

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>User Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <div
              className="ag-theme-alpine"
              style={{ height: "50vh", width: "100%", maxWidth: "1200px" }}
            >
              <AgGridReact
                gridOptions={gridOptions}
                rowData={rowData}
              ></AgGridReact>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
