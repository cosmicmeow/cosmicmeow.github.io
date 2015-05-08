<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'thecwqhi_na');

/** MySQL database username */
define('DB_USER', 'thecwqhi_na');

/** MySQL database password */
define('DB_PASSWORD', '1qSvk0hPy1');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'hhhwthgh8gocfdgb3ciwtzu2jctzxctvqmmjpcxl5sxsnpt2lltlhjnl6gjxwq8e');
define('SECURE_AUTH_KEY',  'gwrgyvbeb0br2rrfqldxeklt3dnhiduy3ez5pi2pfkmcpce6fdbmc3ydkznzth3e');
define('LOGGED_IN_KEY',    'mqkgubzyopk0hhgqen8n8sdeut1lb2xz45hpv4lsfcikmikx4w6xp9brtodjl1tu');
define('NONCE_KEY',        'b5j9c9xcdts1a17dfrhcyhfgijbmthfwxs2fzckhfsolseqewq25apx3wajsc5iv');
define('AUTH_SALT',        'wslviwdd1k9gnoceismqd1jtwflgraixw7mtt5z7hr0p7dcoaitx74denohrenee');
define('SECURE_AUTH_SALT', 'ihrhni3oggmmsnjdrhvfe8kgud7kku8chwqhj1gfc5ddhtbnilvbnzpwe349wuyw');
define('LOGGED_IN_SALT',   '7bshbg7cafemc2n1zuor35pceraueseqpoeacx90opbhurmgiveofshamdcehosp');
define('NONCE_SALT',       'jqwrya9eq8tugtip6ftw6wpat6n62enask3kdkrdwrhdp3cisnixof5a2squmhul');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* Multisite */
define('WP_ALLOW_MULTISITE', true);
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', false);
define('DOMAIN_CURRENT_SITE', 'wtfolk.com');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
