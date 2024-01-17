# NitroFIT28 (nitrofit28)

NitroFIT28 | Easy-to-use gym and fitness management system.

## 1. Add FontAwesome pro key

We used Fontawesome pro version.

## 2. Install the dependencies

```bash
yarn
```

## 3. Add Configuration

```bash
cp .env.example .env
cp .env.frontend .env.frontend.dev
cp .env.frontend .env.frontend.prod
cp .env.frontend.app-dev .env.frontend.app-prod
```

## 4. Configuration for Laravel Sanctum

We have used Laravel Sanctum SPA authentication. Laravel Sanctum provides a featherweight
authentication system for SPAs (single page applications), mobile applications, and simple, token
based APIs. Sanctum allows each user of your application to generate multiple API tokens for their
account. These tokens may be granted abilities / scopes which specify which actions the tokens are
allowed to perform. Please check laravel default
[sanctum configuration](https://laravel.com/docs/9.x/sanctum#api-authentication)

## 5. Migrate the Database

Add your database details on .env

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nitrofit28
DB_USERNAME=root
DB_PASSWORD=toor
```

```bash
yarn fresh:dev
```

### Steps for Windows User

Press Win key + R > Paste following in the box > Press Enter

```
c:\windows\system32\drivers\etc\hosts
```

Then add thoes line at the bottom and save as admin.

```
127.0.0.1   api.nitrofit28.gomedia
127.0.0.1   app.nitrofit28.gomedia
```

### 7. Start the app in development mode (hot-code reloading, error reporting, etc.)

> Only for windows user

```
php artisan serve --host=api.nitrofit28.gomedia  --port=80
```

Change your api url from .env.frontend.dev

```
API_URL=http://api.nitrofit28.gomedia
```

```bash
yarn start:web
```

### Build the web app for production

```bash
yarn build:prod
```

### Build the mobile app for production

```bash
npm run build:{android|ios} --env={alpha|prod}
```

### Lint the files

```bash
yarn run lint
```

### How to deply it in local?

Valet is a Laravel development environment for Mac minimalists. No Vagrant, no /etc/hosts file. You
can even share your sites publicly using local tunnels. Yeah, we like it too. We used valet to
deploy this project. Check the configuration of [Laravel Valet](https://laravel.com/docs/9.x/valet)

### How to deply it in web?

First build your app then move all files in server

### Cron Jobs

```bash
/usr/bin/php8.1 {project-root}/artisan schedule:run >> /dev/null 2>&1                   *	*	*	*	*
/usr/bin/php8.1 {project-root}/artisan queue:work --timeout=36000 --stop-when-empty     */2	*	*	*	*
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).