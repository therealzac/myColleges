class CollegeApplication < ActiveRecord::Base
  validates :applicant_id, :college_name, presence: true
  belongs_to :applicant, class_name: "User"
end
