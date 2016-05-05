class CreateCollegeApplications < ActiveRecord::Migration
  def change
    create_table :college_applications do |t|
      t.integer :applicant_id, null: false
      t.string :college_name, null: false
      t.timestamps null: false
    end
    add_index :college_applications, :applicant_id
  end
end
