const { DepartmentsNP } = require("../../models");
const axios = require("axios");

const postDepartmentsByFilter = async (req, res, next) => {
  const filter = req.body.filter;

  const url = "https://api.novaposhta.ua/v2.0/json/";
  const data = {
    apiKey: "",
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityRef: `${filter}`,
    },
  };
  const customHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
  };

  if (filter) {
    try {
      const departments = await DepartmentsNP.find({
        CityRef: { $regex: `${filter}` },
      });
      if (departments.length > 0) {
        res.status(200).json(departments);
      } else {
        axios
          .post(url, data, {
            headers: customHeaders,
          })
          .then(({ data }) => {
            DepartmentsNP.insertMany(data.data);
            res.status(200).json(data.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    } catch (error) {
      res.status(400).json({ message: "Invalid filters characters" });
    }
  }
};

module.exports = postDepartmentsByFilter;
