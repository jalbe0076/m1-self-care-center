 # Self-Care Center 

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
A website was built to provide users with motivational messages to help with ones mental health. Everyone has different needs, for some, a little inspirational message can be all they need to make their day better. The user can cycle through two different motivational messages, mantras and affirmations. The message will be displayed on the screen where the user then has the option to favourite that message and any other they want. The favourited messages can be viewed on their own page allowing the user to refer to the messages throughout the day when they need a little inspiration boost. The user can also delete some favourited messages so that they display only the ones which provide them what they need for the day. If the user refreshes the page their favourite results will persist on the page. 

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1. fork this repository https://github.com/jalbe0076/m1-self-care-center
2. Clone down your new, forked repo using the generated SSH link in the terminal
3. cd into the repository
4. Open it in your text editor
5. View app in the browser by running open index.html in your terminal

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)
![SelfCare SR ](https://user-images.githubusercontent.com/123283073/230784493-d7f52d3f-b318-4332-b029-2b2a35b70081.gif)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
The project was assigned on 2023.04.04, all selected features was completed by 2023.04.07, the project worked and responded as intended. The CSS was refactored on 2023.04.08 to use the CSS flexbox layout, a concept that was learned after the styling was complete. The project was issued in the 3rd week of Turing's Mod1. 

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
[Jason Alberto](https://github.com/jalbe0076) worked on this application. 

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
The learning goals of the project was to gain experience using HTML, CSS and JavaScript.  Some files were provided with the links already written in the HTML skeleton. The styling specifications were commented out in the CSS sheet. The HTML and CSS were written in a way to have JavaScript manipulate it through the DOM to display and respond to user events. VS code was the text editor used to write the HTML, CSS and JavaScript. GitHub was used to store as a hosting platform, although this project was solo, commits were pushed to branches to mimic best practices. Merges into main were completed with clean code, meaning no broken or dead code was merged into the main branch. A feature to have the data persist on a page load was added, localStorage method was used to have the data persist.  

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
Win#1: Having a better understanding of how `event.target.parentNode` operates and finding out about a concept called bubbling. 
Win#2: Playing around with different CSS properties really helped better understand how elements can be manipulated on the page.
The biggest challenge on the project was using the `innerHTML` method to manipulate the HTML on the DOM. Using this method was removing the event listeners that were written. The user event would work as intended the first time, but because `innerHTML` was being used to display the HTML, the event listeners would stop working. This was a frustrating challenge to overcome, I originally did not know what to google because I was not aware that `innerHTML` removed event listeners. Once my searches did not help with a solution I tried collaborating with peers, the first few troubleshooting sessions did not provide any information, but after about the 3rd pairing, I was sent an article titled [DOM Manipulation and the Dangers of ‘innerHTML](https://betterprogramming.pub/dom-manipulation-the-dangers-of-innerhtml-602f4119d905). This article lists some issues with using `innerHTML` and one of them was that it removes event listeners. With this I was able to refine my search and come up with a solution. 
As an added challenge and for self development, the feature to have the page persist on a page load as local storage was researched and added before turning in the project. This additional feature was added in before the deadline to turn in the project. 