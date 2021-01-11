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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'qlns' );

/** MySQL database username */
define( 'DB_USER', 'detan' );

/** MySQL database password */
define( 'DB_PASSWORD', '123' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '1qbPh dI<bAtP0/:+:W $TsS6KYceNaOoP46H{kXbN+o0:yOVKJa7C_3)/3d&1vH' );
define( 'SECURE_AUTH_KEY',  'g//OOinni{e.e*HPn UPZ1~EIDut-{ZF+%8fgUY9]%g-P^ 081Qq2-8|`zpZ>Mh;' );
define( 'LOGGED_IN_KEY',    '6eoytn.$7YK0{G>-%a8C*I(:V)_R5ip~ja:&x6yPfM@i{_v[i>$wwHN0G=,@B~s1' );
define( 'NONCE_KEY',        '#i=(;m*kerG_x}YX;#=Y.N^9`eGxpe;mj U#Kf*B^*D/{!9]?2Z+cmDg2RJr9N.r' );
define( 'AUTH_SALT',        'HzY}5;=.Sj<o82!Ph@T>A+U-h21M%T/4jt0_T9%Ddt(s :zy$.8&~zd8FSfaeC16' );
define( 'SECURE_AUTH_SALT', 'HV`A+hHv=A8L3|j5.P)nmWR-GVR!=C`%A=U??Cj U0@d>lU`UMu@@4$/B$i=;60J' );
define( 'LOGGED_IN_SALT',   '!Zw^YhZP]Qhq70-kGYiwLg!M?oD8C2u>fGB@;7gt=>-nUVreMN `){J1rVZ^h*Z ' );
define( 'NONCE_SALT',       '6^nx}1*2Hcuz%hb:M$byC]T1}Y[ix8ET6,^UI/jFq$+/#_z=&:lfr_gET?0Y{g4T' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
