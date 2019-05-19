# About This Site

### Motivation  
The point of making this site is to explore new engineering practices, and because I wanted to gain more experience in responsive web design as well as set up a CI/CD pipeline.   
  
### Technologies  
The site is made with **Angular** and uses all custom components I've created except for the **Bootstrap** navbar (and layout/grid). 
The Git repository is hosted by **Bitbucket** where all of my source code is public and available for [viewing](https://bitbucket.org/rschuckit), 
and I make use of their integrated pipeline functionality. The build is run in a **Docker** container and is deployed to **Firebase Hosting**. 
There is test coverage, and a merge to master with all passing tests triggers a deployment to "production." 
This documentation is generated from a Markdown file I wrote and is translated to HTML using the **Showdown** library. 

### CI/CD Pipeline 
One of the driving motivations for this site was to setup a CI/CD pipeline. I chose to make use of Bitbucket's pipeline solution. 
When a commit is pushed, the tests are run to determine if the build is successful or not. When a commit is merged into master, the tests are run and a deployment is started. 

![Pipeline Steps](https://i.imgur.com/iDiwe2s.png)

## Angular Components

### Interest Component
The three sections on the home page that show my interests is encapsulated in an Angular component.
The component takes in a title string and an image file name. In the component, there is a static
array with a list of colors to be used as the background color of the blocks to the left and 
right of the content. There's also a static count so that the component knows if it is even
or odd in the list and alternates which side the colored block is on. This is accomplished by 
using flexbox with a simple class applied to the container `[ngClass]="{'flex-row-reverse': !isEvenCount}`.

The third "input" to the component is content projection. For example, the first interest
component declaration looks like 
```
<app-interest imageFileName="viola.jpg" title="Viola">
  <p class="text-sm-center text-md-left">
    I began playing viola in 6th grade and still play today. I put most of my performances on my
    <a href="https://www.youtube.com/user/rschuckit" target="_blank">YouTube Channel</a>.
  </p>
</app-interest>
```

If I ever develop new interests (at this age?!), I can simply add another component in the home 
template and it will be placed correctly with the next color in the list. If you're reading this
on a mobile device, you won't see the colors (since they take up too much space). 

### Acknowledgments 
The photo of me playing viola was taken by Hongda Zeng. Although often confused as a profesional
photographer, he is *merely* a software engineer too. 
The photo of Chicago on my homepage is by [Chait Goli](https://www.pexels.com/photo/aerial-shot-of-buildings-1823680/).
