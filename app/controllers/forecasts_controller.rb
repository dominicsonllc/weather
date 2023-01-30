class ForecastsController < ApplicationController

  def new
  end

  def show
    zipcode_with_country_code = params[:id].strip
    `cd #{Rails.root}/public/zipcodes && { curl -O wttr.in/#{zipcode_with_country_code}.png ; cd -; }`
    redirect_to "/zipcodes/#{zipcode_with_country_code}.png"
  end

end