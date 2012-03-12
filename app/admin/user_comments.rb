ActiveAdmin.register UserComment do
  form do |f|
    f.inputs "Details" do
      f.input :article, :as => :string, :input_html => { :class => 'article_text', :name => '' }
      f.input :article_id, :as => :hidden, :input_html => { :class => 'article_id' }
    end

    f.buttons
  end  
end