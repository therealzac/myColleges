class CollegeApplication < ActiveRecord::Base
  validates :applicant_id, :college_id, presence: true
  belongs_to :applicant, class_name: "User"
  belongs_to :college
end
