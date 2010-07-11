class CreateContacts < ActiveRecord::Migration
  def self.up
    create_table :contacts do |t|
      t.text :name
      t.text :email
      t.text :message

      t.timestamps
    end
  end

  def self.down
    drop_table :contacts
  end
end
