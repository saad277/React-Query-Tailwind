const Config = {
  LIMIT: 10,
  ENVIRONMENT: "LOCAL",
  ENVIRONMENTS: {
    LOCAL: {
      API_URL: "https://jsonplaceholder.typicode.com",
    },
    DEVELOPMENT: {
      API_URL: "APP_API_URL",
    },
  },
  env() {
    return this.ENVIRONMENTS[this.ENVIRONMENT];
  },
};

export default Config;
