import * as bodyParser from "body-parser";
import { Request, Response, NextFunction } from "express";
import * as cors from "cors";
import * as express from "express";
import * as morgan from "morgan";
import { AppDataSource } from "./data-source";
// import { AppError } from "./Utilities/Apperror";
import AppError from "./Utilities/Apperror"

// route import
import { port } from "./config";
// import SuperAdmin from "./routes/SuperAdmin.routes";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    app.use(bodyParser.json());

    app.use("/public", express.static("src/public"));
    app.use(morgan("dev"));

    app.get("/", (req: Request, res: Response) => {
      res.status(200).json({
        status: "success",
        message: "Welcome to Edu Tech",
      });
    });

    // app.use("/superAdmin", SuperAdmin);

    // unhandled routes
    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(new AppError(404, `Can't find ${req.originalUrl} on this server!`));
    });

    // global error handler
    app.use(
      (err: AppError, req: Request, res: Response, next: NextFunction) => {
        err.StatusCode = err.StatusCode || 500;
        err.status = err.status || "error";

        res.status(err.StatusCode).json({
          status: err.status,
          message: err.message,
        });
      }
    );

    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch((error) => console.log(error));
