const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5173", // Replace with your client's URL
    methods: ["GET", "POST", "PUT"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

app.use(express.json());
app.use(cors());

const db = require("./models");

// Router
const sensorRouter = require("./routes/sensors");
const userRoutes = require("./routes/users");
const ticketRoutes = require("./routes/tickets");
app.use("/tickets", ticketRoutes);
app.use("/users", userRoutes);
app.use("/sensors", sensorRouter);

// WebSocket handling
io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle events here (e.g., socket.on('event', callback))

  // Listen for 'parkingStatusChanged' event from the clients
  socket.on("parkingStatusChanged", (updatedStatus) => {
    // Emit the 'parkingStatusUpdate' event to all connected clients
    io.emit("parkingStatusUpdate", updatedStatus);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = 8001;

http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

db.sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
