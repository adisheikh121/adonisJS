"use strict";

const Env = use("Env");

module.exports = {
  sentry: {
    dsn: Env.get(
      "SENTRY_DSN",
      "https://45b488e8875f4f6786e912d9b3219367@sentry.io/5170136"
    )
  }
};
