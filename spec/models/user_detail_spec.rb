require 'rails_helper'

RSpec.describe UserDetail, type: :model do
  describe "#create" do
    describe "can save" do
      it "is valid with a name_kana, name_kanji, birth_date and user" do
        user_detail = build(:user_detail)
        expect(user_detail).to be_valid
      end
    end
    describe "cannot save" do
      it "is invalid without name_kana" do
        user_detail = build(:user_detail, first_name_kana: nil, family_name_kana: nil)
        user_detail.valid?
        expect(user_detail.errors[:name_kana]).to include("can't be blank")
      end

      it "is invalid without name_kanji" do
        user_detail = build(:user_detail, first_name_kanji: nil, family_name_kanji: nil)
        user_detail.valid?
        expect(user_detail.errors[:name_kanji]).to include("can't be blank")
      end

      it "is invalid without family_name_kana" do
        user_detail = build(:user_detail, family_name_kana: nil)
        user_detail.valid?
        expect(user_detail.errors[:family_name_kana]).to include("can't be blank")
      end

      it "is invalid without first_name_kana" do
        user_detail = build(:user_detail, first_name_kana: nil)
        user_detail.valid?
        expect(user_detail.errors[:first_name_kana]).to include("can't be blank")
      end

      it "is invalid without family_name_kanji" do
        user_detail = build(:user_detail, family_name_kanji: nil)
        user_detail.valid?
        expect(user_detail.errors[:family_name_kanji]).to include("can't be blank")
      end

      it "is invalid without first_name_kanji" do
        user_detail = build(:user_detail, first_name_kanji: nil)
        user_detail.valid?
        expect(user_detail.errors[:first_name_kanji]).to include("can't be blank")
      end

      it "is invalid with name_kana wrong format" do
        user_detail = build(:user_detail, family_name_kana: "竹田")
        user_detail.valid?
        expect(user_detail.errors[:name_kana]).to include("is invalid")
      end

      it "is invalid with name_kanji wrong format" do
        user_detail = build(:user_detail, family_name_kanji: "fail")
        user_detail.valid?
        expect(user_detail.errors[:name_kanji]).to include("is invalid")
      end

    end
  end
end
