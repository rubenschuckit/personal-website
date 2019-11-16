
# About This Site

### Motivation  
The point of making this site is to explore new engineering practices, and because I wanted to gain more experience in responsive web design as well as set up a CI/CD pipeline.   
  
### Technologies  
The site is made with **Angular** and uses all custom components I've created except for the **Bootstrap** navbar (and layout/grid). 
The Git repository is hosted by **GitHub** (formerly it was on Bitbucket) where all of my source code is public and available for [viewing](https://github.com/rubenschuckit/personal-website), 
and I make use of their integrated pipeline functionality through **GitHub Actions**. The site is deployed to **Firebase Hosting**. 
There is test coverage, and a merge to master with all passing tests triggers a deployment. This may seem like overkill, but it's actually super convenient to make changes, test them, and then just push and have the site re-deployed. This documentation is generated from a Markdown file I wrote and is translated to HTML using the **ngx-markdown** library. 

### CI/CD Pipeline 
One of the driving motivations for this site was to setup a CI/CD pipeline. I chose to make use of GitHub's new pipeline solution via GitHub Actions. 
When a commit is pushed, the tests are run to determine if the build is successful or not. When a commit is merged into master, the tests are run and a deployment is started. 

![Pipeline Steps](https://i.imgur.com/lKQ2ItD.png)

### Depfu
One of the benefits of switching to Github is I can make use of their rich plugin ecosystem. The first I'm taking advantage of is [Depfu](https://depfu.com/). Keeping up to date with dependencies can be pretty tricky even with semantic versioning tools in NPM. 
So Depfu automatically creates a PR when there are updates that can be made on a weekly basis.

![Pull Request form Depfu](https://i.imgur.com/A9wKGQa.png)

As you can see, it even thoughtfully deletes the branch once it's merged in. 

GitHub Actions was extra handy in this case because one of the dependencies it tired to update caused the build and tests to fail as evidence by the red 'x' on the right.

![Failed PR](https://i.imgur.com/4SgXwh4.png)

Turns out, Angular compiler doesn't yet support the most up-to-date version of TypeScript. There's already an issue opened on the Angular repo and they'll add support soon.
Getting around this is easy with Depfu. You just pause the update on any dependency you want and it won't be included in package.json updates.

![Paused TypeScript Update](https://i.imgur.com/gEESjfM.png)

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
    <a href="https://www.youtube.com/user/rschuckit" target="_blank" rel="noopener">YouTube Channel</a>.
  </p>
</app-interest>
```

If I ever develop new interests (at this age?!), I can simply add another component in the home 
template and it will be placed correctly with the next color in the list. If you're reading this
on a mobile device, you won't see the colors (since they take up too much space). 

### What's Next?
I'd like to implement SSR at some point. This site is basically completely static (no API calls whatsoever), so why should your browser do all the heavy lifting? Especially everyone translating MD to HTML in their browsers even though this work could be done once. Prerendering isn't super straightforward right now in Angular (correct me if I'm wrong). As another alternative I might look into a framework that has prerendering built in like Preact. 

### Acknowledgments 
The photo of me playing viola was taken by Hongda Zeng. Although often confused as a profesional
photographer, he is a software engineer too. 
The photo of Chicago on my homepage is by [Chait Goli](https://www.pexels.com/photo/aerial-shot-of-buildings-1823680/).
