
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function drawGrid() {
  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 5; y++) {
      ctx.fillStyle = "#f9c6d1";
      ctx.fillRect(x * 120 + 10, y * 120 + 10, 100, 100);
      ctx.strokeStyle = "#fff";
      ctx.strokeRect(x * 120 + 10, y * 120 + 10, 100, 100);
    }
  }
}
drawGrid();
