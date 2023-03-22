const input = document.getElementById("myinput");
const toggle = document.getElementById("btn");
const alertContainer = document.querySelector(".alert-container");
const apiUrl = "https://crudcrud.com/api/0e536bcd9ca442e3a274246e8e0e3644/mahasiswa";

const savedTasks = localStorage.getItem("mahasiswa");
if (savedTasks) {
  alertContainer.innerHTML = savedTasks;
}

toggle.addEventListener("click", function () {
  const task = input.value;
  const alertMsg = `
    <div class="alert alert-success alert-dismissible fade show mt-3" role="alert" data-id="">
      ${task}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
  alertContainer.innerHTML += alertMsg;
  input.value = "";

  localStorage.setItem("tasks", alertContainer.innerHTML);

  const alerts = alertContainer.querySelectorAll(".alert");
  alerts.forEach((alert) => {
    alert.addEventListener("click", function (event) {
      const alertId = event.target.closest(".alert").getAttribute("data-id");
      if (alertId) {
        fetch(`${apiUrl}/${alertId}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      }
      alert.classList.toggle("text-decoration-line-through");
    });
  });

  const closeButtons = alertContainer.querySelectorAll(".btn-close");
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const alert = button.parentElement;
      const alertId = alert.getAttribute("data-id");
      if (alertId) {
        fetch(`${apiUrl}/${alertId}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      }
      alert.remove();
      localStorage.setItem("tasks", alertContainer.innerHTML);
    });
  });
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      task: task
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const newAlert = alertContainer.querySelector(`[data-id=""]`);
      newAlert.setAttribute("data-id", data._id);
    })
    .catch((error) => console.log(error));
});

window.addEventListener("load", function () {
  const alerts = alertContainer.querySelectorAll(".alert");
  alerts.forEach((alert) => {
    alert.addEventListener("click", function (event) {
      const alertId = event.target.closest(".alert").getAttribute("data-id");
      if (alertId) {
        fetch(`${apiUrl}/${alertId}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      }
      alert.classList.toggle("text-decoration-line-through");
    });
  });

  const closeButtons = alertContainer.querySelectorAll(".btn-close");
        closeButtons.forEach((button) => {
          button.addEventListener("click", function () {
            const alert = button.parentElement;
            alert.remove();
            localStorage.setItem("tasks", alertContainer.innerHTML);
          });
        });
      });