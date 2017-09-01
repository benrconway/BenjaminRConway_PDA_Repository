### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val # Val should be inside round brackets ().
  if val = 1 # Requires == to check status
  return true # Indent both returns as they relate to the if and else.
  else
  return false
  end
end

dif max a b # Should be def max(a, b)
  if a > b
      return a # One indent too many.
  else
  b #needs indentation
  end
end
end # This "end" should be removed.

def looper
  for i in 1..10
  puts i #Should be indented.
  end
end #Placement of return i after the for loop will provide output for test below.

failures = 0


if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
# Requires an end to close the if statement.


if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed" #Should be changed from func1(3) to max(100,1)
  failrues = failures + 1 # failrues should be corrected to failures.
end


if failures # requires evaluating variable. ie greater than zero.
  puts "Test Failed"
else
  puts "Test Passed"
end
