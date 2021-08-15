//define data array
var tabledata = [
  {
    INVOICE: "1",
    COMPANY: "Company 1",
    DUE_DATE: "	1/5/2021",
    STATUS: "Approved",
    AMOUNT: "10",
  },
  {
    INVOICE: "2",
    COMPANY: "Company 2",
    DUE_DATE: "	1/5/2022",
    STATUS: "Declined",
    AMOUNT: "11",
  },
  {
    INVOICE: "3",
    COMPANY: "Company 3",
    DUE_DATE: "	1/1/2021",
    STATUS: "Approved",
    AMOUNT: "100",
  },
  {
    INVOICE: "4",
    COMPANY: "Company 4",
    DUE_DATE: "	14/5/2021",
    STATUS: "Approved",
    AMOUNT: "11",
  },
  {
    INVOICE: "5",
    COMPANY: "Company 5",
    DUE_DATE: "	1/5/2021",
    STATUS: "Approved",
    AMOUNT: "10",
  },
  {
    INVOICE: "6",
    COMPANY: "Company 6",
    DUE_DATE: "	1/5/2020",
    STATUS: "Declined",
    AMOUNT: "10",
  },
  {
    INVOICE: "1",
    COMPANY: "Company 1",
    DUE_DATE: "	1/5/2021",
    STATUS: "Approved",
    AMOUNT: "10",
  },
  {
    INVOICE: "2",
    COMPANY: "Company 2",
    DUE_DATE: "	1/5/2022",
    STATUS: "Declined",
    AMOUNT: "11",
  },
  {
    INVOICE: "3",
    COMPANY: "Company 3",
    DUE_DATE: "	1/1/2021",
    STATUS: "Approved",
    AMOUNT: "100",
  },
  {
    INVOICE: "4",
    COMPANY: "Company 4",
    DUE_DATE: "	14/5/2021",
    STATUS: "Approved",
    AMOUNT: "11",
  },
  {
    INVOICE: "5",
    COMPANY: "Company 5",
    DUE_DATE: "	1/5/2021",
    STATUS: "Approved",
    AMOUNT: "10",
  },
  {
    INVOICE: "6",
    COMPANY: "Company 6",
    DUE_DATE: "	1/5/2020",
    STATUS: "Declined",
    AMOUNT: "10",
  },
  {
    INVOICE: "1",
    COMPANY: "Company 1",
    DUE_DATE: "	1/5/2021",
    STATUS: "Approved",
    AMOUNT: "10",
  },
  {
    INVOICE: "2",
    COMPANY: "Company 2",
    DUE_DATE: "	1/5/2022",
    STATUS: "Declined",
    AMOUNT: "11",
  },
  {
    INVOICE: "3",
    COMPANY: "Company 3",
    DUE_DATE: "	1/1/2021",
    STATUS: "Approved",
    AMOUNT: "100",
  },
  {
    INVOICE: "4",
    COMPANY: "Company 4",
    DUE_DATE: "	14/5/2021",
    STATUS: "Approved",
    AMOUNT: "11",
  },
  {
    INVOICE: "5",
    COMPANY: "Company 5",
    DUE_DATE: "	1/5/2021",
    STATUS: "Approved",
    AMOUNT: "10",
  },
  {
    INVOICE: "6",
    COMPANY: "Company 6",
    DUE_DATE: "	1/5/2020",
    STATUS: "Declined",
    AMOUNT: "10",
  },
  {
    INVOICE: "1",
    COMPANY: "Company 1",
    DUE_DATE: "	1/5/2021",
    STATUS: "Approved",
    AMOUNT: "10",
  },
  {
    INVOICE: "2",
    COMPANY: "Company 2",
    DUE_DATE: "	1/5/2022",
    STATUS: "Declined",
    AMOUNT: "11",
  },
  {
    INVOICE: "3",
    COMPANY: "Company 3",
    DUE_DATE: "	1/1/2021",
    STATUS: "Approved",
    AMOUNT: "100",
  },
  {
    INVOICE: "4",
    COMPANY: "Company 4",
    DUE_DATE: "	14/5/2021",
    STATUS: "Approved",
    AMOUNT: "11",
  },
  {
    INVOICE: "5",
    COMPANY: "Company 5",
    DUE_DATE: "	1/5/2021",
    STATUS: "Approved",
    AMOUNT: "10",
  },
  {
    INVOICE: "6",
    COMPANY: "Company 6",
    DUE_DATE: "	1/5/2020",
    STATUS: "Declined",
    AMOUNT: "10",
  },
];

const fomratStatusCell = (cell, formatterParams, onRendered) => {
  cell.getElement().style.height = "60px";
  console.log(cell.getElement());

  if (cell.getValue() == "Approved") {
    return `<div class="status-insured">${cell.getValue()}</div>`;
  } else {
    return `<div class="status-not-insured ">${cell.getValue()}</div>`;
  }
};

var myColumns = [
  //define the table columns
  {
    title: "Invoice",
    field: "INVOICE",
    hozAlign: "center",
    formatter: "textarea",
  },
  {
    title: "COMPANY",
    field: "COMPANY",
    hozAlign: "center",
    formatter: "textarea",
  },
  {
    title: "Due Date",
    field: "DUE_DATE",
    hozAlign: "center",

    formatter: "textarea",
  },
  {
    title: "STATUS",
    field: "STATUS",
    hozAlign: "center",
    formatter: fomratStatusCell,
  },

  {
    title: "AMOUNT",
    field: "AMOUNT",
    hozAlign: "center",
    formatter: "textarea",
  },
];

const createTableHelperFunction = () => {
  var table = new Tabulator("#table", {
    data: tabledata, //load row data from array
    layout: "fitColumns", //fit columns to width of table
    responsiveLayout: "true", //hide columns that dont fit on the table
    tooltips: true, //show tool tips on cells
    history: true, //allow undo and redo actions on the table
    columns: myColumns,
    height: "100%",
    movableColumns: false, //allow column order to be changed
    resizableRows: false,
    resizableColumns: false,
  });
};

//run hte function when the page loads
window.onload = createTableHelperFunction();

//formula to fomat the cells
