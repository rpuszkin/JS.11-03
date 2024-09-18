document
  .getElementById("todo-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const input = document.getElementById("todo-input");
    const label = document.querySelector('label[for="todo-input"]');

    label.textContent = "";

    const todoData = {
      todo: input.value,
    };

    try {
      const response = await fetch("/api/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoData),
      });

      if (!response.ok) {
        throw new Error("Request error");
      }

      const data = await response.json();
      console.log("ToDo added successfully:", data);
      input.value = "";
    } catch (error) {
      console.error("Error:", error);

      label.textContent = "Request error";
      label.style.color = "red";
    }
  });
