class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      @colleges = College.all
      sign_in(@user)
      render :show
    else
      render json: ["Invalid username or password."], status: 422
    end
  end

  def show
    @user = current_user
    if @user
      @colleges = College.all
      render :show
    else
      render :blank
    end
  end

  def destroy
    sign_out
    render :blank
  end
end
