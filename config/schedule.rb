# Use this file to easily define all of your cron jobs.

set :output, "log/cron.log"

every 1.minute do
  rake "forecast:delete_expired"
end