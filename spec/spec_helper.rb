require 'rubygems'
require 'rspec'

ENV['RACK_ENV'] ||= 'test'

require File.expand_path("../../config/environment", __FILE__)

RSpec.configure do |config|
  config.order = "random"
end