import ProjectModelGenerated from "./generated/ProjectModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ProjectModelGenerated.init();
  
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
      return await ProjectModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ProjectModelGenerated,
  ...customModel
};
