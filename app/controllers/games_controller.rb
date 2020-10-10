class GamesController < ApplicationController
  
  # config.action_controller.perform_caching = false
  
  def new
    @random_letters = ('a'..'z').to_a.sample(10);
  end
  
  def score
    @params = params[:attempt]
  end
end
