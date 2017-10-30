# Deployment

[Github pages or Surge tutorial](https://medium.freecodecamp.com/surge-vs-github-pages-deploying-a-create-react-app-project-c0ecbf317089#.ppee24ks1)

1. Inside project root folder from bash:

   ```
   npm run build
   ```

   Now a build folder appeared inside the project with files like: 

   ![](../img/npm_build.png)

   ​

2. If Surge is not installed:

   ```
   npm install -g surge
   ```

3. Still from within the projects root folder:

   ```
   surge
   ```

4. Enter email and password (only first time)

5. Enter path to project: 

   ```
   <path to project root>/build
   ```

6. write a domain (must be in the form <somenamehere>.surge.sh or accept the suggested domain by just hitting enter ([or see more here](https://surge.sh/help/getting-started-with-surge))

   (If project uses client-side routing, then index.html should be renamed to 200.html)

   ## Redeploy

7. After changes to the project redeploy with these 2 commands

   ```
   npm run build
   surge --domain <thedomainnamehere>.surge.sh
   ```

8. Or for ease of use save the domain inside a CNAME file (no extension) in root directory then we can deploy with just

   ```
   surge
   ```

9. Done!