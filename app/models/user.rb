class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :omniauthable

  has_one_attached :image
  has_one :user_detail
  accepts_nested_attributes_for :user_detail
  has_many :items
  validates :nickname, presence: true, length: {maximum: 20}
  validates :password, presence: true, length: {minimum: 7, maximum: 128},  format: {with: /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]{7,128}+\z/i}

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.nickname = auth.info.name   # assuming the user model has a name
      # user.image = auth.info.image 
      
      # assuming the user model has an image
      # If you are using confirmable and the provider(s) you use validate emails, 
      # uncomment the line below to skip the confirmation emails.
      # user.skip_confirmation!
    end
  end
end
