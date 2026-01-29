const express = require("express");
const app = express();

app.use(express.json());
const studentRoutes = require("./routes/stu_routes");
app.use("/api", studentRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000 on http://localhost:3000");
});
