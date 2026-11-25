# Homework 11

## Text Analyzer with Regular Expressions

This is a small project for analyzing entered text using regular expressions. The main idea is to allow the user to enter text, quickly check its characteristics, and receive useful statistics in real time.

### Main Features

- Tracking the number of characters in the text
- Ability to exclude spaces from the count using a checkbox
- Character limit with the option to change the limit value (default: 300 characters)
- Calculation of approximate reading time based on an average reading speed of 200 words per minute
- Counting the number of words and sentences
- Analysis of letters used in the text with display of quantity and percentage
- Displaying statistics in a clean UI with responsive styling

### Working with Regular Expressions

Regular expressions are used throughout the project for:

- finding words in the text;
- counting sentences;
- filtering letters;
- removing spaces when the "Exclude spaces" option is enabled;
- validating the character limit.

### Key Scenarios

1. When the "Exclude spaces" checkbox is selected, all spaces are removed from the text before counting characters.
2. The character limit can be enabled and adjusted manually; by default, the value is 300.
3. The approximate reading time is calculated based on the number of words: 200 words per minute.
4. A list of letters found in the text is displayed, including the count of each letter and its percentage share.

### Link to GitHub Pages:
https://kovtun-alexandr.github.io/uncle-ivan/javascript/hw-11/index.html