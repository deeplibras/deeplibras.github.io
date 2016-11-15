# DeepLIBRAS Site Jekyll Version

## Instalation

#### Install Ruby:
- Linux:  
`# apt-get install ruby-full` (Apt-get)  
`# yum install ruby` (Yum)

- Windows (GEM may be outdated ):  
[Ruby Installer](http://rubyinstaller.org/)

#### Install Jekyll:
`gem install jekyll bundler`

#### Setup the repository:
Clone deeplibras.github.io:  
`git clone https://github.com/pliavi/deeplibras.github.io.git`  
\* If it's already on DeepLIBRAS repository, change "pliavi" to "deeplibras".

Go to the folder and checkout jekyll-version
````
cd deeplibras.github.io
git checkout jekyll-version
````

#### Plugins used
- **jekyll-polyglot**: Multilanguage support
- **jekyll-contentblocks**: To make "layouting" easier with... content blocks? :laughing:
- **jekyll-haml**: HAML support  
(highly unrecommended to work with Liquid, the jekyll's "programming language", as same as markdown, installed content-blocks to contour this).  

To install them, use:  
`bundle install` on the project folder

#### Start server/watcher:
`jekyll serve`  
All of your changes on code will regenerate the site files automatically (`_config.yml` file changes won't be regenerate, it require server restart).

## And now it's ready to go!
Just go to `localhost:4000` to see the results.
