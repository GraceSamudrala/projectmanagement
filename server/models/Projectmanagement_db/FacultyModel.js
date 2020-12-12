import FacultyModelGenerated from "./generated/FacultyModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = FacultyModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await FacultyModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...FacultyModelGenerated,
  ...customModel
};
