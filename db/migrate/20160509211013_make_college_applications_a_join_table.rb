class MakeCollegeApplicationsAJoinTable < ActiveRecord::Migration
  def change
    remove_column :college_applications, :college_name
    add_column :college_applications, :college_id, :integer
  end
end
