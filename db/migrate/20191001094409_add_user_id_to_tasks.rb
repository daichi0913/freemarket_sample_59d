class AddUserIdToTasks < ActiveRecord::Migration[5.2]
  def change
    add_reference :items, :region, foreign_key: true
  end
end
