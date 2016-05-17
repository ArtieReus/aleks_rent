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

###
# General configuration
###

activate :i18n, :mount_at_root => :en, :langs => [:es, :en]
activate :sprockets

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
helpers do
  def local_path(path)
    if locale == "en"
      "/#{path}"
    else
      "/#{I18n.locale.to_s}/#{path}"
    end
  end
end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Since project pages deploy to a subdirectory, assets and page paths are relative to the organization or
  # user that owns the repo. If you're treating the project pages as a standalone site, you can tell
  # Middleman to generate relative paths for assets and links with these settings in the build configuration in config.rb
  set :http_prefix, "/aleks_rent/"
end