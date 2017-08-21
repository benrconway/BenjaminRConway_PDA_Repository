tool_library = ["Spade", "Ladder", "Dutch Hoe", "Rubber Mallet"]

first_tool = tool_library.first()

puts first_tool


gardener1 = {
  name: "Bob",
  specialty: "Rose care and maintenance",
  favourite_tool: "Secateurs"
}

specialty = gardener1[:specialty]

puts "#{gardener1[:name]} is a gardener and his specialty is #{specialty.downcase}."
