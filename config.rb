###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration




activate :external_pipeline,
         name: :webpack,
         command: build? ?
         "./node_modules/webpack/bin/webpack.js --bail -p" :
         "./node_modules/webpack/bin/webpack.js --watch -d --progress --color",
         source: ".tmp/dist",
         latency: 1



# activate :sprockets 
# import_path File.expand_path( 'bower_components', root )
import_path File.expand_path('bower_components', app.root)





###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end









# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Use relative URLs
  activate :relative_assets

  # set :phase_environment, 'Production' # Development, Test, Production 
  # set :css_dir, 'stylesheets'
  # set :js_dir, '../../../javascripts/'
  # set :images_dir, 'images'
  # set :helper_dir, 'helper'
  # set :partials_desktop_Common_dir, 'src/desktop/Common'

end







