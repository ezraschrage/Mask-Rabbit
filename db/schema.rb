# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_09_171556) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "low_avg", null: false
    t.integer "high_avg", null: false
  end

  create_table "masker_categories", force: :cascade do |t|
    t.integer "masker_id", null: false
    t.integer "category_id", null: false
    t.integer "base_rate", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "masker_days", force: :cascade do |t|
    t.string "masker_id", null: false
    t.datetime "start_time", null: false
    t.datetime "end_time", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "maskers", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "location", null: false
    t.string "bio", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tasks", force: :cascade do |t|
    t.integer "category_id", null: false
    t.integer "length_of_task", null: false
    t.datetime "date", null: false
    t.integer "per_hr", null: false
    t.integer "user_id", null: false
    t.integer "masker_id", null: false
    t.string "description", null: false
    t.string "start_address", null: false
    t.string "end_address"
    t.string "vehicle_requirements", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["masker_id"], name: "index_tasks_on_masker_id"
    t.index ["user_id"], name: "index_tasks_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.integer "zip", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
