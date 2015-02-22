CDW=$(pwd)

#Frontend Dependencies
# - React & Flux
cd "$CDW/assets"
npm install

# Bower Sependencies
bower install

# Compile Sass
cd "$CDW/assets/sass"
bundle install
bundle exec "compass clean"
bundle exec "compass compile"
