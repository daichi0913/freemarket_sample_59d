class Region < ApplicationRecord
  def index
  region_id = params[:id].to_i
  @regions = Region.all
  end
end
