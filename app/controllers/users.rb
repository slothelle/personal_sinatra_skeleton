get '/login' do
  slim :_login, :layout => false
end

get '/logout' do
  session.clear
  redirect '/'
end 

get '/signup' do
  slim :_signup, :layout => false
end 

post '/login' do
  user = User.authenticate(params[:user]) 
  session[:user_id] = user.id if user
  if user
    redirect '/user' + user.id.to_s
  else 
    redirect '/'
  end
end

post '/signup' do
  user = User.new(params[:user])
  session[:user_id] = user.id if user.save
  if user.save
    redirect '/user/' + user.id.to_s
  else
    redirect '/'
  end
end