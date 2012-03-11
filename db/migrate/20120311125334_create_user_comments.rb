class CreateUserComments < ActiveRecord::Migration
  def change
    create_table :user_comments do |t|
      t.integer :article_id

      t.timestamps
    end
  end
end
