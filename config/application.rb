require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module InternetOfIslands
  class Application < Rails::Application
    Rails.application.configure do

      # Use Yarn for assets bundling
      config.npm.install = ['yarn']
    end
  end
end
