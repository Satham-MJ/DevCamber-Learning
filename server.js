const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");
dotenv.config({ path: "./config/config.env", override: true });

// Connect to database
connectDB();

// Route files
const bootcamps = require("./routes/bootcamps");
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/bootcamps", bootcamps);

app.use(errorHandler);
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold
  );
});

// Handle unhandles promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error ${err.messgae}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
