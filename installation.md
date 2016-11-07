# DeepLIBRAS Jekyll Version

## Instalation

#### Install Ruby:
- Linux:  
`$ sudo apt-get install ruby-full;`(Apt-get)  
`$ sudo yum install ruby;`(Yum)

- Windows:  
[Ruby Installer](http://rubyinstaller.org/)

#### Install Jekyll:
Type on Terminal/CMD:
````sh
gem install jekyll;
gem install jekyll-polyglot;
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
Pull if necessary.
#### Start server/watcher:
````sh
jekyll serve
````
All of your updates on code will regenerate the site file automatically.

## And now it's ready to go!
Just go to `localhost:4000` (or other port if jekyll was with other config) to see the results.

#### Lazy One (Windows)
Paste on CMD and wait:
````bash
gem install jekyll &
gem install jekyll-polyglot &
cd %userprofile% &
mkdir jekyll &
cd jekyll &
git clone https://github.com/deeplibras/deeplibras.github.io.git &
cd deeplibras.github.io &
git checkout jekyll-version &
jekyll serve &
explorer http://localhost:4000
````
