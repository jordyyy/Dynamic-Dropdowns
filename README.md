# Dynamic-Dropdowns

<p>I created dynamic dropdown lists for use in automotive ecommerce sites. The program creates a query string that sends the user to the correct page within our existing site and can be modified to work within your site with a few edits. I had to find a way to create this entirely on the front end because it is being used within a Squarespace site, but it is a great solution for anybody that is not interested in using PHP.</p>

<h2>Overview</h2>

<h4>
index.html
</h4>

<p>
This is the index html and the external style sheets and javascript files are represented.
</p>

<h4>
buildUrl.js
</h4>

<p>
This function creates the query string that sends the user to the appropriate page within our website. You will need to update this file to go to the correct url.
</p>

<h4>
dropdowns.js
</h4>

<p>
This file creates the dynamic dropdowns.
</p>

<h4>
makeObject.js
</h4>

<p>
This is where the vehicle information is stored. The data that is in there represents our current catalog and will need to be updated with the appropriate make, model, and year of your catalog.
</p>

<h4>
style.css
</h4>

<p>
This is the CSS page where you can customize the looks.
