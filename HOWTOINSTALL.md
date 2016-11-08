# DeepLIBRAS Jekyll Version

## Instalation

#### Install Ruby:
- Linux:  
`$ sudo apt-get install ruby-full;`(Apt-get)  
`$ sudo yum install ruby;`(Yum)

- Windows:  
[Ruby Installer](http://rubyinstaller.org/)

#### Install Jekyll and Plugins used:
````sh
gem install jekyll; # The Jekyll
gem install jekyll-polyglot; # Multilanguage support
gem install rb-fsevent; # Required by Polyglot
gem install jekyll-contentblocks; # To make some content divisions to a better "layouting"
````
#### Setup the repository:
Clone deeplibras.github.io:
````sh
git clone https://github.com/deeplibras/deeplibras.github.io.git;
````
Go to the folder and checkout jekyll-version
````sh
cd deeplibras.github.io;
git checkout jekyll-version;
````
#### Start server/watcher:
````sh
jekyll serve
````
All of your updates on code will regenerate the site file automatically.

## And now it's ready to go!
Just go to `localhost:4000` (or other port if jekyll was with other config) to see the results.
