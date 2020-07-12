<h1 align="center">
PathCheck PR
</h1>

<p align="center">
  A community project to help curve the effects of COVID-19 in Puerto Rico. Built with ❤️
</p>

## Project Setup

### Pre-Requisites
1. Download and install <a href="https://localwp.com/">Local by Flywheel</a> (A fuss-free way to develop WordPress locally)
2. Download and install <a href="https://getcomposer.org/">composer</a> (A dependency manager for PHP). If you have a Mac, I recommend installing it via hombrew.

### Create a new WordPress project in Local by Flywheel
1. Launch Local by Flywheel and click on <u><strong>Create a New Site</strong></u>
2. For the project name, enter ```pathcheckpr```
3. Open the <u><strong>Advanced Options</strong></u> tab and click <u><strong>Browse</strong></u> to select the directory where you want to create the project. A good place could be the www folder in your root directory if you have that setup, something like this: ```~/www/pathcheckpr-cms```
4. Click <u><strong>Continue</strong></u>
5. Where it says choose your environment, select <u><strong>Custom</strong></u>
6. For PHP Version, select latest version: ```7.4.1```
7. For Web Server, select latest version: ```Nginx 1.16.0```
8. For Database, select latest version: ```MySQL 8.0.16```
9. Click <u><strong>Continue</strong></u>
10. For WordPress Username, enter: ```admin```
11. For WordPress Password, enter: ```password```
12. For WordPress Email, enter whatever you want: ```you@mail.com```
13. Make sure to write down your username and password if you make something custom and click <u><strong>Add Site</strong></u>
14. Enter your machine password when prompted to confirm site creation
15. Within the Site Overview tab, find where it shows the SSL certificate and click <u><strong>Trust</strong></u>

### Clone Github repo
1. Launch terminal and get into the root of the WordPress project you created with Local by Flywheel
```
$ cd ~/www/pathcheckpr-cms/
```
2. Start a new git repository
```
$ git init
```
3. Add the remote from where you want to clone
```
$ git remote add origin git@github.com:jorgeramos/pathcheckpr-cms.git
```
4. Pull the project and merge with local git
```
$ git pull origin master
```
5. From the command line, navigate to the bedrock directory and install the composer dependencies
```
$ cd ~/www/pathcheckpr-cms/app/bedrock/ && composer install
```

### Configure the project
1. Launch the project with your favorite code editor. If you have VS Code, type this in terminal: 
```
$ code ~/www/pathcheckpr-cms
```
2. Open the following file: ```/conf/nginx/site.conf.hbs```
3. Update the line that reads: [```root   "{{root}}";```] to point to the full path of the bedrock web directory, for example: [```root   "/Users/your_username/www/pathcheckpr-cms/app/bedrock/web/";```]
4. Open the following file: ```/app/bedrock/.env.example``` and save it as ```.env``` in the same directory
5. Verify that the WP_HOME variable matches the url of the site you created in Local by Flywheel, for example: ```WP_HOME='https://pathcheckpr.local'```
6. Go back to the Local by Flywheel app and restart the site by clicking <u><strong>Stop Site</strong></u> and then <u><strong>Start Site</strong></u>
7. Access the WordPress admin by visiting <a href="http://pathcheckpr.local/wp-admin/">http://pathcheckpr.local/wp-admin/</a> and logging-in with the credentials you used when you created the site.
8. On the left-hand navigation of the WordPress admin, hover over <u><strong>Appearance</strong></u> and click on <u><strong>Themes</strong></u>.
9. Locate the PathCheck PR Theme and click <u><strong>Activate</strong></u>.
10. You should now be able to view the homepage by visiting <a href="https://pathcheckpr.local/">https://pathcheckpr.local/</a>