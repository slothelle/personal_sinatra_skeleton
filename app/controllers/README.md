```User``` authentication route

post '/login' do
  user = User.authenticate(params[:user]) 
  session[:user_id] = user.id if user
  if user
    redirect '/user/' + user.id.to_s
  else 
    redirect '/'
  end
end 