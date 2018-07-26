class Api::ComicsController < ApplicationController
  def show
    query = params[:id]
    key = ENV['KEY']
    puts "https://comicvine.gamespot.com/api/characters/?api_key=#{key}&filter=name:#{query}&format=json"
    render json: HTTParty.get("https://comicvine.gamespot.com/api/characters/?api_key=#{key}&filter=name:#{query}&format=json")
  end
end
