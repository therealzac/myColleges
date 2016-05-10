class College < ActiveRecord::Base
  has_many :applicants, class_name: "CollegeApplication"
end
