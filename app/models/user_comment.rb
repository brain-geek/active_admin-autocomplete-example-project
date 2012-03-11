class UserComment < ActiveRecord::Base
  belongs_to :article
end
