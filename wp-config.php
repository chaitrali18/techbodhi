<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'techbodhi');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

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
define('AUTH_KEY',         'N=Hj}]<c]xwIf6B),)3W|hP-<f^FM@numv*anZbiya~ciahn3!Z!&wbNHGO`Ct,N');
define('SECURE_AUTH_KEY',  'X=BkA5*Fw*BZei({A8?A^|!b /WC}N Ca%s7h#V:fQD?ye9}iIf+A?gmrVDS&|#}');
define('LOGGED_IN_KEY',    'VN/<z|.5sJ>]ef92r0L>3sOx%;YQWWW3@cQ#.@IE6?3l#a(yv%bC`<9%Y.!F# 7k');
define('NONCE_KEY',        '1uIp0?1z(1=y;aBTraNV?,ORFmG%BYej=kPx*M`zNws22J=?e0;@*fcq7Bod?={V');
define('AUTH_SALT',        'mCVUzv#8~8OC|_M+YzBA0EH}|-3y8_FM_!KI,3VUrylF[ipeeUY}T+nPTY&4qLiG');
define('SECURE_AUTH_SALT', '~Fv;T? J{A$P7!*gyjCv^q^6YbU07M%aiE|Z^%~V1^j5;Ye}|oV{Gc:5tC$BSPUf');
define('LOGGED_IN_SALT',   '+02Q}udKm<02VaYvP[6-6R#sUfgST%xMpNeY^=/2Xp.!*L]%?*+=O~*D&;Pi*Em9');
define('NONCE_SALT',       '?7XY{7]3jCpDt`GC_MzS@p~C[6u!oK8fS +tbFs2G+I+7NVbCmmQDaJ[<VBsMtgl');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
