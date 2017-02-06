<?php
/**
 * Plugin Name: Pageblocks - Yoast SEO addon
 * Description: Add pageblocks content to Yoast SEO ranking
 * Version: 1.0.0
 * Author: Corjen Moll
 */

add_action( 'admin_enqueue_scripts', function () {
  wp_enqueue_script( 'pageblocks-yoast-seo', plugin_dir_url( __FILE__ ) . '/pageblocks-yoast-seo.js', array( 'jquery', 'yoast-seo-admin-script' ), '1.0', true );
} );

function yoast_bug_fix() {
    echo '<script type="text/javascript">var wpseoSelect2Locale = wpseoSelect2Locale || "en";</script>';
}
add_action('admin_footer', 'yoast_bug_fix');
?>
