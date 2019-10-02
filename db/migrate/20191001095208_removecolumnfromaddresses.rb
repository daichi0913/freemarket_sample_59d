class Removecolumnfromaddresses < ActiveRecord::Migration[5.2]
  def change
    remove_reference :addresses, :user, index: true
  end
end
