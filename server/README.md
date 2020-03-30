# README

Get an API key from [football-data.org](https://www.football-data.org/).

Create a `.env` file in `server` with your API key, following the `.env.example` file.

If running with an AWS profile, update package.json scripts section to define profile:

    start": "AWS_PROFILE=<your-profile-id> serverless offline start",
