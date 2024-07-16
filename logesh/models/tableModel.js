export function getData() {
    const data = fetch('../assets/data.json')
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));
    return data;
}
