require 'rails_helper'

describe Users::SessionsController do
  before do
    @request.env['devise.mapping'] = Devise.mappings[:user]
    @user = build(:user, email: "a@gmail", password: "1a1a1a1")
  end

  describe 'POST #create' do
    it 'can login' do
      post :create, params: {email: 'a@gmail', password: '1a1a1a1'}
      expect(response).to redirect_to(root_path)
    end
  end
end