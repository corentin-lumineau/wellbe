class BodyArea < ApplicationRecord
  has_many :warm_ups
  has_many :exercises
  has_many :strechs
end
