class Api::CollegeApplicationsController < ApplicationController
  def create
    @application = CollegeApplication.new(college_application_params)

    if @application.save
      render :show
    else
      render json: @application.errors.full_messages, status: 422
    end
  end

  private
  def college_application_params
    params.require(:college_application).permit(:applicant_id, :college_id);
  end
end
