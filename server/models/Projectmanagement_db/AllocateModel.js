import AllocateModelGenerated from "./generated/AllocateModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = AllocateModelGenerated.init();
  
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
      return await AllocateModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...AllocateModelGenerated,
  ...customModel
};
