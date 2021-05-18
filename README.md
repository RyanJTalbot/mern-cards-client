### how tf does privateRoutes work; like wtf is ...rest

![image info](./pictures/image.png)

removed build folder

## Netlify docs for deployment

- https://docs.netlify.com/configure-builds/environment-variables/

## Debug Netlify build

- https://answers.netlify.com/t/support-guide-using-build-logs-to-debug-your-build-process/3067

If you’d like to get a summary of what a build will do without taking the time to do a full build, you can use the --dry flag:

netlify build --dry

This command will output a list of all the stages of the build and the behaviors that are configured to run during each stage.

Print debugging output

To print the full debugging output for a command to the terminal, set the DEBUG variable before running the command.

On Mac OS, Linux, and some common Windows terminals, add DEBUG=\* to the beginning of the command:

DEBUG=\* netlify deploy
