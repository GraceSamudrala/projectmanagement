// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import UserModel from "../models/Projectmanagement_db/UserModel";
import AllocateModel from "../models/Projectmanagement_db/AllocateModel";
import FacultyModel from "../models/Projectmanagement_db/FacultyModel";
import ProjectModel from "../models/Projectmanagement_db/ProjectModel";
import StudentModel from "../models/Projectmanagement_db/StudentModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.projectmanagement_db_dbUrl);

    // Start Init Models

		UserModel.init();
		AllocateModel.init();
		FacultyModel.init();
		ProjectModel.init();
		StudentModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_projectmanagement_db = await mongoose.connect(
        "mongodb://" + properties.projectmanagement_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_projectmanagement_db;
  }
}

export default new Database();
