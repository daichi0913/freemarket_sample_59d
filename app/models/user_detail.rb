class UserDetail < ApplicationRecord
  attr_writer :family_name_kana, :first_name_kana, :family_name_kanji, :first_name_kanji

  belongs_to :user

  validates :name_kanji, presence: true, format: {with: /[^\x01-\x7E]+\s[^\x01-\x7E]+/}
  validates :name_kana, presence: true, format: {with: /[ァ-ヴ][ァ-ヴー・]+\s[ァ-ヴ][ァ-ヴー・]+/}
  validates :family_name_kana, :first_name_kana, :family_name_kanji, :first_name_kanji, presence: true

  before_validation :set_name_kana, :set_name_kanji

  def family_name_kana
    @family_name_kana
  end
  
  def first_name_kana
    @first_name_kana
  end

  def family_name_kanji
    @family_name_kanji
  end
  
  def first_name_kanji
    @first_name_kanji
  end

  def set_name_kana
    self.name_kana = [@family_name_kana, " ", @first_name_kana].join
  end

  def set_name_kanji
    self.name_kanji = [@family_name_kanji, " ", @first_name_kanji].join
  end
end
