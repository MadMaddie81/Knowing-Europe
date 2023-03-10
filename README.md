# __Knowing Europe__

Knowing Europe is a simple little JavaScript trivia game with two game modes.

The first mode presents the player with the picture of a flag and three options.  
The goal is to correctly guess which country the flag blelongs to.

The second game mode presents the user with the name of a country, a picture of a city and, once again, three options.  
The goal this time is to correctly guess the name of the capitol city of the country.

In both game modes the game runs for 15 rounds.

> Visit the site and try out the game [__HERE__](https://madmaddie81.github.io/Knowing-Europe/)

![Mockup](assets/images/readme_images/knowing-europe-mockup.png)

---

## __Features__

### __The Header__

![Header](assets/images/readme_images/header.png)

__The header has two features:__  
* The title of the game.
* The option buttons to start a new game
  - These buttons will be here through the entire game process and allows for the player to restart the game at any point.
  - On screens that allow hover effects, all buttons in this game will react on the cursor movements.

### __The Footer__

![footer](assets/images/readme_images/footer.png)

I chose to go with a very simple footer that only has two features; my name, and a disclaimer that all images comes from Wikipedia, with a link that opens in a new tab.

### __The Landing Page__

![Game choice](assets/images/readme_images/start-screen.png)

* When the player arrives to the site they are presented with two options; Flags or Capitols.  
* These buttons are larger versions of the ones in the header and are here to further entice the user to start a game.

### __The Game Explanation__

![Explanation](assets/images/readme_images/game-explanation.png)

When the player has picked a game mode the are presented with a short description of the game and a button to start the game when they are ready.

### __The Flag Game__

![Flags](assets/images/readme_images/flag-game.png)

* Each round the player is presented with a new flag.
  - The same flag will not appear twice in the same game session.
* A bar with three option buttons has now appeared.
  - One of the buttons has the name of the correct answer.
  - The content of the other two buttons has been randomly generated from an array.
  - The order of the option buttons are also randomly generated.

![correct](assets/images/readme_images/correct.png)

* If the player picks the correct answer, the bar behind the option buttons turns green and a message tells the player that they were indeed correct.

![wrong](assets/images/readme_images/wrong.png)

* If the player chooses incorrectly the bar turns red and the correct answer is displayed below.

### __The Capitols Game__

![Capitols](assets/images/readme_images/capitols-game.png)

* This game mode is very simmilar to the Flags game.
* Here the player is asked the question "What is the capitol of (_country name_)?"
* A lovely picture of the city in question is presented instead of a flag.
* The incorrect options in this game mode has not been randomly generated. 
  - Instead they have been individually selected for each question, and can be the names of big cities in the same country, the capitols of neighbouring countries, or the name could just have been made up by me.
* The order of the option buttons are still randomised.
* The answering system works the same way as in the Flag game.

__In both game modes the game runs for 15 rounds.__

### __The Score Bar__

![Score bar](assets/images/readme_images/score-bar.png)

* After each game round the Score Bar is updated
* Three variables will be tracked:
  - The number of correct answers.
  - The number of played game rounds.
  - The percentage of correctly answered questions.

### __The Results__

![Results](assets/images/readme_images/results.png)

* After all 15 rounds has been played the player is presented with their results
* A button brings the player back to the very first page, so they can start over.

### __Features yet to be implemented__

* __404 Page__ 
  - Since the game only consists of one page and all links and buttons has been thouroughly tested, I decided not to make a custom 404 error page.
* __Expansion__
  - It wouldn't take much to make a series of games covering the other continents, such as Knowing Asia and Knowing Africa.

---

## __Design, Technologies & Deployment__

* The game was designed and written in __GitPod__, using __HTML__, __CSS__ and __JavaScript__
  - The DOM, the styling and the script are all in separate files.
* The site is hosted by [__GitHub__](https://github.com/) and was deployed to __GitHub Pages__ using the main branch.
* The favicon was created using [__favicon.io__](https://favicon.io/).
* The game mode icons were imported from [__Font Awesome__](https://fontawesome.com/).

---

## __Testing__

> __The site and the game has been tested both manually and with different web tools__

### __Responsiveness & Visual Glitches__

> Screenshot from iPhone XR  
![iPhone](assets/images/readme_images/iphone.png) 

> Screenshot from iPad Air Pro  
![iPad](assets/images/readme_images/ipad.png)

* The page has been tested to ensure that it looks as intended on screen sizes from 320px width and up.
* The responsiveness tests were done using:
  - Chrome developer tools
  - Edge
  - Safari, iPhone XR
  - Safari, iPad Air Pro
* No images or fonts has been stretched or in other ways warped.
* No elements overlap.
* No horizontal scrolling appear.
* Header stays at the top and Footer stays at the bottom.
* All text has a readable font size.

#### __Bugs Found__

* A number of the flags did not render in Safari, and instead displayed the alternative text.
  - __Resolved:__ Changed the file format of the aformentioned flags from webp to png.
* The text and icon color of the game mode buttons appeared blue in Safari.
  - __Resolved:__ Made sure that the text color styling was applied directly to the buttons and not relying on inheritage from parent elements.
* Buttons occasionally appeared with the hover-styling on touch screens.
  - __Resolved:__ Found a [__guide__](https://ferie.medium.com/detect-a-touch-device-with-only-css-9f8e30fa1134) that explains how to add media queries for touch devices, and set the hover-styling for those devices to default.

### __Accessibility__

![Accessibility](assets/images/readme_images/accessibility.png) ![contrast](assets/images/readme_images/contrast.png)

* The [__Wave__](https://wave.webaim.org/) accessibility evaluation tool has been used on the finished, deployed game to look for any accessability concerns. No such errors were found.
  - The one alert in the summary is refering to the line of \<noscript> I put on the page, since most users won't be able to see that, which is as intended.
  ![Noscript](assets/images/readme_images/noscript.png)
* No contrast issues were found.
* Heading levels has not been missed or skipped.
* All images has an alternative text.
* All fonts has been kept simple and easy to read.
* External links has __aria labels__ and opens in a new tab.

### __Lighthouse Testing__

> The lighthouse performance tests were done by [__Lighthouse Metrics__](https://lighthouse-metrics.com/)

![Lighthouse](assets/images/readme_images/lighthouse.png)
![Lighthouse audits](assets/images/readme_images/lighthouse-audits.png)

### __Validator Testing__

> * __HTML__ was tested by the [__W3C Validator__](https://validator.w3.org/).
>   - No issues were found

![HTML Validation](assets/images/readme_images/html-validator.png)

> * __CSS__ was tested by the [__W3C Jigsaw Validator__](https://jigsaw.w3.org/).
>   - No issues were found

![CSS Validation](assets/images/readme_images/css-validator.png)

> * __JavaScript__ was tested by [__JS Hint__](https://jshint.com/).
>   - No errors were found.
>   - All 67 warnings are purely related to syntax choice.

![JS Hint](assets/images/readme_images/js-hint.png)

### __Gameplay Testing__

The game was continuously tested by me during the entire coding process as the commits got pushed to GitHub.  
After every major step I also sent the game out to family and "gamer" friends for testing and opinions.

#### __Bugs found and dealt with during the testing process:__

* The game moved on to the next question immediately after player submitted an answer, not giving time to see what the correct anser was.
  - __Resolved:__ Added a timer between game rounds to pace the game. (Learned from [__W3 Schools__](https://www.w3schools.com/))
* The event listeners didn't get removed from the option buttons as intended after submitted answer, making it possible to answer the same question several times before the game moved on to the next question.
  - __Resolved:__ Instead of trying to target specific listeners I decided to use the clone node method to simply remove all listeners from the option buttons.
* There are only so many countries in Europe and it wasn't unusual for the same question to be asked twice in a row.
  - __Resolved:__ I created an array that will follow along during the game session and collect and store the number of the current question. When the question number is selected it gets compared to the array of used questions and is only displayed to the player if not used before. The array empties when the game is reset.

#### __Final Testing Results:__

* The game controls has been tested and works as intended with mouse, with keyboard and with touch screen.
* All buttons goes where intended and has the correct text content.
* Double clicking / spam clicking the option buttons will not affect the gameplay in any way.
* All countries are matched up with the correct flag, capitol, city image and the "wrong" options for the Capitols game.
* All randomisers works as intended.
* The same question / country will not appear twice during the same game session.
* The Statistics bar increments the score and the game rounds, as intended, and correctly calculates the win %.
* The game play has a nice comfortable pacing and feels neither stressed or too slow.
* The Result screen chooses the correct message depending on the player's score.
* Changing window tabs / tabbing out of the browser will not affect the game.
* Reloading the page resets the game, which is expected.

> * __The finished game has been stress tested and critiqued by an 8 year old with a passion for geography.__
>   - The boy reluctantly admitted that the game works flawlessly every game round (as did his score).

---

## __Credits__

* All images of flags and cities has been aquired from [__Wikipedia__](https://wikipedia.org/)
* The image used for the favicon is a generic clipart picture, found on [__Google__](https://google.com/)
* This repository has been based on the Code Institute [__full template__](https://github.com/Code-Institute-Org/gitpod-full-template)
* All other help and tutorials I used has already been credited in this readme where the feature was implemented.
* The code was written by me, Madeleine Vikner.