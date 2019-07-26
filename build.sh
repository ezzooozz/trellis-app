#!/usr/bin/env bash
node build.js --config=src/config.prod.app.js --apk --sentry-token=${TOKEN} --sentry-org="human-nature-lab"
#node build.js --config=src/config.test.web.js --web --sentry-token=${TOKEN} --sentry-org="human-nature-lab"
