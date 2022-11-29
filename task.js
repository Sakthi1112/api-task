
fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
  return data.json();
}).then((objectData) => {
  console.log(objectData[0].id);
  let tableData = "";
  objectData.map((values) => {
    tableData += `<tr>
    <th>${values.id}</th>
    <td>${values.name}</td>
    <td>${values.email}</td>
    <td>${values.username}</td>
</tr>`;
  });
  document.getElementById("table_body").innerHTML = tableData;
})