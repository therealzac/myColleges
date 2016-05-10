json.user do
  json.partial!('user', user: @user)
end

json.colleges do
  json.array!(@colleges) do |college|
    json.partial!('college', college: college)
  end
end
