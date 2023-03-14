# README
This app allows you to enter an address to retrieve the weather forecast. This initial prototype is only for the US due to this being a weekend project. 

Since it does not use a database and there is no file structure, so no models exist as conventionally find in a Rails app. 
Instead it uses the service Wttr.in to fetch and saves the PNG screenshot. These image files serve as the cache for that ZIP Code. Zip codes are expired by deleting the files found in the public/zip codes folder via cron jobs using the whenever gem. The file config/schedule.rb executes lib/tasks/forecast.rake task 'delete_expired'. 
Project Info: 
* Ruby version: 3.0.0
* System dependencies: rvm
* No database

To run: 
* Start the app by being at the root of the app folder with: _rails s_
* With your browser go to http://localhost:3000   
* Enter a US address with the zipcode at the end (or just a zipcode will do)
* It will generate a screenshot of the weather
* If you go back and re-enter an address with the same zipcode, it will show the cache
  

  
-Dominic S
