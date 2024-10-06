# playwright

For running tests in home.spec.ts open terminal and copy command:
 npx playwright test "home.spec.ts"
 There are 3 tests in the file "home.spec.ts". In Description is visible what tests need to check. Also user can click on green sign left of test or click run button or click execute Playwright test button. There is HomePage class with methods and Links class with some locators. In Output.txt file is result from one test. We have only 12 positions  after filtering jobs in Serbia, and test only is coping that to txt file. If user click on button for more position then 16 jobs are visible, but now only visible position is copied to txt file, test does not click show more button. Result is visible in terminal and in index.html. Tests are running on Edge, Chrome and Firefox, other devices are commented in config file. Node modules are not pushed.