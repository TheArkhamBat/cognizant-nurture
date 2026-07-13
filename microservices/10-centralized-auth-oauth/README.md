# Exercise 10: Centralized Authentication with OAuth 2.1 / OIDC

Register an OAuth2 app with your chosen provider (e.g. Google Cloud Console),
then replace YOUR_CLIENT_ID / YOUR_CLIENT_SECRET in application.yml.

cd oauth-client-app && mvn spring-boot:run   -> http://localhost:8098

Visiting http://localhost:8098/user redirects to the provider's login page;
after authenticating you're redirected back and /user shows your Principal,
/profile shows the full set of OIDC claims returned by the provider.
