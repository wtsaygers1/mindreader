# Mind Reader Pseudo Code
Input: No input is necessary. The math being used is a fun property of the multiples of 9. In order to keep the magic alive, the output will need to be randomized each time the user plays.

Output: The output will be a list of symbols the user can scroll through. The most important symbol is the one that will represent the multiples of 9 ranging from 1-99 (9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99). These numbers must have the same symbol and that symbol must be randomly reselected each time a user plays the game. Every other number can have a random symbol.
- need to have enough symbols so users believe the result is magic and reselect symbols with each game to keep users from finding any patterns too easyily 

Create:
- Object that is view
    - each view will have properties that many are similar but some will vary
        - instruction 
        - next button
        - instructions when to press next button
        - home button
        - back button
- A single page with 6 views(states) that the user will navigate through
    - the correct view must render as the user goes through the game 
- View 1: the homepage
    - top of view has a catchy phrase about being able to read the users mind
    - bottom right has a navigation button to proceed to the next view
- View 2: Selecting a number 1-99 inclusive
    - top of view instructs the user to select a number 1-99
    - middle has a button to proceed to the next view
    - below the middle button are instructions for the button: press button when number selected
    - bottom right has a refresh/home button to return to view 1
    - bottom left has a back button to go back one view
- View 3: Addition instructions for the selected number
    - top of view tells user to add the digits of the selected number
    - middle has a button to proceed to the next view
    - below the middle button is an example of how to add digits of selected number and instructions to press button when ready to proceed
    - bottom right has a refresh/home button to return to view 1
    - bottom left has a back button to go back one view
- View 4: Subtraction instructions for the new number from the original number
    - top of view tells user to subtract new number from original number
    - middle has a button to proceed to the next view
    - below the middle button is an example of how to subtract new number from original number and instructions to press button when ready to proceed
    - bottom right has a refresh/home button to return to view 1
    - bottom left has a back button to go back one view
- View 5: Find your number and associated symbol
    - top of view is a list of numbers and their respective associated symbol (will need a scroll bar for the user to scroll through the numbers to find the one selected and see symbol)
    - middle has a button to proceed to the next view (give the text in this button something exciting)
    - below the middle button are instructions to find new number and a note to the user to remember the symbol next to the number
    - bottom right has a refresh/home button to return to view 1
    - bottom left has a back button to go back one view
- View 6: Reveals the symbol
    - top of view is the symbol given to all multiples of 9
    - middle is text about your symbol is and matches the symbol in the top of the view
    - bottom right has a refresh/home button to return to view 1
    - bottom left has a back button to go back one view

Functions/Events: 
- The next view button on View 1
    - when the user presses the button, View 2 must render
- The next button in the middle of Views 2-5 (with 5 having special reveal text)
    - when user presses the button, the following View must render
- The refresh/home button in the bottom right of View 2-6
    - when the user presses the button, View 1 must render
- The back button in the bottom left of View 2-6
    - when the user presses the button, the preceeding View must render
- Symbol Assignation
    - multiples of 9 ranging from 1-99 inclusive must have the same symbol that is randomly assigned each time a user plays the game (keep a range of 4-6 symbols that will only be assigned to multiples of 9)
        - every time View 1 is initiated (except when hitting back button on View 2 or maybe just take back button off of View 2)
        - every time the refresh/home button is pressed, this function must occur
    - every other number must be randomly assigned a symbol
        - ensure the symbols reserved for multiples of 9 are not included in these symbols
        - every time View 1 is initiated (except when  hitting back button on View 2 or maybe just take back button off of View 2)
        - every time the refresh/home button is pressed, this function must occur