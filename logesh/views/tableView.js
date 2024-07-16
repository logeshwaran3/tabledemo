export function renderTable(data, currentPage, rowsPerPage) {
    const tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = "";
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = data.slice(start, end);
    for (const row of pageData) {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${row.name}</td><td>${row.age}</td><td>${row.country}</td>`;
        tableBody.appendChild(tr);
    }
}
