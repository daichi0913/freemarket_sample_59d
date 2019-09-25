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

      it "is valid with a nickname that has less than 20 characters " do
        user = build(:user, nickname: "abcdefghijklmnopqrst")
        expect(user).to be_valid
      end
    end
    describe "cannot save" do
      it "is invalid without nickname" do
        user = build(:user, nickname: nil)
        user.valid?
        expect(user.errors[:nickname]).to include("can't be blank")
      end

      it "is invalid without email" do
        user = build(:user, email: nil)
        user.valid?
        expect(user.errors[:email]).to include("can't be blank")
      end

      it "is invalid without password" do
        user = build(:user, password: nil)
        user.valid?
        expect(user.errors[:password]).to include("can't be blank")
      end

      it "is invalid without password_confirmation" do
        user = build(:user, password_confirmation: "")
        user.valid?
        expect(user.errors[:password_confirmation]).to include("doesn't match Password")
      end

      it "is invalid with a duplicate email address" do
        user = create(:user)
        another_user = build(:user, email: user.email)
        another_user.valid?
        expect(another_user.errors[:email]).to include("has already been taken")
      end

      it "is invalid with a nickname that has more than 21 characters " do
        user = build(:user, nickname: "abcdefghijklmnopqrstu")
        user.valid?
        expect(user.errors[:nickname][0]).to include("is too long")
      end

      it "is invalid with a password that has less than 6 characters " do
        user = build(:user, password: "0a0a0a", password_confirmation: "0a0a0a")
        user.valid?
        expect(user.errors[:password][0]).to include("is too short")
      end

      it "is invalid with a password only alphabet " do
        user = build(:user, password: "abcdefg", password_confirmation: "abcdefg")
        user.valid?
        expect(user.errors[:password][0]).to include("is invalid")
      end

      it "is invalid with a password only number " do
        user = build(:user, password: "1234567", password_confirmation: "1234567")
        user.valid?
        expect(user.errors[:password][0]).to include("is invalid")
      end

      it "is invalid with an image without .png/.jpeg extension" do
        user = build(:user, image: File.open("#{Rails.root}/public/images/test.txt"))
        user.valid?
        expect(user.errors[:image][0]).to include("is invalid")
      end
    end
  end
end
