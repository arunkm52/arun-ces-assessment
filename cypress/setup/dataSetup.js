// Multiple environment configuration --> Currently Tests are pointed to run against TestEnv
// Update the base url in respective values and choose envSelection as "TestEnv" or "PreProductionEnv" or "ProductionEnv"
// Based upon which env the tests are intended to run

const envSelection = "TestEnv";

const TestEnv = {

    baseURL: 'https://membersvic.returnit.com.au/'
};

const PreProductionEnv = {

    baseURL: 'https://membersvic.returnit.com.au/'
};

const ProductionEnv = {

    baseURL: 'https://membersvic.returnit.com.au/'
};

switch (envSelection) {

    case "TestEnv":
        var applicationBaseUrl = TestEnv.baseURL;
        break;
    case "PreProductionEnv":
        var applicationBaseUrl = PreProductionEnv.baseURL;
        break;
    case "ProductionEnv":
        var applicationBaseUrl = ProductionEnv.baseURL;
        break;
    default:
        var applicationBaseUrl = TestEnv.baseURL;
}


module.exports = { envSelection, applicationBaseUrl}