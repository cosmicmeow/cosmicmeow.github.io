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
define('DB_USER', 'thecwqhi_albert');

/** MySQL database password */
define('DB_PASSWORD', 'cfahrva757');

/** MySQL hostname */
define('DB_HOST', 'https://server64.web-hosting.com');

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
define('AUTH_KEY',         'C7vMi5ws9&4V-LEnfqK[ZudoRgjnEh$N&,y*8c{r7Xg2_ukdX*8?%n~k#B`tYC8_');
define('SECURE_AUTH_KEY',  'h2>MiWr-I Y@|_O`G5>zm/`G[a z3GMAY_4!fJV7w)3y~e4mJl_x9nU1=}Q7<:UX');
define('LOGGED_IN_KEY',    'R+Q(,U^a5fa-.#Kx$%lWZI<-|6Y;)!m,co+ifb#0[YNE}KG(9UY-Gh^p^$Sl]o8t');
define('NONCE_KEY',        'URLMmoPYSgyOQW%+8he6(Y`U|ZKjpSU&}CM?sAtHl}q]_7ps|Ke(p,;|A[,t5BH.');
define('AUTH_SALT',        ')J(:8c{n&ahlrUT7s*cT:iG|BqY>+6ZW%:Ej[F%e Z}n-,@Wm8jY=n!O:LOxI+Z-');
define('SECURE_AUTH_SALT', 'c70}$M^4QnD{lDrk||;![auWTh@vP$}..yb)D07l]+sLs2C_=iSY*|FI#!z}WfK+');
define('LOGGED_IN_SALT',   '&m5Q:s^ddY{ni:QtoPlv|c7(0nx!hQ,*/XJDP=EBpl|M6:WxEM}j_y0X`NqAce.f');
define('NONCE_SALT',       '|+-S+T;CP;~[T5KPJHYbgxO|flG)^z6Qq&}V`UKg TeAWUzw6^e|o3c [qM{{_A-');

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

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
