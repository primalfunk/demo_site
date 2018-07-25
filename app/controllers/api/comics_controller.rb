class Api::ComicsController < ApplicationController
  def show
    query = params[:id]
    key = "21851fe6783ae786e33e6f3b98a1cc79af89e34b"
    render json: HTTParty.get("https://comicvine.gamespot.com/api/characters/?api_key=#{key}&filter=name:#{query}&format=json")
  end
end
