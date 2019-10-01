class Removecalumfromitems < ActiveRecord::Migration[5.2]
  def change
    remove_reference :items, :group, index: true
  end
end
