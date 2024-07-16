import { getData } from '../models/tableModel.js';
import { renderTable } from '../views/tableView.js';

let currentPage = 1;
const rowsPerPage = 5;

export function loadTable() {
    const data = getData();
    renderTable(data, currentPage, rowsPerPage);
}

export function sortTable(column) {
    const data = getData();
    data.sort((a, b) => {
        const valA = Object.values(a)[column];
        const valB = Object.values(b)[column];
        return valA > valB ? 1 : valA < valB ? -1 : 0;
    });
    renderTable(data, currentPage, rowsPerPage);
}

export function nextPage() {
    const data = getData();
    if (currentPage * rowsPerPage < data.length) {
        currentPage++;
        renderTable(data, currentPage, rowsPerPage);
    }
}

export function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        const data = getData();
        renderTable(data, currentPage, rowsPerPage);
    }
}
