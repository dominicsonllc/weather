# README
This app allows visitors to enter an address to retrieve the weather forecast. This initial prototype is only for the US due to this being a weekend project. With more time the app would be less strict on inputted addresses (ie: without zip codes) and could encompass the world!

Since it does not use a database and there is no file structure, no models exist as conventionally find in a Rails app. Instead it uses the service wttr.in to fetch and saves the PNG screenshot (as seen above). These image files serve as the cache for that ZIP Code. Zip codes are expired by deleting the files found in the public/zip codes folder via cron jobs using the whenever gem. It uses scheduler.rb inside the config folder to executes the rake task ‘delete_expired’ (found in the lib folder).

To start the server for this project, it’s your typical Rails command:
_rails s_

Project Info: 
* Ruby version: 3.0.0

* System dependencies: rvm

* Configuration

* no Database 

* How to run the test suite: the JS function zipcodeFromAddress() is tested with jasmine. To start the jasmine server, run:
_rake jasmine_
  
-Dominic S
