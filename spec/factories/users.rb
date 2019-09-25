FactoryBot.define do
  factory :user do
    password = Faker::Internet.password(min_length: 8)
    nickname {Faker::Name.last_name}
    email {Faker::Internet.free_email}
    image {File.open("#{Rails.root}/public/images/sample.png")}
    password {password}
    password_confirmation {password}
  end
end
