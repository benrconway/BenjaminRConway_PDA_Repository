tool_library = ["Spade", "Ladder", "Dutch Hoe", "Rubber Mallet"]

def first_tool(tool_array)
  return tool_array[0]
end

puts first_tool(tool_library)


gardener1 = {
  name: "Bob",
  speciality: "Rose care and maintenance",
  favourite_tool: "Secateurs"
}

def speciality(gardener_hash)
   return gardener_hash[:speciality]
end

puts "Our gardener's speciality is #{speciality(gardener1).downcase}."
