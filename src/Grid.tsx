import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const columnDefs: ColDef[] = [
  { field: "designation", headerName: "Designation", sortable: true, filter: 'agNumberColumnFilter'},
  { field: "discovery_date", headerName: "Discovery Date", sortable: true, filter: 'agDateColumnFilter',},
  { field: "h_mag", headerName: "H (mag)", sortable: true, filter: 'agNumberColumnFilter'},
  { field: "moid_au", headerName: "MOID (au)", sortable: true, filter: 'agNumberColumnFilter'},
  { field: "q_au_1", headerName: "q (au)", sortable: true, filter: 'agNumberColumnFilter'},
  { field: "q_au_2", headerName: "Q (au)", sortable: true, filter: 'agNumberColumnFilter'},
  { field: "period_yr", headerName: "Period (yr)", sortable: true, filter: 'agNumberColumnFilter'},
  { field: "i_deg", headerName: "Inclination (deg)", sortable: true, filter: 'agNumberColumnFilter'},
  { field: "pha", headerName: "Potentially Hazardous", sortable: true, filter: true},
  { field: "orbit_class", headerName: "Orbit Class", enableRowGroup: true, sortable: true, filter: 'agTextColumnFilter'},
];

const NeoGrid = (): JSX.Element => {
  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs}
        rowGroupPanelShow={'always'}
      />
    </div>
  );
};

export default NeoGrid;
