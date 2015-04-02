##Chrome Extenions Made Easy

Don't you love those Chrome Extensions where every time you open a new tab you see [Left Shark Dancing](https://chrome.google.com/webstore/detail/katy-perry-sharks/gdamgkihggjpbiompgcmgbacpnhicnkf)? Or maybe an inspirational quote? Well, you're about to learn how to build your own.

You'll want to fork and clone this repository.

###Manifest.js

This file is an important file for Chrome to know all the information about your specific extension. You'll want to fill in the information wherever you see `"##"`. The rest of the information has been supplied for you.

###Public Directory
The rest of this project is going to boil down to HTML, CSS, JavaScript, and Jquery. The `public` directory is going to contain all the code to have your new tab do it's thang.

The `index.html` file is going to contain the HTML of your background. The `style.css` file located in the `css` directory is where you'll write the CSS to style your new tab. The `js` directory will contain any JavaScript or Jquery you might need to have your page work it's magic.

###Moment.js
A lot of new tab backgrounds on Chrome extensions display the current date and time. If you would like to do the same, [Moment.js](http://momentjs.com/) is a great open source date and time JavaScript library.

We have already included the code for this library in `public/js/moment.js`. You'll just need to link that file to your `index.html` file.

###Developer Account

For this project, you're going to use Flatiron's Google developer account. You can log into Flatiron's Google developer account [here](https://chrome.google.com/webstore/developer/dashboard).

You'll want to see if you're already logged in through other Google accounts.

If you see something like this...
<img src="https://s3.amazonaws.com/after-school-assets/chrome_signin.png">

you'll want to click the drop down arrow next to your gmail, and log in with Flatiron's.

```
Email: google@flatironschool.com
PW: 33flatiron26
```

###Uploading Your Project to The Chrome Store

Now that you're project works locally, it's time to upload it to the Chrome Web Store!

Once you're logged in, you should see a big blue button that looks something like this:
<img src="https://s3.amazonaws.com/after-school-assets/add_new_project_chrome.png">

You'll be prompted to upload a zip file of your project. You can make a zip file of a folder in terminal by entering:

```bash
  zip -r what_i_want_to_name_zip_file name_of_file_i_want_to_zip
```

For example, if I had a directory called `dancing_dogs` and I wanted to make a zip file, I would enter

```bash
  zip -r dancing_dogs.zip dancing_dogs
```

This would create a zip file called `dancing_dogs.zip` from the `dancing_dogs` directory.

Once the file has been uploaded, you'll be directed to a page to fill out more information about your Chrome Extension, like the description, a screenshot for an icon, what category app is it, etc.

You'll want to hit `Publish Changes` found in the bottom right corner of the page, and voila! You have a Chrome extension!

##Resources

[Github Repo for the Left Shark Chrome Extension](https://github.com/vicfriedman/katy_perry_chrome_extension)
