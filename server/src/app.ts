
import express from "express"
import cors from "cors";
import userRouter from "./routes/userRoutes";
import todoRouter from "./routes/todoRoutes";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/user",userRouter)
app.use("/api/v1/todo",todoRouter);
export default app;