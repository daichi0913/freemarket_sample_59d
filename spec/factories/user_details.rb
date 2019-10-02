FactoryBot.define do
  factory :user_detail do
    family_name_kana  {Gimei.name.last.katakana}
    first_name_kana {Gimei.name.first.katakana}
    # name_kana {family_name_kana+" "+first_name_kana}
    family_name_kanji {Gimei.name.last.kanji}
    first_name_kanji {Gimei.name.first.kanji}
    # name_kanji {family_name_kanji+" "+first_name_kanji}
    birth_date {Faker::Date.birthday(min_age: 18, max_age: 65).to_s}
    user
  end
end
