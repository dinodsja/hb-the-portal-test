# The Portal Test

A command-line utility to optimize the picking process in the hb warehouse. This tool processes a CSV input file and generates a sorted output CSV file, making the picking process more efficient by organizing items in the optimal picking order.

## Installation

Install Node.js, then clone the repository and navigate to the directory.

```bash
git clone https://github.com/dinodsja/hb-the-portal-test
cd hb-the-portal-test
```

Install dependencies:

```bash
npm install
```

#### Dependencies

The following packages are used in this project:

- `csv-parser`: A CSV parsing library used to read and process CSV files.
- `csv-writer`: A library for writing CSV data, used to generate the output CSV file after processing.
- `fs`: A built-in Node.js module for working with the file system, used for handling file operations such as reading, writing, and checking file paths, etc.

## Usage

Run app:

```bash
npm start
```

Run linting:

```bash
npm run lint
```

Run tests:

```bash
npm test
```

## File Structure

- app.js: The main entry point of the app, starts the entire process.
- processInput.js: Handles reading and parsing the input CSV file.
- processData.js: Processes the input data for grouping & sorting.
- processOutput.js: Writes the processed data to a new output CSV file.
- utils.js: Helper functions added here.
- app.test.js: A basic unit tests to make sure app works fine.

## Running the Application

By default, the application uses an input file located at:

```bash
./input/hb_test.csv
```

The processed output will be saved at:

```bash
./output/hb_test_sorted.csv
```

To run the application, execute:

```bash
npm start
```

When prompted, press Enter to skip the custom file and use the default input file, or enter a valid file path.

Enter the full file path to your custom CSV file (eg: /path/to/yourfile.csv).

If valid, the app will process the file and save the output as `<input_file_name>_sorted.csv` in the `./output/` directory.

## CSV Format:

```bash
product_code,quantity,pick_location
15248,10,AB 10
25636,1,C8
26982,1,AF 7
```

## Logging and Error Handling

- Success: Displays the number of rows processed and the time taken.
- Errors: Outputs errors such as:
  - File is not a valid CSV file
  - File is empty

## ESLint Rules:

```bash
npm run lint
```

- `no-unused-vars`: Throws an error for unused variables.
- `no-console`: Warns on the use of console statements, but allows console.error and console.info for error and info logging.
- `prefer-const`: Enforces the use of const for variables that are never reassigned.
- `no-var`: Disallows the use of var and encourages the use of let or const.
- `semi`: Requires semicolons at the end of statements.
- `quotes`: Enforces double quotes for strings, except when escaping is required.

## Unit Testing

Unit tests have been implemented using Jest to ensure the application works correctly.

```bash
npm test
```

#### Test Coverage

The unit tests cover the following scenarios:

- Verifying that the input file is correctly parsed into the expected format.
- Checking that the data sorting and grouping works as expected and returns the correct output.

## Performance Testing

To assess the performance of the app, I have added a large sample dataset. This allowed me to evaluate how the app handles large volumes of data. Additionally, I included functionality to display the time taken to complete the process, providing a basic insight about the application's performance.

## Workflow

To showcase my development process, I followed a basic Git workflow. For each requirement, such as project setup, implementing CSV input, processing data, outputting CSV, and adding unit tests, I created separate tickets. I then created individual branches for each task and submitted pull requests for every update, ensuring clear tracking of changes and proper code review.

- [Tickets (Closed)](https://github.com/dinodsja/hb-the-portal-test/issues?q=is%3Aissue)
- [Pull Requests (Closed)](https://github.com/dinodsja/hb-the-portal-test/pulls?q=is%3Apr)

## Tools Used

- **Operating System**: Windows
- **Visual Studio Code** – IDE for writing code, with the Prettier plugin used for automatic code formatting
- **Node.js** – JavaScript runtime environment used to build and run the application.
- **GitHub** – Used for code repository and ticket management.
- **Git Command Line** – Used for version control, including branching, commit and push operations.
- **ChatGPT** – Utilized for content generation and documentation.
- **Make a README** (https://www.makeareadme.com/) – A tool used to create the project’s README.md file

## Thanks

Thank you for taking the time to review this project!

I spent around 16 hours working on this, and while there is definitely room for improvement, this project is intended to showcase the basics of what I can do. I’m constantly learning and refining my skills.

If you have any questions or suggestions, feel free to reach out. I’m eager to keep improving and learning more.
