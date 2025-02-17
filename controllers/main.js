const { config } = require("process");
const { endpoints } = require("../appModules/api");
const getData = require("../appModules/api/ali-utils");
const staticFile = require("../appModules/http-utils/static-file");
const { makeRatingFile } = require("../appModules/rating");

async function mainRouteController(res, publicUrl, extname) {
  const data = await getData(endpoints.games);
  await makeRatingFile(config.PATH_TO_RATING_FILE, data);
  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
}
module.exports = mainRouteController;
