class Article < ActiveRecord::Base
  translates :title
  
  search_methods :translations_title
end
