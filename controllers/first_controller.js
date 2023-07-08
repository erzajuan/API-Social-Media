class InstgramController {
  //Function to GET ( Collect Data )
  static async getFunction(req, res) {
    try {
      //Your GET Function Here!!

      res.status(200).json({
        status: true,
        message: "Success GET",
        data: "Your Data",
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error,
      });
    }
  }

  //Function to POST ( Add Data )
  static async postFunction(req, res) {
    try {
      //Your POST Function Here!!

      res.status(200).json({
        status: true,
        message: "Success POST",
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error,
      });
    }
  }

  //Function to PUT ( Edit Data )
  static async putFunction(req, res) {
    try {
      //Your PUT Function Here!!
      
      //Define id from params
      const id = req.params.id;

      res.status(200).json({
        status: true,
        message: "Success PUT",
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error,
      });
    }
  }

  //Function to DELETE ( Delete Data )
  static async deleteFunction(req, res) {
    try {
      //Your DELETE Function Here!!

      //Define id from params
      const id = req.params.id;

      res.status(200).json({
        status: true,
        message: "Success DELETE",
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error,
      });
    }
  }
}

module.exports = InstgramController;
