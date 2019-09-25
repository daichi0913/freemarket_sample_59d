class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one_attached :image
  
  validates :nickname, presence: true, length: {maximum: 20}
  validates :password, presence: true, length: {minimum: 7, maximum: 128},  format: {with: /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]{7,128}+\z/i}
  validates :image, format: {with: /\.(png|jpeg)\z/}

end
