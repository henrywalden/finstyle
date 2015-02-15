Finstyle Website by Meteor


Aim: To create a static website using Meteor.js .


Description:  To display a static website for a financial planning firm showing a multitude of pages on different routes.
The only reactive data will be a blog page and a reactive facebook postsÕ page.

The website will depend on a CMS based system to have the admin insert blog posts into the website. 


Additional features: 
-The front end will reactively show the blog post 
- Insert a, new blog post notification on insert to collection 
- Provide CMS based features:
	- User login
	- Blog insert
	- Blog edit/delete
	- Insert and upload to a external server (ie. Amazon  web server)

	
Database Model:

Collections:
- Blog posts
- Accounts


Tools to use:
-Iron router for routes on different page renders
-Spiderable (with phantom.js) for SEO
-A native CMS package, or a extended features built on top of existing package,
or a CMS package built from scratch.


CMS Packages to consider:

Houston.js:
An end user-like admin system to allow clients to push data on to their website and manipulate their own web app by themselves.

Can perform:
- deleting and create documents
- filtering and sorting searches
- nested objects search (limited to certain depths
issues on Github link to problems with deep nested Arrays which cannot be edited)
- User based login in system dependent on Meteor accounts
- Tests can be run using Velocity.js

Dependencies:
- Iron router for routing 
- Meteor Account for user login as admin 
- Bootstrap for css styling
- Meteor.js 1.0 and higher


Orion.js:
A simple CMS that provide a user interface; an admin panel to store data into our collections. Uses a key/value based inserts which allow for changes from the blog posts to logos or images within the post.

Can perform: 
- saves files as dictionaries and uploads to a S3 bucket
- Usage of dictionaries allow clients to change static content Ð outside of the blog page - as well
- lightweight and uses a custom editor, summernote. Images, uploaded are saved in a S3 bucket.
- Rapid prototype to CMS

Dependencies:
- Meteor 1.0 and higher
- Meteor Accounts


Conclusion: Due to the lightweight nature of the Orion.js package and the highly portable feature of making static content editable within the admin panel page. Removing the necessary need for maintenance on the developerÕs part.
