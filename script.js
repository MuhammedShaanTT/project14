async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();
  if (response.ok) {
    alert('Login Successful');
    window.location = 'dashboard.html';
  } else {
    alert(data.message);
  }
}
async function loadBugs() {
  const res = await fetch('http://localhost:5000/api/bugs');
  const bugs = await res.json();
  displayBugs(bugs);
}

function displayBugs(bugs) {
  const table = document.getElementById('bugTable');
  table.innerHTML = `
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Description</th>
      <th>Severity</th>
      <th>Status</th>
      <th>Assigned To</th>
      <th>Created By</th>
    </tr>`;

  bugs.forEach(bug => {
    const row = table.insertRow();
    row.innerHTML = `
      <td>${bug.id}</td>
      <td>${bug.title}</td>
      <td>${bug.description}</td>
      <td>${bug.severity}</td>
      <td>${bug.status}</td>
      <td>${bug.assigned_to}</td>
      <td>${bug.created_by}</td>`;
  });
}

async function filterBugs() {
  const status = document.getElementById('statusFilter').value;
  const severity = document.getElementById('severityFilter').value;

  const res = await fetch('http://localhost:5000/api/bugs');
  const bugs = await res.json();

  const filtered = bugs.filter(bug =>
    (!status || bug.status === status) &&
    (!severity || bug.severity === severity)
  );

  displayBugs(filtered);
}

if (window.location.pathname.includes('bug_list.html')) {
  loadBugs();
}


async function addBug() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const severity = document.getElementById('severity').value;
  const assigned_to = document.getElementById('assigned_to').value;
  const created_by = document.getElementById('created_by').value;

  const res = await fetch('http://localhost:5000/api/bugs', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ title, description, severity, status: 'Open', assigned_to, created_by })
  });

  const data = await res.json();
  alert(data.message);
  window.location = 'dashboard.html';
}

window.onload = async () => {
  if (window.location.pathname.includes('dashboard.html')) {
    const res = await fetch('http://localhost:5000/api/bugs');
    const bugs = await res.json();
    const table = document.getElementById('bugTable');

    bugs.forEach(bug => {
      const row = table.insertRow();
      row.innerHTML = `<td>${bug.id}</td><td>${bug.title}</td><td>${bug.severity}</td><td>${bug.status}</td><td>${bug.assigned_to}</td>`;
    });
  }
};
