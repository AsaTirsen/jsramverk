import React from 'react';
import { Markup } from 'interweave';

const articleContent = "<p>This project was bootstrapped with <a href=\"https://github.com/facebook/create-react-app\">Create React App</a>.</p>\n" +
    "<h2 id=\"available-scripts\">Available Scripts</h2>\n" +
    "<p>In the project directory, you can run:</p>\n" +
    "<h3 id=\"-npm-start-\"><code>npm start</code></h3>\n" +
    "<p>Runs the app in the development mode.<br />\n" +
    "Open <a href=\"http://localhost:3000\">http://localhost:3000</a> to view it in the browser.</p>\n" +
    "<p>The page will reload if you make edits.<br />\n" +
    "You will also see any lint errors in the console.</p>\n" +
    "<h3 id=\"-npm-test-\"><code>npm test</code></h3>\n" +
    "<p>Launches the test runner in the interactive watch mode.<br />\n" +
    "See the section about <a href=\"https://facebook.github.io/create-react-app/docs/running-tests\">running tests</a> for more information.</p>\n" +
    "<h3 id=\"-npm-run-build-\"><code>npm run build</code></h3>\n" +
    "<p>Builds the app for production to the <code>build</code> folder.<br />\n" +
    "It correctly bundles React in production mode and optimizes the build for the best performance.</p>\n" +
    "<p>The build is minified and the filenames include the hashes.<br />\n" +
    "Your app is ready to be deployed!</p>\n" +
    "<p>See the section about <a href=\"https://facebook.github.io/create-react-app/docs/deployment\">deployment</a> for more information.</p>\n" +
    "<h3 id=\"-npm-run-eject-\"><code>npm run eject</code></h3>\n" +
    "<p><strong>Note: this is a one-way operation. Once you <code>eject</code>, you can’t go back!</strong></p>\n" +
    "<p>If you aren’t satisfied with the build tool and configuration choices, you can <code>eject</code> at any time. This command will remove the single build dependency from your project.</p>\n" +
    "<p>Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except <code>eject</code> will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.</p>\n" +
    "<p>You don’t have to ever use <code>eject</code>. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.</p>\n"


const reports = [
    {
        name: 'Redovisning vecka 1',
        id:1,
        content:<Markup content={articleContent} />,
        url: 'week/1'
    },
    {
        name: 'Redovisning vecka 2',
        id:2,
        content: 'Redovisningstexter2',
        url: 'week/2'
    },
]

export default reports
