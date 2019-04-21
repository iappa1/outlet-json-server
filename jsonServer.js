var adhocFilters = require('./src/adhocFilters.json');
var alertDashboards = require('./src/alertDashboards.json');
var alertList = require('./src/alertList.json');
var alertNames = require('./src/alertNames.json');
var alerts = require('./src/alerts.json');
var dashboard = require('./src/dashboard.json');
var omtFields = require('./src/omtFields.json');
var omtNumbersAll = require('./src/omtNumbersAll.json');
var db = require('./src/db.json');

module.exports = function () {
  return {
    adhocFilters: adhocFilters,
    alertDashboards: alertDashboards,
    alertList: alertList,
    alertNames: alertNames,
    alerts: alerts,
    dashboard: dashboard,
    omtFields: omtFields,
    omtNumbersAll: omtNumbersAll,
    database: db
  }
}