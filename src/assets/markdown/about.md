
### Motivation  
The point of making this site is to explore new engineering practices, and because I wanted to gain more experience in responsive web design as well as set up a CI/CD pipeline.   
  
### Technologies  
The site is made with *Angular* and uses all custom components I've created except for the *Bootstrap* navbar (and layout/grid). The Git repository is hosted by *Bitbucket* where all of my source code is public and available for [viewing](https://bitbucket.org/rschuckit), and I make use of their integrated pipeline functionality. The build is run in a *Docker* container and is deployed to *Firebase Hosting*. Their is test coverage, and a merge to master with all passing tests triggers a deployment to production. This documentation is generated from a Markdown file I wrote and is translated to HTML. I go into full details below.

### CI/CD Pipeline 
One of the driving motivations for this site was to setup a CI/CD pipeline. I chose to make use of Bitbucket's pipeline solution. When a commit is pushed, the tests are run to determine if the build is successful or not. When a commit is merged into master, the tests are run and a deployment is started. 

![Pipeline Steps](https://i.imgur.com/iDiwe2s.png)
