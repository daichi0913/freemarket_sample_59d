class RemovePhonenumberFromUserDetails < ActiveRecord::Migration[5.2]
  def change
    remove_column :user_details, :phone_number, :text
  end
end
