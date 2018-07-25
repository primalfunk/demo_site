require 'pry'

class Api::WeatherController < ApplicationController
  def show
    woe = params[:id]
    render json: HTTParty.get("https://www.metaweather.com/api/location/#{woe}")
  end
end
