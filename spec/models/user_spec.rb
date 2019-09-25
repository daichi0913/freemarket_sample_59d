require 'rails_helper'

RSpec.describe User, type: :model do
  describe "#create" do
    describe "can save" do
      it "is valid with a nickname, email, password, password_confirmation, image" do
        user = build(:user)
        expect(user).to be_valid
      end

      it "is valid with a nickname, email, password, password_confirmation" do
        user = build(:user, image: nil)
        expect(user).to be_valid
      end
    end
    describe "cannot save" do

    end
  end
end
