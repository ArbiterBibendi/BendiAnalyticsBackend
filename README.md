# BendiAnalyticsBackend

## Installation directions
- Make sure `npm` is installed
- Create user `babackend` with home directory set to `/home/babackend`
- Git clone this repository into `/home/babackend/`
- `cd` into `/home/babackend/BendiAnalyticsBackend/` and install dependencies with `npm i`
- Copy `bendianalytics.service` to `/etc/systemd/system/`
- Create `.env` file in the projects root directory and populate POSTGRES_HOST, POSTGRES_USER,POSTGRES_PASSWORD, and POSTGRES_PORT
- Start/Enable service with `systemctl start/enable bendianalytics`