/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE facultyControllerGenerated.js PLEASE EDIT ../facultyController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import FacultyModel from "../../../models/Projectmanagement_db/FacultyModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import FacultyController from "../FacultyController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/faculty`;
    router.post(baseUrl + "", authorize([]), FacultyController.create);
    router.delete(baseUrl + "/:id", authorize([]), FacultyController.delete);
    router.get(baseUrl + "/findByproject/:key", authorize([]), FacultyController.findByproject);
    router.get(baseUrl + "/:id", authorize([]), FacultyController.get);
    router.get(baseUrl + "", authorize([]), FacultyController.list);
    router.post(baseUrl + "/:id", authorize([]), FacultyController.update);
  },


  // CRUD METHODS


  /**
  * facultyModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await FacultyModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * facultyModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await FacultyModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * facultyModel.findByproject
  *   @description CRUD ACTION findByproject
  *   @param Objectid key Id of model to search for
  *
  */
  findByproject: async (req, res) => {
    try {
      const result = await FacultyModel.findByproject(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * facultyModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  get: async (req, res) => {
    try {
      const result = await FacultyModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * facultyModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await FacultyModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * facultyModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await FacultyModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;