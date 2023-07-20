import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import formatDate from "./formatDate";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useRef } from "react";

const numberParser = (text: string | null) => text;
const dateRenderer = (props: {value: string}): string => formatDate(props.value);
const booleanishRenderer = (props: {value: 'Y' | 'N' | 'n/a'}): string => {
  switch(props.value) {
    case 'Y': 
      return 'Yes';
    case 'N':
      return 'No';
    default:
    return '';
  }
};

const columnDefs: ColDef[] = [
  { field: "designation", headerName: "Designation", filter: 'agTextColumnFilter'},
  { field: "discovery_date", headerName: "Discovery Date", filter: 'agDateColumnFilter', cellRenderer: dateRenderer},
  { field: "h_mag", headerName: "H (mag)", filter: 'agNumberColumnFilter', filterParams: { numberParser }},
  { field: "moid_au", headerName: "MOID (au)", filter: 'agNumberColumnFilter', filterParams: { numberParser }},
  { field: "q_au_1", headerName: "q (au)", filter: 'agNumberColumnFilter', filterParams: { numberParser }},
  { field: "q_au_2", headerName: "Q (au)", filter: 'agNumberColumnFilter', filterParams: { numberParser }},
  { field: "period_yr", headerName: "Period (yr)", filter: 'agNumberColumnFilter', filterParams: { numberParser }},
  { field: "i_deg", headerName: "Inclination (deg)", filter: 'agNumberColumnFilter', filterParams: { numberParser }},
  { field: "pha", headerName: "Potentially Hazardous", filter: true, cellRenderer: booleanishRenderer},
  { field: "orbit_class", headerName: "Orbit Class", enableRowGroup: true, filter: 'agTextColumnFilter'},
];

const NeoGrid = (): JSX.Element => {
  const gridRef = useRef<any>();

  const resetGrid = () => {
    gridRef.current.api.setFilterModel(null);
    gridRef.current.columnApi.applyColumnState({
      defaultState: { sort: null },
    });
  };

  return (
    <>
      <div className="grid-header" style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
        <h1>Near-Earth Object Overview</h1>
        <button onClick={resetGrid}>Clear Filters and Sorters</button>
      </div>
      <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
        <AgGridReact
          ref={gridRef}
          rowData={data}
          columnDefs={columnDefs}
          rowGroupPanelShow={'always'}
          defaultColDef={{sortable: true}}
        />
      </div>
    </>
  );
};

export default NeoGrid;
