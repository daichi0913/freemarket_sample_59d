json.array! @categories do |category|
  json.parent_id category.parent_id
  json.name category.name
end